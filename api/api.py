from os import access
from flask import Flask, json, request, jsonify
from flask_bcrypt import Bcrypt
from flask_cors import CORS
# from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from decouple import config
from uuid import uuid4
import db
import json

from flask_jwt_extended import create_access_token
# from flask_jwt_extended import get_jwt_identity
# from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app)

app.secret_key = config('SECRET_KEY')
jwt = JWTManager(app)

database = r'db.sqlite'
connection = db.open_connection(database)
db.create_tables(connection)
connection.close()

# Signing up user
@app.route('/signUp', methods = ['POST'])
def sign_up_user():
    # Retrieving sign up data from the client
    username = request.json.get('username')
    email = request.json.get('email')
    password = request.json.get('password')

    connection = db.open_connection(database)

    # Checks if the username already exists
    if db.get_user(connection, username) is not None:
        connection.close()
        return jsonify({'msg': 'User already exists'}), 409

    else:
        # Generate a unique user id string
        user_id = str(uuid4())

        # Hashing the password
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        # Adding the user to the Users table in the database
        db.add_user(connection, user_id, username, email, hashed_password)

        connection.close()

        return  jsonify({'msg': 'Sign up successful'}) , 200

# Authenticating user
@app.route('/signIn', methods = ['POST'])
def sign_in_user():
    username = request.json.get('username')
    password = request.json.get('password')

    # Attempting to get the user from the database
    connection = db.open_connection(database)   
    user = db.get_user(connection, username)
    connection.close()

    if user is not None:
        print(user)
        # Validate the password
        password_is_validated = bcrypt.check_password_hash(user['user_password'], password)

        if password_is_validated:
            # Create and return an access token
            access_token = create_access_token(identity = username)
            print(access_token)
            return jsonify(access_token = access_token), 200
        
        return jsonify({'msg': 'Bad username or password'}), 401
   
    return jsonify({'msg': 'User does not exist'}), 401

@app.route('/createPost', methods = ['POST'])
def create_post():
    post_title = request.json.get('title')
    post_author = request.json.get('author')
    post_date = request.json.get('date')
    post_text = request.json.get('text')
    post_topic = request.json.get('topic')

    post_id = str(uuid4())

    # Add post to database
    connection = db.open_connection(database)

    # Check if topic exists by attempting to retrieve topic_id from database
    topic_id = db.check_if_topic_exists(connection, post_topic)

    # If the topic exists, then add post with the topic_id
    if topic_id is not None:
        post_topic_id = topic_id
    else:
        # Otherwise, create a new topic_id and add it to the Topics table along with the name of the topic
        post_topic_id = str(uuid4())
        db.add_topic(connection, post_topic_id, post_topic)

    post_data = [
        post_id,
        post_title, 
        post_author, 
        post_date,
        post_text,
        post_topic_id
    ]

    db.add_post(connection, post_data)
    connection.close()

    return jsonify({'msg': 'Successful post creation'}), 200

@app.route('/getPosts', methods = ['POST'])
def get_posts():
    username = request.get_json()['username']

    connection = db.open_connection(database)
    posts_list = db.get_posts(connection, username)
    connection.close()

    return json.dumps(posts_list), 200


@app.route('/search', methods = ['POST'])
def search():
    search_term = request.get_json()['searchTerm']

    connection = db.open_connection(database)
    relevant_posts_list = db.searchPosts(connection, search_term)
    connection.close()

    return json.dumps(relevant_posts_list), 200

@app.route('/allTopics', methods = ['GET'])
def all_topics():
    connection = db.open_connection(database)
    all_topics_list = db.get_all_topics(connection)
    connection.close()

    return json.dumps(all_topics_list), 200

@app.route('/topic', methods = ['GET'])
def get_specific_topic_posts():
    topic = request.args.get('topic')

    print('the topic is ', topic)

    connection = db.open_connection(database)
    specific_topic_posts_list = db.get_specific_topic_posts(connection, topic);
    connection.close()

    return json.dumps(specific_topic_posts_list), 200

if __name__ == '__main__':
    app.run()
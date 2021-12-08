from os import access
from flask import Flask, json, request, jsonify
from flask_bcrypt import Bcrypt
from flask_cors import CORS
# from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from decouple import config
from uuid import uuid4
import db

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
    post_text = request.json.get('text')
    post_topic = request.json.get('topic')

    # Add post to database
    connection = db.open_connection(database)
    db.add_post(connection)
    connection.close()


if __name__ == '__main__':
    app.run()
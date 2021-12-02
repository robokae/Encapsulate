from flask import Flask, request, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_login import LoginManager
from decouple import config
from uuid import uuid4
import db

app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = ''

app.secret_key = config('SECRET_KEY')

database = r'db.sqlite'

connection = db.open_connection(database)
db.create_tables(connection)
connection.close()

@app.route('/checkUsername', methods = ['POST'])
def check_username():
    pass

@app.route('/signUp', methods = ['POST'])
def sign_up_user():
    # Retrieving sign up data from the client
    sign_up_info = request.get_json()
    username = sign_up_info.get('username')
    email = sign_up_info.get('email')
    password = sign_up_info.get('password')

    connection = db.open_connection(database)

    # Checks if the username already exists
    if db.check_if_username_exists(connection, username):
        connection.close()
        return str(409), 409

    else:
        # Generate a unique user id string
        user_id = str(uuid4())

        # Hashing the password
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        # Adding the user to the Users table in the database
        db.add_user(connection, user_id, username, email, hashed_password)

        connection.close()

        return str(200), 200

@app.route('/signIn', methods = ['POST'])
def sign_in_user():
    sign_in_info = request.get_json()

@app.route('/')
def index():
    return '<h1>Encapsulate</h1>'


if __name__ == '__main__':
    app.run()
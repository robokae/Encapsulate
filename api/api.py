from flask import Flask, request, session, redirect, url_for
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from decouple import config
from uuid import uuid4
import db

app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

app.secret_key = config('SECRET_KEY')

database = r'db.sqlite'

connection = db.open_connection(database)
db.create_tables(connection)
connection.close()

class User(UserMixin):
    def __init__(self, user_id, username, user_email, password):
        self.user_id = user_id
        self.username = username
        self.user_email = user_email
        self.password = password
        self.authenticated = False

    def is_authenticated(self):
        return self.authenticated

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.user_id


# Returns a User object
@login_manager.user_loader
def load_user(username):
    connection = db.open_connection(database)
    user = db.get_user(connection, username)
    connection.close()

    user_obj = User(user['user_id'], user['username'], user['user_email'], user['user_password'])

    return user_obj


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
        return 'User already exists', 409

    else:
        # Generate a unique user id string
        user_id = str(uuid4())

        # Hashing the password
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        # Adding the user to the Users table in the database
        db.add_user(connection, user_id, username, email, hashed_password)

        connection.close()

        return 'Sign up', 200

@app.route('/signIn', methods = ['POST'])
def sign_in_user():
    sign_in_info = request.get_json()
    username = sign_in_info.get('username')
    password = sign_in_info.get('password')

    # Authenticates user
    user = load_user(username)

    password_is_validated = bcrypt.check_password_hash(user.password, password)

    if password_is_validated:
        login_user(user)

        print(user.authenticated)
        return 'Sign in', 200
   
    return 'Unsuccessful sign in', 401

@app.route('/logout')
@login_required
def logout():
    logout_user()

    return 'Log out', 200


@app.route('/home')
@login_required
def index():
    return '<h1>Encapsulate</h1>'


if __name__ == '__main__':
    app.run()
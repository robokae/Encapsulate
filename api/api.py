from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

signed_in_user = []

@app.route('/signUp', methods = ['POST'])
def sign_up_user():
    sign_up_info = request.get_json()

    return 'JSON posted'

@app.route('/')
def index():
    return '<h1>Encapsulate</h1>'


if __name__ == '__main__':
    app.run()
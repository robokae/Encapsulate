#import flask to python file
from flask import Flask, render_template

#normal syntax for creating flask app
app=Flask(__name__)

#after endline(/) there must be a string, so it passes variables to the url 
@app.route('/<string:name>')

#you write the url and at the end write something then it will pop up. ex: http://127.0.0.1:5000/Joshua will print Hello Joshua 
def greet(name):
    return f'Hello {name}'

#if there is no string after endline then it will return hi emoji
#@app.route('/')
#def index():
#    return 'Hi emoji'

#render_template allows us to use html file
@app.route('/')
def index():
    #also passes list_of_names
    return render_template('hello.html', list_of_names=['josh', 'pizza', 'ben'])


@app.route('/about')
def about():
    return render_template('about.html')
    
#runs the app
if __name__=='__main__':
    app.run(debug=True)

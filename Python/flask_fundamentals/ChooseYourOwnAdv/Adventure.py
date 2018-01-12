#this is a choose your own adventure game

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/left')
def left():
    return render_template('left.html')

@app.route('/right')
def right():
    return render_template('right.html')

@app.route('/hole')
def hole():
    return render_template('hole.html')

@app.route('/old')
def old():
    return render_template('old.html')
app.run(debug=True)
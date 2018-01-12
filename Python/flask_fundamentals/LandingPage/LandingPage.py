#Behold! the code for this assignment

from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ninjas')
def ninjas():
    return render_template('ninjas.html')

@app.route('/dojos/newForm.html')
def dojos():
    return redirect('/thanks')


app.run(debug=True)
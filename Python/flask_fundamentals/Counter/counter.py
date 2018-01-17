from flask import Flask, render_template,request, session, redirect

app = Flask(__name__)
app.secret_key = "superSecret"

#routing
@app.route('/')
def index(amount=1):
    if "counter" in session: 
        print "you have been here"
        session['counter']= session['counter'] + 10
    else: 
        print "you haven't sesssioned yet"
        session['counter'] = "0"
    return render_template('index.html', counter=session['counter'])

@app.route('/<amount>')
def multiple(amount):
    if amount is 0: 
        session['counter']=0
    return index(int(amount))

app.run(debug=True)

'''
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = ":)"


@app.route('/')
def index(amount = 0):
    if "count" in session:
        session["count"] += amount
    else:
        session["count"] = 0

    return render_template('index.html')

@app.route('/<amount>')#set route to whatever amount we set
def multiple(amount):
    return index(int(amount))

@app.route('/reset')
def reset():
    session["count"] = 1
    return index(0)

app.run(debug=True)
'''
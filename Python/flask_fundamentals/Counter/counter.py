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
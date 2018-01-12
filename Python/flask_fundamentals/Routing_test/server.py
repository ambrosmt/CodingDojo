from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/thanks')
def thanks():
    return render_template('thanks.html')

@app.route('/users', methods=['POST','GET'])
def create_user():
    print "Got Post Info Pham"
    name = request.form['name']
    email = request.form['email']
    print request.form
    context = {
        'name' : name,
    }
    print context
    return render_template('/thanks.html', context = context)

'''
    context = {
        'name': redirect.form['name']
    } 

@app.route('/users/<username>')
def show_user_profile(username):
    print username
    return render_template('success.html', name = username)
'''
app.run(debug=True)

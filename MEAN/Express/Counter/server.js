// require express
const express = require("express");
// path module -- try to figure out where and why we use this
const path = require("path");
//require session
const session = require('express-session');
// create the express app
const app = express();
const bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// use session
app.use(session({secret: 'supersecretSupersafe'}));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function (req, res) {
    let count = req.session.count;
    if(count === undefined){
        req.session.count = 1;
    }
    else{
        count++;
        req.session.count = count;
    };
    var number = req.session.count;
    console.log(number)
    res.render("index", { 'count': number});
})
// post route for adding a user
app.post('/reset', function (req, res) {
    req.session.count = 0;
    res.redirect('/');
})
app.post('/addTwo', function (req, res) {
    console.log("POST DATA", req.body);
    req.session.count += 1;
    res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});
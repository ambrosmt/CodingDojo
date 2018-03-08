const express = require("express");
const path = require("path");
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'supersecretSupersafe' }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index");
})
app.post('/', function (req, res) {
    req.session.Context = req.body;
    res.redirect("result");
})

app.get('/result', function (req, res) {
    console.log("This is saved to session", req.session.Context)
    Context = req.session.Context;
    res.render("result", Context);
})

// app.post('/', function (req, res) {
//     req.session.count = 0;
//     res.redirect('/');
// })

app.listen(8000, function () {
    console.log("listening on port 8000");
});
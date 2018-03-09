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

var server = app.listen(8000, function () {
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    socket.on("formStr", function (data) {
        // console.log("Form Data: " + data);
        var LuckyNum = Math.floor(Math.random() * (1000 - 1)) + 1;
        // var obj = jQuery.parseJSON()
        var data = {
            "Form_Data": data,
            "LuckyNum": LuckyNum,
        }
        socket.emit('server_response', data);
        // console.log(, "thing should have been sent")
    });
});
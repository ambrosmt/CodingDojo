const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//==========DataBase==========//

mongoose.connect('mongodb://localhost/restful_tasks');

var PetSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: [3, "Pet name must be at least 3 characters long"] },
    type: { type: String, required: true, minlength: [3, "Pet type must be at least 3 characters long"] },
    description: { type: String, required: true, minlength: [3, "Description must be at least 3 characters long"] },
    skillone: { type: String, default: ""},
    skilltwo: { type: String, default: "" },
    skillthr: { type: String, default: "" },
}, { timestamps: true });
mongoose.Promise = global.Promise;
mongoose.model('Pet', PetSchema);
const appTask = mongoose.model('Pet');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client/dist'));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//==========Routes==========//

//Retrieve all Tasks
app.get('/pets', function (req, res) {
    appTask.find({}, function (err, tasks) {
        if (err) {
            console.log("*****\nsomething went wrong\n*****");
        }
        else {
            console.log("*****\nrendering json Data\n*****");
            res.json(tasks);
        }
    })
})

//Retrieve Task by Id
app.get('/pet/:id', function (req, res) {
    console.log(req.params)
    appTask.findOne({ _id: req.params.id }, function (err, tasks) {
        if (err) {
            console.log("*****\nsomething went wrong\n*****");
        }
        else {
            console.log("*****\nrendering json Data\n*****");
            res.json(tasks);
        }
    })
})

//Create Task
app.post('/pet', function (req, res) {
    console.log("POST DATA", req.body);
    var newTask = new appTask({ 
        name: req.body.name, 
        type: req.body.type, 
        description: req.body.description, 
        // could save this in an arr ... 
        skillone: req.body.skillone,
        skilltwo: req.body.skilltwo,
        skillthr: req.body.skillthr 
    });
    newTask.save(function (err) {
        if (err) {
            console.log("*****\nsomething went wrong\n*****");
            res.json(err);
        }
        else {
            console.log("*****\nnew user added and saved\n*****");
            res.redirect('/')
        }
    })
})

//covnert form data 
// app.post('/update', function(req, res){
//     console.log(req.body);
//     res.redirect()
// })

//Update Task by Id
app.put('/pet/:id', function (req, res) {
    console.log("PUT DATA", req.body);
    console.log("*****\ntask Id = " + req.params.id + "\n*****");
    var updateTask = appTask.findById(req.params.id, function (err, updateTask) {
        if (err) {
            console.log("*****Cannot find by Id*****")
            res.json(err);
        }
        else {
            updateTask.name = req.body.name;
            updateTask.type = req.body.type;
            updateTask.description = req.body.description;
            updateTask.skillone = req.body.skillone;
            updateTask.skilltwo = req.body.skilltwo;
            updateTask.skillthr = req.body.skillthr;
            updateTask.save(function (err) {
                if (err) {
                    console.log("*****\nCould not save\n*****\nError:" + err + "\n*****");
                    res.json(err);
                }
                else {
                    console.log("*****\nTask Updated\n*****");
                    route = '/details/' + req.params.id
                    res.redirect(route)
                }
            })
        }
    });
})

//Delete Task by Id
app.delete('/pet/delete/:id', function (req, res) {
    appTask.findByIdAndRemove(req.params.id, function (err, task) {
        if (err) {
            console.log("*****\nsomething went wrong\n*****\n" + err + "\n*****");
            res.json(err);
        }
        else {
            console.log("*****\nTask Deleted\n*****");
            res.json('deleted')
        }
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})
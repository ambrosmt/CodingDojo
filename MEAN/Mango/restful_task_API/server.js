const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/restful_tasks');

var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: { type: String, default: "" },
    completed: {type: Boolean, default: false}
}, { timestamps: true });
mongoose.Promise = global.Promise;
mongoose.model('Task', TaskSchema);
const appTask = mongoose.model('Task');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//Retrieve all Tasks
app.get('/tasks', function (req, res) {
    appTask.find({}, function(err, tasks){
        if(err){
            console.log("*****\nsomething went wrong\n*****");
        }
        else{
            console.log("*****\nrendering json Data\n*****");
            res.json(tasks);
        }
    })
})

//Retrieve Task by Id
app.get('/tasks/:id', function (req, res) {
    console.log(req.params)
    appTask.findOne({_id: req.params.id}, function (err, tasks) {
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
app.post('/tasks', function (req, res) {
    console.log("POST DATA", req.body);
    var newTask = new appTask({title: req.body.title, description: req.body.description});
    newTask.save(function(err){
        if(err){
            console.log("*****\nsomething went wrong\n*****");
        }
        else{
            console.log("*****\nnew user added and saved\n*****");
            res.redirect('/tasks')
        }
    })
})

//Update Task by Id
app.put('/tasks/:id', function (req, res) {
    console.log("PUT DATA", req.body);
    console.log("*****\ntask Id = "+ req.params.id +"\n*****");
    var updateTask = appTask.findById(req.params.id, function(err, updateTask){
        if(err){
            console.log("*****Cannot find by Id*****")
        }
        else{
            if(req.body.title){
                updateTask.title = req.body.title;
            }
            if(req.body.description){
                updateTask.description = req.body.description;
            }
            if(req.body.completed){
                updateTask.completed = req.body.completed;
            }
            updateTask.save(function (err) {
                if (err) {
                    console.log("*****\nCould not save\n*****\nError:"+err+"\n*****");
                }
                else {
                    console.log("*****\nTask Updated\n*****");
                    res.redirect('/tasks')
                }
            })
        }
    });
})

//Delete Task by Id
app.delete('/tasks/:id', function (req, res) {
    appTask.findByIdAndRemove(req.params.id, function(err, task){
        if (err) {
            console.log("*****\nsomething went wrong\n*****\n"+err+"\n*****");
        }
        else {
            console.log("*****\nTask Deleted\n*****");
            res.redirect('/tasks')
        }
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})
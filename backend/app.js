const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const connectDB = require('./database/db')
connectDB()
const bodyParser = require('body-parser')
//const { List, Task } = require('./database/models')
const List = require('./database/models/List');
const Task = require('./database/models/Task');
app.use(bodyParser.json())

// *Get all lists*
app.get('/lists', (req,res) => {
    //console.log("running")
    List.find().then((lists) => {
        res.send(lists)
    })
})

// *Create a list*
app.post('/lists', async (req,res) => { //create a new list
    try {
        const list = await List.create(req.body);
        res.status(200).json({success:true, data:list});
    } catch(err) {
        console.log(err)
        res.status(400).json({success:false})
    }
    // .create does .save internally
})


// *Update a list*
app.patch('/lists/:id', async (req,res) => {
    try {
        const list = await List.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if(!list){
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data:list});
    } catch(err) {
        console.log(err)
        res.status(400).json({success:false})
    }
})

// *Delete a list*
app.delete('/lists/:id', async (req,res) => {
    try {
        const list = await List.findByIdAndRemove(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if(!list){
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data:list});
    } catch(err) {
        console.log(err)
        res.status(400).json({success:false})
    }
})

app.get('/lists/tasks', async (req,res) => {
    Task.find().then((tasks) => {
        res.send(tasks)
    })
}) 


app.get('/lists/:listId/tasks', async (req,res) => { // get all tasks of a single list
    //console.log("req.params.listId: "+ req.params.listId)
    Task.find({
        _listId: req.params.listId
    }).then((tasks) => {
        res.send(tasks)
    })
}) 

app.get('/lists/:listId/tasks/:taskId', async (req,res) => {
    try {
        const task = await Task.find({
            _id: req.params.taskId,
            _listId: req.params.listId
            })
        if(!task){
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data:task});
    } catch(err) {
        console.log(err)
        res.status(400).json({success:false})
    }
}) 

app.post('/lists/:listId/tasks', async (req,res) => {
    try {
        const taskData = req.body;
        taskData._listId = req.params.listId; 
        const newTask = await Task.create(taskData);
        res.status(200).json({success:true, data:newTask});
    } catch(err) {
        console.log(err)
        res.status(400).json({success:false})
    }
}) 


app.patch('/lists/:listId/tasks/:taskId', async (req,res) => {
    try {
        const task = await Task.findOneAndUpdate({ //find a list and task with the
            //specific ID and then update that req.body
            _id: req.params.taskId,
            _listId: req.params.listId
            }, req.body, {
            new: true,
            runValidators: true
        })
        if(!task){
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data:task});
    } catch(err) {
        console.log(err)
        res.status(400).json({success:false})
    }
}) 

app.delete('/lists/:listId/tasks/:taskId', async (req,res) => {
    try {
        const task = await Task.findOneAndRemove({
            _id: req.params.taskId,
            _listId: req.params.listId
            }, req.body, {
            new: true,
            runValidators: true
        })
        if(!task){
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data:task});
    } catch(err) {
        console.log(err)
        res.status(400).json({success:false})
    }
}) 

app.listen(3000, () => {
    console.log("server is listening on port 3000")
})

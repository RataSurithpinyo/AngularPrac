const express = require('express')
const app = express()
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
        res.status(400).json({success:true, data:list});
    } catch(err) {
        console.log(err)
        res.status(400).json({success:false})
    }
    // get data form JSON request body
    //let title = req.body.title
    //console.log(title)
    // let newList = new List({
    //     title
    // })
    // newList.save().then((lists) => { //not sure about *lists* var
    //     res.send(lists)
    // })
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

app.listen(3000, () => {
    console.log("server is listening on port 3000")
})

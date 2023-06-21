const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    _listId: {
        type: mongoose.Types.ObjectId, //which list this task belongs to
        require: true
    }
})

module.exports = mongoose.model('Task', TaskSchema)
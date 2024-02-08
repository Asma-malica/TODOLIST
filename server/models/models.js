const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;






// const mongoose = require('mongoose')

// const TaskSchema = new mongoose.Schema({
//     todo : String ,
//     isComplete : Boolean
// })
// const Task = mongoose.model('task',TaskSchema)

// module.exports = Task
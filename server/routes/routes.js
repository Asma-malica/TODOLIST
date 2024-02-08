const express = require('express');
const router = express.Router();
const Task = require('../models/models');

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const task = new Task(req.body);
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        res.json(deletedTask);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;





// const express = require('express');
// const router = express.Router();

// const Task = require('../models/models');

// router.get('/', async (req, res) => {
//     try {
//         const task = new Task({
//             todo: "Make Lunch",
//             isComplete: false,
//         });

//         const savedTask = await task.save();
//         console.log('Task saved:', savedTask);

//         // Send a response back to the client
//         res.status(200).json({ message: 'Task saved successfully', task: savedTask });
//     } catch (err) {
//         console.error('Error saving task:', err);
//         // Handle the error and send an error response to the client
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// module.exports = router;

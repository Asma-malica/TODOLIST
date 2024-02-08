const express = require('express');
const router = express.Router();

const Task = require('../models/models');

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find().exec();
        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', (req, res) => {
    const task = new Task(req.body);
    task.save()
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

router.put('/:id', (req, res) => {
    Task.findOneAndUpdate(
        {
            _id: req.params.id,
        },
        req.body,
        {
            new: true,
        },
        (err, doc) => {
            if (err) console.log(err);
            res.json(doc);
        }
    );
});

router.delete('/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err) console.log(err);
        res.json(doc);
    });
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

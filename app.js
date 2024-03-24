const express = require('express');
const mongoose = require('mongoose');
const Task = require('./task');

const app = express();
const PORT = process.env.PORT || 3000;

// Connecting to MongoDB
mongoose.connect('mongodb://localhost/student_tasks', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Checking MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(express.json());

app.get('/courses/:courseId/tasks', async (req, res) => {
    const { courseId } = req.params;

    try {
        const tasks = await Task.find({ courseId });
        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found for the specified course ID' });
        }
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
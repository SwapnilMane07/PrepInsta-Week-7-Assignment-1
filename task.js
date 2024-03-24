const mongoose = require('mongoose');

// Task schema
const taskSchema = new mongoose.Schema({
    courseId: { type: String, required: true },
    taskName: { type: String, required: true },
    dueDate: { type: Date, required: true },
    additionalDetails: { type: String }
});

module.exports = mongoose.model('task', taskSchema);
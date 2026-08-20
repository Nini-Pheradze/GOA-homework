const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;
const FILE_PATH = path.join(__dirname, 'tasks.json');

app.use(cors());
app.use(express.json());


const readTasks = () => {
    if (!fs.existsSync(FILE_PATH)) {
        fs.writeFileSync(FILE_PATH, JSON.stringify([]));
    }
    const data = fs.readFileSync(FILE_PATH, 'utf8');
    return JSON.parse(data || '[]');
};

const writeTasks = (data) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};


// to get all tasks
app.get("/api/tasks", (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

// to get one concrete task
app.get('/api/tasks/:id', (req, res) => {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) return res.status(404).json({ message: 'Task Cannot be found!'});
    res.json(task);
});

// to post a task
app.post('/api/tasks', (req, res) => {
    const { text } = req.body;
    if(!text) return res.status(400).json({ message: "Text is important!"});

    const tasks = readTasks();
    const newTask = {
        id: Date.now().toString(),
        text,
        completed: false
    };

    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});


// updating tasks
app.put('/api/tasks/:id', (req, res) => {
    const tasks = readTasks();
    const index = tasks.findIndex(t => t.id === req.params.id);

    if (index === -1) return res.status(404).json({ message: "Task cannot be found!" });

    tasks[index] = { ...tasks[index], ...req.body};
    writeTasks(tasks);
    res.json(tasks[index]);
});


// deleteing tasks
app.delete('api/tasks/:id', (req, res) => {
    const tasks = readTasks();
    const filteredTasks = tasks.filter(t => t.id !== req.params.id);

    if (tasks.length === filteredTasks.length) {
        return res.status(404).json({ message: 'Task cannot be found' });
    }

    writeTasks(filteredTasks);
    res.json({ message: 'Task deleted successfull!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
// 1) შექმენით პროექტი სადაც გამოიყენებთ CRUD operations, თქვენი კოდი გადაანაწილეთ შესაბამის folder - ებში და ფაილებში, შექმენით routers folder - ი, სადაც შეინახავთ router - ს შესაბამისი მეთოდებით, აგრეთვე მოიძიეთ ინფორმაცია ერთ-ერთ middleware - ზე, morgan - ის შესახებ, და გამოიყენეთ ის თქვენს პროექტში

const express = require('express');
const app = express();
app.use(express.json())

const tasks = [
    {
        id: 1,
        title: "Learn JavaScript",
        description: "Study arrays, objects and functions",
        status: "pending",
        priority: "high"
    },
    {
        id: 2,
        title: "Build CRUD project",
        description: "Create simple API with Node.js",
        status: "in progress",
        priority: "medium"
    },
    {
        id: 3,
        title: "Practice MongoDB",
        description: "Learn insertOne, find, updateOne, deleteOne",
        status: "pending",
        priority: "high"
    },
    {
        id: 4,
        title: "Read documentation",
        description: "Read Express.js documentation",
        status: "done",
        priority: "low"
    },
    {
        id: 5,
        title: "Create portfolio",
        description: "Make simple website for projects",
        status: "pending",
        priority: "medium"
    }
];

// Route to get all tasks in json format
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// route to get tasks by id
app.get('/tasks/:id', (req, res) => {
    const { id } = req.params;

    const task = tasks.find(t => t.id === parseInt(id));

    if(!task) {
        res.status(404).json({ message: "Task doesn't exist!" });
    }

    res.json(task);
});

// Route to post new task
app.post('/tasks', (req, res) => {
    const { title, description, status, priority } = req.body;

    if (!title || !description || !status || !priority) {
        return res.status(404).json({ message: "New task cannot be added!" });
    };

    const newTask = {
        id: Date.now(),
        title,
        description,
        status,
        priority
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Route to delete task by id
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task cant be found to delete!" });
    };

    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

// put route
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, status, priority } = req.query;

    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return res.status(404).json({ message: 'Task cant be found to change!' });
    }

    if(title) task.title = title;
    if(description) task.description = description;
    if(status) task.status = status;
    if(priority) task.priority = priority;

    res.status(200).json(task);
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
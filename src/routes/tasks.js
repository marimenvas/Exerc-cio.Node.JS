const { Router } = require('express');
const { post } = require('.');
const router = Router();
const _ = require('underscore');

const tasks = require('../tasks.json');
console.log(tasks);

router.get('/', (req, res) => {
    res.json(tasks);
});

router.post('/', (req, res) => {
    const { task, description, done, created_at, updated_at }= req.body;
    if (task && description && done && created_at && updated_at) {
        const id = tasks.length + 1;
        const newTask = {...req.body, id};
        tasks.push(newTask);
        res.json(tasks);
    }else{
        res.status(500).json({error:'There was an error.'});
    }    
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { task, description, done, created_at, updated_at }= req.body;
    if (task && description && done && created_at && updated_at) {
        _.each(tasks, (task, i) => {
            if (task.id == id){
                task.task = task;
                task.decription == description;
                task.done == done;
                task.created_at == created_at;
                task.updated_at == updated_at;
            }
        });
        res.json(tasks);
    }else{
        res.status(500).json({error:'There was an error/all fields are required.'});
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(tasks,(task, i) => {
        if (task.id == id){
            tasks.splice(i, 1);
        }
    });
    res.send(tasks);
});

module.exports = router;
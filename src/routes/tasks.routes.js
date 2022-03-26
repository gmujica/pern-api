const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello word');
})

router.get('/tasks', (req, res) => {
    res.send('creating a task');
})

router.get('/tasks/1', (req, res) => {
    res.send('creating a task');
})

router.post('/tasks', (req, res) => {
    res.send('creating a task');
})

router.delete('/tasks', (req, res) => {
    res.send('deleting a task');
})

router.put('/tasks', (req, res) => {
    res.send('updating a task');
})

module.exports= router; 
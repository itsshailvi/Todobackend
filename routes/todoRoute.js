const express = require('express');
const Todo = require('../modals/todo');
const router = express.Router();




router.get('/', async(req, res) => {
    try{
        const todos = await Todo.find()
        res.send(todos);
    }
    catch{
        res.send('get Error')
    }
  })

  router.post('/', async(req, res) => {
    const todos = new Todo({
        id: req.body.id,
        item: req.body.item
    })
    try{
        const data = await todos.save()
        res.json(data);
    }
    catch{
        res.send('post Error')
    }
  })

  module.exports = router
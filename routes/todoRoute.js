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

   
  router.put('/:id', async(req, res) => {
    console.log(req.params.id,'test')
    const todoId = req.params.id;
    try{
        await Todo.updateOne({id: todoId} ,
        { $set: { "item" : 'justin' } })
        res.send("updated successfully");
    }
    catch{
        res.send('update Error')
    }
  })

  router.delete('/:id', async(req, res) => {
    console.log(req.params.id,'test')
    const todoId = req.params.id;
    try{
        await Todo.deleteOne({id: todoId})
        res.send("Deleted successfully");
    }
    catch{
        res.send('delete Error')
    }
  })
  // Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

  module.exports = router
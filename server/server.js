const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

// create new todo
app.post('/todos', (req, res) => {
  var newTodo = new Todo({
    text: req.body.text
  });

  newTodo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

// get all todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});

// get specific todo
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(500).send('ID is not valid');
  }

  Todo.findById(id).then((doc) => {
    if (!doc) {
      return res.status(404).send('No records found');
    }
    res.send(doc);
  }, (err) => {
      console.log('2');
      res.status(500).send('Something went wrong in getting your todo');
  })
});

// delete specific todo
app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(404).send('Invalid Id');
  }

  Todo.findByIdAndRemove(id).then((doc) => {
    if (!doc) {
      res.status(404).send(`Not found or already deleted`);
    }
    res.send('Successfully removed task: ' + doc.text);
  }).catch((err) => {
    res.status(500).send('Oops');
  });

});

// start server
app.listen(3000, () => {
  console.log('Started port on port:3000');
});

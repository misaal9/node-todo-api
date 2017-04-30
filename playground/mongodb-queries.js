const {ObjectId} = require('mongodb');

//const {Todo} = require('./../models/todo');
//mongoose.Promise = global.Promise;
const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = "5904c86a935e27fbc4873dd8";

// console.log(ObjectId.isValid(id));

User.findById(id).then((todo) => {
  if (!todo) {
    return console.log('No todos found');
  }

  console.log(JSON.stringify(todo, undefined, 2));
}).catch((err) => {
  console.log(err);
});

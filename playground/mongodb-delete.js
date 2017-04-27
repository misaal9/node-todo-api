//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  db.collection('Users').findOneAndDelete({
    _id: ObjectID('59018eb7be6e793fc561d770')
  }).then((result)=>{
    console.log(result.value);
  }, (err)=>{
    console.log('Unable to delete');
  })

  db.close();
});

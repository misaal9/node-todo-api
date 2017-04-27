//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  db.collection('Users').find({
    name: 'Andrew'
  }).toArray().then((docs)=>{
    console.info(JSON.stringify(docs, undefined, 4));
  });

  db.close();
});

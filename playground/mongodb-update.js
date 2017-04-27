//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  db.collection('Users').findOneAndUpdate({
    _id: ObjectID('59018d1458b0cd3fafa63cfd')
  },
  {
    $inc: {
      age: 1
    },
    $set: {
      name: 'Joe'
    }
  },
  {
    returnNewDocument: false
  }).then((result)=>{
    console.log(result);
  });

  db.close();
});

const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://localhost:27017/test';

module.exports = app => {
  MongoClient.connect(MONGO_URL)
    .then(connection => {
      app.test = connection.collection('test');
      console.log('Database connection established');
    })
    .catch(err => console.log(err));
};

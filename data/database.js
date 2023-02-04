const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

// let mongodbUrl = 'mongodb://127.0.0.1:27017';
//let mongodbUrl = 'mongodb://mongo:pyIl6GGXCsWmpOHYP7FY@containers-us-west-151.railway.app:7206';

if(process.env.MONGODB_URL){
  mongodbUrl = process.env.MONGODB_URL;
}

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
  database = client.db('online-shop');
}

function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};
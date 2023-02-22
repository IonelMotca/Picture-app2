const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;


let mongodbUrl = 'mongodb://127.0.0.1:27017/';
// let mongodbUrl = 'mongodb+srv://ionel:mere@cluster1.n2ueivv.mongodb.net/?retryWrites=true&w=majority';

// if(process.env.MONGODB_URL){
//   mongodbUrl = process.env.MONGODB_URL;
// }

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(mongodbUrl);
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
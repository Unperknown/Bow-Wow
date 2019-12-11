const mongoClient = require('mongodb').MongoClient;
const dbURL = 'mongodb://localhost:27017';
const dbName = 'Bow-Wow';
const colName = 'images';

exports.insert = async data => {
    const client = await mongoClient.connect(dbURL, { useUnifiedTopology: true, useNewUrlParser: true }).catch(err => console.log(err));
    const db = client.db(dbName).collection(colName); 

    let result = await db.insertOne(data);

    client.close();

    return result;
};
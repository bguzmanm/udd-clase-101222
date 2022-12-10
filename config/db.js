// const { MongoClient } = require('mongodb');

const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_DB);
    console.log('The database is connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;



// const getPersonas = async () => {
//   let persons;
//   const dbPersons = new MongoClient(uri);
//   try {
//     const database = dbPersons.db('db_persons');
//     const coll = database.collection('persons');
//     const cursor = coll.find({});
//     persons = await cursor.toArray();
//   } catch (error) {
//     console.error(error);
//   } finally {
//      await dbPersons.close();
//   }
//   return persons;
// }

// const getPersona = async (nombre) => {
//   let persons;
//   const filter = {
//     name: nombre
//   }
//   const dbPersons = new MongoClient(uri);
//   try {
//     const database = dbPersons.db('db_persons');
//     const coll = database.collection('persons');
//     const cursor = coll.find({filter});
//     persons = await cursor.toArray();
//   } catch (error) {
//     console.error(error);
//   } finally {
//      await dbPersons.close();
//   }
//   return persons;
// }

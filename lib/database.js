const MongoClient = require("mongodb").MongoClient;
let cachedDb = null;

export const connectToDatabase = async () => {
    if(cachedDb){
        console.log('Using The existing connection');
        return Promise.resolve(cachedDb);
    }

    return MongoClient.connect('mongodb+srv://muhima:muhima@cluster0.y2v7d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then((client) => {
        let db = client.db('muhima-attendance');
        console.log('New Db Connection');
        cachedDb = db;
        return cachedDb;
      })
      .catch((error) => {
        console.log("Mongo connect Error");
        console.log(error);
      });
};

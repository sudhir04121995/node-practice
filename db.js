import { MongoClient } from "mongodb";

const connectionString ="mongodb://127.0.0.1:27017/";

 async function mongoConnection(){
    const client = new MongoClient(connectionString)
    await client.connect();
    console.log("Database Connected Successfully")
    return client
}

export const client = await mongoConnection();
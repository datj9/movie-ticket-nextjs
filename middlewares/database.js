import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const mongoURI = process.env.MONGODB_URI;

const client = new MongoClient(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function database(req, res, next) {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db("MyMed");
    return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;

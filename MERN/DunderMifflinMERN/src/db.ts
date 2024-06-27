import { Db, MongoClient } from "mongodb";

let db: Db;

export const connectDB = async () => {
	const client = new MongoClient(process.env.MONGODB_URI!);

	await client.connect();

	db = client.db(process.env.MONGODB_DB);

	console.log("[MONGODB] Connected to MongoDB", db.databaseName);
};

export const getDB = () => db;

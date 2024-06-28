import { Collection, ObjectId } from "mongodb";
import {
  FilterUserType,
	FilterUsersType,
	UserType,
} from "../types/UserTypes";
import { getDB } from "../db";
import { cleanData } from "../_utils";

export class User {
	private collection: Collection<UserType>;

	constructor() {
		this.collection = getDB().collection<UserType>("users");
		this.createIndexes();
	}

	async create(userData: UserType) {
		const result = await this.collection.insertOne(userData);

		return await this.collection.findOne({ _id: result.insertedId });
	}

	async getAll() {
		return await this.collection.find().toArray();
	}

	async findBy(
		query: FilterUserType | FilterUsersType,
		many: boolean = false
	) {
    const cleanedQuery = cleanData(query, ["_id", "email", "firstName", "lastName"]);

		if (many) {
			return await this.collection.find(cleanedQuery).toArray();
		}

		return await this.collection.findOne(cleanedQuery);
	}

	// async update(userData: UpdateUserType) {
	// 	const { id, ...data } = userData;

	// 	return await this.collection.findOneAndUpdate(
	// 		{
	// 			_id: new ObjectId(id),
	// 		},
	// 		{
	// 			$set: data,
	// 		},
	// 		{
	// 			returnDocument: "after",
	// 		}
	// 	);
	// }

	private async createIndexes() {
		await this.collection.createIndex(
			{ email: 1 },
			{ unique: true, name: "email_unique" }
		);
	}
}

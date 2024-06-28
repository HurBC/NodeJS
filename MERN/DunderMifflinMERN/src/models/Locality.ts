import { Collection, ObjectId } from "mongodb";
import {
	AddressType,
	AddressWithCommuneType,
	CommuneType,
} from "../types/LocalityTypes";
import { getDB } from "../db";
import { cleanData } from "../_utils";

export class Commune {
	private collection: Collection<CommuneType>;

	constructor() {
		this.collection = getDB().collection<CommuneType>("communes");
		this.createIndexes();
	}

	async create(communeData: CommuneType) {
		const result = await this.collection.insertOne(communeData);

		return await this.collection.findOne({ _id: result.insertedId });
	}

	async findByName(name: string) {
		return await this.collection.findOne({ name });
	}

	private async createIndexes() {
		await this.collection.createIndex(
			{ name: "text" },
			{ unique: true, name: "name_unique" }
		);
	}
}

export class Address {
	private collection: Collection<AddressType>;

	constructor() {
		this.collection = getDB().collection<AddressType>("addresses");
	}

	async create(addressData: AddressType) {
		const cleanedData = cleanData(addressData, ["floor", "department"]);
		const result = await this.collection.insertOne(cleanedData);

		return await this.collection.findOne({ _id: result.insertedId });
	}

	async getAll() {
		return (await this.collection
			.aggregate([
				{
					$lookup: {
						from: "communes",
						localField: "communeId",
						foreignField: "_id",
						as: "commune",
					},
				},
				{
					$unwind: "$commune",
				},
			])
			.toArray()) as AddressType[];
	}
}

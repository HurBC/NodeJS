import { Collection, ObjectId } from "mongodb";
import { SearchUserType, SearchUsersType, UserType } from "../types/UserTypes";
import { getDB } from "../db";

export class User {
  private collection: Collection<UserType>;

  constructor() {
    this.collection = getDB().collection<UserType>("users");
    this.createIndexes();
  }

  async create(userData: UserType) {
    const result = await this.collection.insertOne(userData);

    return await this.collection.findOne({_id: result.insertedId});
  }

  async getAll() {
    return await this.collection.find().toArray();
  }

  async findBy(query: SearchUserType | SearchUsersType, many: boolean = false) {
    if (many) {
      return await this.collection.find(query).toArray();
    }

    return await this.collection.findOne(query);
  }

  private async createIndexes() {
    await this.collection.createIndex({email: 1}, {unique: true, name: "email_unique"});
  }
}
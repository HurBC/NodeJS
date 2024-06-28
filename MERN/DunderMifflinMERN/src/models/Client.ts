import { Collection } from "mongodb";
import { ClientType } from "../types/ClientTypes";
import { getDB } from "../db";
import { cleanData } from "../_utils";
export class Client {
  private collection: Collection<ClientType>;

  constructor() {
    this.collection = getDB().collection<ClientType>("clients");
  }

  async create(clientData: ClientType) {
    const cleanedData = cleanData(clientData, ["address", "email", "responsible"])
    const result = await this.collection.insertOne(cleanedData);

    return await this.collection.findOne({_id: result.insertedId});
  }

  async getAll() {
    const pipeline = [
      {
        $lookup: {
          from: "users",
          localField: "responsible",
          foreignField: "_id",
          as: "responsible"
        }
      },
      { $unwind: "$responsible" },
      {
        $lookup: {
          from: "addresses",
          localField: "address",
          foreignField: "_id",
          as: "address"
        }
      },
      { $unwind: "$address" },
      {
        $lookup: {
          from: "communes",
          localField: "address.communeId",
          foreignField: "_id",
          as: "commune"
        }
      },
      { $unwind: "$commune" },
      {
        $project: {
          _id: 1,
          name: 1,
          email: 1,
          phone: 1,
          address: {
            street: "$address.street",
            number: "$address.number",
            commune: {
              name: "$commune.name",
              region: "$commune.region",
              country: "$commune.country"
            }
          },
          responsible: {
            id: "$responsible._id",
            firstName: "$responsible.firstName",
            lastName: "$responsible.lastName",
            email: "$responsible.email",
            phone: "$responsible.phone",
            role: "$responsible.role"
          }
        }
      }
    ]

    return await this.collection.aggregate(pipeline).toArray();
  }
}
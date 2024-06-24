import { Schema, model } from "mongoose";
import { CommuneSchemaType } from "../schemas/localitysSchemas";

const communeSchema = new Schema<CommuneSchemaType>({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	region: {
		type: String,
		required: true,
		trim: true,
	},
	country: {
		type: String,
		required: true,
		trim: true,
	},
});

const addressSchema = new Schema({
	street: {
		type: String,
		required: true,
		trim: true,
	},
	streetNumber: {
		type: Number,
		required: true,
	},
	floor: {
		type: Number,
		optional: true,
	},
	department: {
		type: String,
		optional: true,
		trim: true,
	},
	commune: {
		type: Schema.Types.ObjectId,
		ref: "Commune",
		required: true,
	},
});

const models = {
	Commune: model("Commune", communeSchema),
	Address: model("Address", addressSchema),
};

export default models;

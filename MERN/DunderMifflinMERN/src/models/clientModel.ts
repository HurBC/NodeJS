import { Schema, model } from "mongoose";

const clientSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			optional: true,
		},
		phone: {
			type: String,
			unique: true,
		},
		address: {
			type: Schema.Types.ObjectId,
			ref: "Address",
			optional: true,
		},
		responsible: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true }
);

// Create and export a MongoDB Model
export default model("Client", clientSchema);

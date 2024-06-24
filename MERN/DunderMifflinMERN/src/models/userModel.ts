import { Schema, model } from "mongoose";
import { UserSchemaType } from "../schemas/usersSchemas";

// Create a Schema for the User Collection
const userSchema = new Schema<UserSchemaType>(
	{
		firstName: { type: String, required: true, trim: true },
		lastName: { type: String, required: true, trim: true },
		role: {
			type: String,
			required: true,
			trim: true,
			default: "employee",
			enum: ["employee", "manager", "client"],
		},
		email: { type: String, required: true, unique: true, trim: true },
		password: { type: String, required: true },
	},
	{ timestamps: true }
);

// Create and export a MongoDB Model
export default model("User", userSchema);

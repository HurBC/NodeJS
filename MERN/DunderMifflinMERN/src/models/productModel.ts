import { Schema, model } from "mongoose";
import { ProductSchema } from "../schemas/productsSchemas";

const productSchema = new Schema<ProductSchema>({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	stock: {
		type: Number,
	},
	description: {
		type: String,
		optional: true,
	},
	category: {
		type: String,
		required: true,
	},
});

export default model("Product", productSchema);

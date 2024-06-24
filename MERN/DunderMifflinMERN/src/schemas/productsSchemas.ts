import { z } from "zod";

export const productSchema = z.object({
	name: z.string({
		required_error: "Name of product is required",
	}),
	description: z.string().optional(),
	price: z.number({
		required_error: "Price of product is required",
	}),
	stock: z.number({
		required_error: "Stock of product is required",
	}),
	category: z.string({
		required_error: "Category of product is required",
	}),
});

export type ProductSchema = z.infer<typeof productSchema>;

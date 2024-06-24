import { z } from "zod";

export const clientSchema = z.object({
	name: z.string({
		required_error: "Name is required",
	}),
	email: z.string().email().optional(),
	phone: z.string(),
	address: z.string().optional(),
	responsible: z.string({
		required_error: "Responsible is required",
	}),
});

export const updateClientSchema = z.object({
	name: z.string().optional(),
	email: z.string().email().optional(),
	phone: z.string().optional(),
});

// export type
export type ClientSchemaType = z.infer<typeof clientSchema>;

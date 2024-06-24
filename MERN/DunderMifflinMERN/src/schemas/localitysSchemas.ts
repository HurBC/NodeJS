import { z } from "zod";

const communeSchema = z.object({
	name: z.string({
		required_error: "Name is required",
	}),
	region: z.string({
		required_error: "Region is required",
	}),
	country: z.string({
		required_error: "Country is required",
	}),
});

export const addressSchema = z.object({
	street: z.string({
		required_error: "Street is required",
	}),
	streetNumber: z.number({
		required_error: "Number is required",
	}),
	floor: z.number().optional(),
	department: z.string().optional(),
	commune: communeSchema,
});

export const updateAddressSchema = z.object({
	street: z.string().optional(),
	streetNumber: z.number().optional(),
	floor: z.number().optional(),
	department: z.string().optional(),
	commune: communeSchema.optional(),
});

// export types
export type CommuneSchemaType = z.infer<typeof communeSchema>;
export type AddressSchemaType = z.infer<typeof addressSchema>;
export type UpdateAddressSchemaType = z.infer<typeof updateAddressSchema>;

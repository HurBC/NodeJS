import { z } from "zod";

export const userSchema = z.object({
	firstName: z.string({
		required_error: "First name is required",
	}),
	lastName: z.string({
		required_error: "Last name is required",
	}),
	role: z.enum(["client", "employee", "manager"]).default("employee"),
	email: z
		.string({
			required_error: "Email is required",
		})
		.email(),
	password: z
		.string({
			required_error: "Password is required",
		})
		.min(6, {
			message: "Password must be at least 6 characters",
		}),
});

export const loginSchema = z.object({
	email: z
		.string({
			required_error: "Email is required",
		})
		.email({
			message: "Invalid email address",
		}),
	password: z.string({
		required_error: "Password is required",
	}),
});

export type UserSchemaType = z.infer<typeof userSchema>;

import { z } from "zod";

export const registerSchema = z.object({
	firstName: z
		.string({
			required_error: "First name is required",
		})
		.min(2)
		.max(30),
	lastName: z
		.string({
			required_error: "Last name is required",
		})
		.min(2)
		.max(30),
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
		.min(6)
		.max(30),
});

export const loginSchema = z.object({
	email: z
		.string({
			required_error: "Email is required",
		})
		.email(),
	password: z
		.string({
			required_error: "Password is required",
		})
		.min(6)
		.max(30),
});

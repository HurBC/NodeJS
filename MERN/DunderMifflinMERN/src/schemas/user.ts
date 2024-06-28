import { ObjectId } from "mongodb";
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
	role: z
		.enum(["employee", "manager"], {
			errorMap: (issue, _ctx) => {
				switch (issue.code) {
					case "invalid_enum_value":
						return {
							message: "Role must be either employee or manager",
						};
					case "invalid_type":
						return {
							message: "Role must be a string",
						};
					default:
						return { message: "Role is invalid" };
				}
			},
		})
		.default("employee"),
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

export const queryForUsersSchema = registerSchema
	.omit({ password: true, email: true })
	.extend({ id: z.instanceof(ObjectId) })
	.partial();

export const updateUserSchema = registerSchema
	.partial()
	.extend({ id: z.instanceof(ObjectId) });

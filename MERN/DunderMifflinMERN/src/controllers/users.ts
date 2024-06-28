import { Request, Response } from "express";
import { QueryUserType, QueryUsersType, UserType } from "../types/UserTypes";
import bc from "bcryptjs";
import { User } from "../models/User";
import { queryForUsersSchema, updateUserSchema } from "../schemas/user";
import { z } from "zod";
import { ObjectId } from "mongodb";
import { verifyQuery } from "../_utils";

export const register = async (req: Request, res: Response) => {
	const data: UserType = req.body;

	try {
		const hashedPassword = await bc.hash(data.password, 10);

		const user = await new User().create({
			...data,
			password: hashedPassword,
			role: data.role ?? "employee",
			created_at: new Date(),
			updated_at: new Date(),
		});

		res.status(200).json({
			message: "User registered successfully",
		});
	} catch (error) {
		res.status(500).json({
			message: "Error registering user",
			error,
		});
	}
};

const getUsersBy = async (query: QueryUsersType, res: Response) => {
	console.log("[USERS]");

	try {
		queryForUsersSchema.parse(query);

		const users = await new User().findBy(query, true);

		if (Array.isArray(users)) {
			const formatUsers = users.map((user) => {
				return {
					id: user._id,
					firstName: user.firstName,
					lastName: user.lastName,
					fullName: `${user.firstName} ${user.lastName}`,
					email: user.email,
					role: user.role,
					createdAt: user.created_at,
					updatedAt: user.updated_at,
				};
			});

			res.status(200).json(formatUsers);
		}
	} catch (error) {
		if (error instanceof z.ZodError) {
			res.status(400).json({
				message: "Bad request",
				error: error.errors.map((error) => ({
					fields: error.path.join(", "),
					message: error.message,
				})),
			});
		} else {
			res.status(500).json({
				message: "Error fetching users",
				error,
			});
		}
	}
};

const getUserBy = async (query: QueryUserType, res: Response) => {
	console.log("[USER]");
	console.log("[QUERY]:", query);
	try {
		const user = await new User().findBy({
			_id: new ObjectId(query.id),
			firstName: query.firstName,
			lastName: query.lastName,
			email: query.email,
		});

		if (!user) {
			throw new Error("User not found");
		}

		if (!Array.isArray(user)) {
			res.status(200).json({
				id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
				fullName: `${user.firstName} ${user.lastName}`,
				email: user.email,
				role: user.role,
				createdAt: user.created_at,
				updatedAt: user.updated_at,
			});
		}
	} catch (error) {
		res.status(404).json({ message: "404 User not found" });
	}
};

export const getQuery = async (req: Request, res: Response) => {
	try {
		if (req.query.many) {
			const { many, ...query }: QueryUsersType = req.query;

			// verify query
			verifyQuery({ ...query }, { all: "true", without: ["role"] });

			// verify is many === "true" && role don't exist
			if (many === "true" && !query.role)
				throw new Error("Cannot use 'many' if 'role' don't exist");

			// throw error if many === "false" && role exist
			if (many === "false" && query.role)
				throw new Error("Cannot use 'role' if 'many' is false");

			if (many === "true") {
				await getUsersBy(query, res);
			} else {
				await getUserBy(query, res);
			}
		} else throw new Error("Invalid query: 'many' is missing in query");
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json({
				message: error.message,
			});
		} else
			res.status(500).json({
				message: "Error fetching users",
				error,
			});
	}
};

// export const updateUser = async (req: Request, res: Response) => {
// 	try {
// 		if (!req.query.id) {
// 			throw new Error("Invalid query: 'id' is missing in query");
// 		}

// 		const { id, ...data }: QueryUserType = req.body;

// 		updateUserSchema.parse({
// 			id: new ObjectId(id),
// 			...data,
// 		});

// 		const user = await new User().findBy({ id }, false);

// 		if (!user) {
// 			throw new Error("User not found");
// 		}

// 		if (!Array.isArray(user)) {
// 			res.status(200).json({
// 				id: user._id,
// 				firstName: user.firstName,
// 				lastName: user.lastName,
// 				fullName: `${user.firstName} ${user.lastName}`,
// 				email: user.email,
// 				role: user.role,
// 				createdAt: user.created_at,
// 				updatedAt: user.updated_at,
// 			});
// 		}
// 	} catch (error) {
// 		if (error instanceof z.ZodError) {
// 			res.status(400).json({
// 				message: "Bad request",
// 				error: error.errors.map((error) => ({
// 					fields: error.path.join(", "),
// 					message: error.message,
// 				})),
// 			});
// 		} else if (error instanceof Error) {
// 			res.status(400).json({
// 				message: error.message,
// 			});
// 		} else
// 			res.status(500).json({
// 				message: "Error fetching users",
// 				error,
// 			});
// 	}
// };

export const getUsers = async (_: any, res: Response) => {
	try {
		const users = await new User().getAll();

		const formatUsers = users.map((user) => {
			return {
				id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
				fullName: `${user.firstName} ${user.lastName}`,
				email: user.email,
				role: user.role,
				createdAt: user.created_at,
				updatedAt: user.updated_at,
			};
		});

		res.status(200).json(formatUsers);
	} catch (error) {
		res.status(500).json({
			message: "Error fetching users",
			error,
		});
	}
};

import { Request, Response } from "express";
import { SearchUserType, SearchUsersType, UserType } from "../types/UserTypes";
import bc from "bcryptjs";
import { User } from "../models/User";

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

export const getQuery = async (req: Request, res: Response) => {
  try {
    const {role} = req.query;
    
    if (role) {
      await getUsersBy(req, res);
    } else {
      await getUserBy(req, res);
    }
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error,
    });
  }
}

const getUsersBy = async (req: Request, res: Response) => {
	const params: SearchUsersType = req.query;

	try {
		const users = await new User().findBy(params, true);

		if (!users) {
			throw new Error("Users not found");
		}

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
		res.status(404).json({ message: "404 User not found" });
	}
};

const getUserBy = async (req: Request, res: Response) => {
	const params: SearchUserType = req.query;

	try {
		const user = await new User().findBy(params);

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

export const getUsers = async (req: Request, res: Response) => {
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

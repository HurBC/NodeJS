import { Request, Response } from "express";
import User from "../models/userModel";
import { UserSchemaType } from "../schemas/usersSchemas";
import { createAccessToken } from "../libs/jwt";
import bc from "bcryptjs";

export const register = async (req: Request, res: Response) => {
	const data: UserSchemaType = req.body;

	try {
		const hashedPassword: string = await bc.hash(data.password, 10);

		const user = new User({
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			password: hashedPassword,
		});

		const newUser = await user.save();
		const token = await createAccessToken({ id: newUser._id });

		res.cookie("token", token);

		res.json({
			id: newUser._id,
			firstName: newUser.firstName,
			lastName: newUser.lastName,
			email: newUser.email,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error registering user",
		});
	}
};

export const login = async (req: Request, res: Response) => {
	const data: UserSchemaType = req.body;

	try {
		const user = await User.findOne({ email: data.email });

		if (!user) {
			return res.status(404).json({
				message: "User not found",
			});
		}

		const isMatch = await bc.compare(data.password, user.password);

		if (!isMatch) {
			return res.status(401).json({
				message: "Invalid password",
			});
		}

		const token = await createAccessToken({ id: user._id });

		res.cookie("token", token);

		res.json({
			id: user._id,
			firstName: user.firstName,
			lastName: user.lastName,
			fullName: `${user.firstName} ${user.lastName}`,
			role: user.role,
			email: user.email,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error logging in",
		});
	}
};

export const logout = (req: Request, res: Response) => {
	res.cookie("token", null, {
		expires: new Date(0),
		httpOnly: true,
	});

	res.status(200).json({
		message: "Logged out successfully",
	});
};

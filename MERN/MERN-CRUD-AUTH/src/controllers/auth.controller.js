import User from "../models/user.model.js";
import bc from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
	const { email, userName, password } = req.body;

	try {
		const hashedPassword = await bc.hash(password, 10);

		const user = new User({
			email,
			userName,
			password: hashedPassword,
		});

		const newUser = await user.save();
		const token = await createAccessToken({ id: newUser._id });

		res.cookie("token", token);

		res.json({
			id: newUser._id,
			userName: newUser.userName,
			email: newUser.email,
			createdAt: newUser.createdAt,
			updatedAt: newUser.updatedAt,
		});
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};

export const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ error: "Email not found" });
		}

		const isMatch = await bc.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ error: "Invalid password" });
		}

		const token = await createAccessToken({ id: user._id });

		res.cookie("token", token);

		res.json({
			id: user._id,
			userName: user.userName,
			email: user.email,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
		});
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};

export const logout = (req, res) => {
	res.cookie("token", "", { expires: new Date(0) });

	return res.sendStatus(200);
};

export const profile = async (req, res) => {
	const user = await User.findById(req.user.id);

	if (!user) return res.status(404).json({ error: "User not found" });

	return res.json({
		id: user._id,
		userName: user.userName,
		email: user.email,
		createdAt: user.createdAt,
		updatedAt: user.updatedAt,
	});
};

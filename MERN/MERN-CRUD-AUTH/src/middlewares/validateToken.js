import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
	const { token } = req.cookies;

	if (!token) return res.status(401).json({ error: "Unauthorized" });

	jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
		if (err) return res.status(401).json({ error: "Invalid Token" });

		req.user = decoded;

		next();
	});
};

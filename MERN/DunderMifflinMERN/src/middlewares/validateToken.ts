import jwt, { VerifyErrors } from "jsonwebtoken";
import { NextFunction, Response } from "express";
import { ClientRequestType } from "../types/requestTypes";

export const authRequired = (
	req: ClientRequestType,
	res: Response,
	next: NextFunction
) => {
	const { token } = req.cookies;

	if (!token) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	jwt.verify(
		token,
		process.env.SECRET_KEY!,
		(err: VerifyErrors | null, decoded: any) => {
			if (err) return res.status(401).json({ error: "Invalid Token" });

			req.user = decoded;

			next();
		}
	);
};

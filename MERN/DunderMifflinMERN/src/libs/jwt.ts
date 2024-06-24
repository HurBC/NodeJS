import jwt from "jsonwebtoken";

export const createAccessToken = (payload: string | object | Buffer) => {
	return new Promise((resolve, reject) => {
		jwt.sign(
			payload,
			process.env.SECRET_KEY!,
			{ expiresIn: "1d" },
			(err, token) => {
				if (err) reject(err);

				resolve(token);
			}
		);
	});
};

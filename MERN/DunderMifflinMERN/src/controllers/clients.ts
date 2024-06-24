import { Request, Response } from "express";
import { ClientSchemaType } from "../schemas/clientsSchemas";
import Client from "../models/clientModel";
import { ClientRequestType } from "../types/requestTypes";

export const getClientByEmail = async (email: string) => {
	try {
		await Client.findOne({ email });

		return false;
	} catch {
		return true;
	}
};

export const getClients = async (req: ClientRequestType, res: Response) => {
	try {
		const clients = await Client.find({ responsible: req.user?.id })
			.populate("responsible")
			.populate("address");

		res.json(clients);
	} catch (error) {
		return res
			.status(400)
			.json({ message: `Error in get clients ${error}` });
	}
};

export const createClient = async (req: Request, res: Response) => {
	const data: ClientSchemaType = req.body;

	let isMatch = false;

	// verify if email exist
	if (data.email) {
		isMatch = await getClientByEmail(data.email);
	}

	// if match, the email is exist
	if (isMatch)
		return res.status(409).json({ message: "Email already exists" });

	try {
		const client = new Client({
			name: data.name,
			email: data.email,
			phone: data.phone,
			address: data.address,
			responsible: data.responsible,
		});

		const newClient = await client.save();

		res.json(newClient);
	} catch (error) {
		return res
			.status(400)
			.json({ message: `Error in client creation ${error}` });
	}
};

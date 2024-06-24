import { Request, Response } from "express";
import {
	AddressSchemaType,
	CommuneSchemaType,
	UpdateAddressSchemaType,
} from "../schemas/localitysSchemas";
import locality from "../models/localityModels";
import { Types } from "mongoose";

const createCommune = async (commune: CommuneSchemaType) => {
	const newCommune = new locality.Commune(commune);
	return await newCommune.save();
};

export const createAddress = async (req: Request, res: Response) => {
	const data: AddressSchemaType = req.body;

	let communeId: Types.ObjectId;

	try {
		const commune = await locality.Commune.findOne({
			name: data.commune.name,
		});

		communeId = commune!._id;
	} catch (error) {
		const commune = await createCommune(data.commune);

		communeId = commune._id;
	}

	const address = new locality.Address({
		street: data.street,
		streetNumber: data.streetNumber,
		floor: data.floor,
		department: data.department,
		commune: communeId,
	});

	const newAddress = await address.save();

	res.json(newAddress);
};

export const updateAddress = async (req: Request, res: Response) => {
	const { id } = req.params;
	const data: UpdateAddressSchemaType = req.body;

	const address = await locality.Address.findByIdAndUpdate(id, data, {
		new: true,
	});

	if (!address) return res.status(404).json({ message: "Address not found" });

	console.log(data);

	res.json(address);
};

export const getCommunes = async (req: Request, res: Response) => {
	const communes = await locality.Commune.find();

	res.json(communes);
};

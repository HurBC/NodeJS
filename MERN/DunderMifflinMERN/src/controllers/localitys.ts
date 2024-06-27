import { Request, Response } from "express";
import { AddressType, AddressWithCommuneType, CommuneType } from "../types/LocalityTypes";
import { Address, Commune } from "../models/Locality";
import { ObjectId } from "mongodb";

const createCommune = async (commune: CommuneType) => {
	return new Commune().create(commune);
};

export const createAddress = async (address: AddressWithCommuneType) => {
	const data: AddressWithCommuneType = address;

	try {
		let communeId: ObjectId;

		try {
			const commune = await new Commune().findByName(data.commune.name);

			if (commune) {
				communeId = commune._id;
			} else {
				throw Error("No existe esta comuna");
			}
		} catch (error) {
			const newCommune = await createCommune(data.commune);

			communeId = newCommune!._id;
		}

		const address = await new Address().create({
			street: data.street,
			number: data.number,
			floor: data.floor,
			department: data.department,
			communeId: communeId,
		});

		return address;
	} catch (error) {
		return false;
	}
};

export const getAllAddresses = async (req: Request, res: Response) => {
	try {
		const addresses = await new Address().getAll();

		res.status(200).json({
			addresses,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error getting addresses",
			error,
		});
	}
};

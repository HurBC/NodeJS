import { ObjectId } from "mongodb";

export type CommuneType = {
	_id?: ObjectId;
	name: string;
	region: string;
	country: string;
	created_at: Date;
	updated_at: Date;
};

export type AddressType = {
	_id?: ObjectId;
	street: string;
	number: number;
	floor?: number;
	department?: string;
	communeId: ObjectId;
};

export type AddressWithCommuneType = AddressType & {
	commune: CommuneType;
};

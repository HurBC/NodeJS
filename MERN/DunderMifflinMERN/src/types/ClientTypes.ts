import { ObjectId } from "mongodb"
import { UserType } from "./UserTypes";
import { AddressWithCommuneType } from "./LocalityTypes";

export type ClientType = {
  _id?: ObjectId;
  name: string;
  email?: string;
  phone: string;
  address?: ObjectId;
  responsible?: ObjectId;
}

export type ClientFromRequestType = {
  name: string;
  email?: string;
  phone: string;
  address?: AddressWithCommuneType;
  responsible: string;
}

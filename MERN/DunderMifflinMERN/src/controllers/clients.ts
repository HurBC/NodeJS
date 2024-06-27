import { Request, Response } from "express";
import { ClientFromRequestType, ClientType } from "../types/ClientTypes";
import { createAddress } from "./localitys";
import { Client } from "../models/Client";
import { ObjectId } from "mongodb";

export const createClient = async (req: Request, res: Response) => {
  const {address, responsible, ...data}: ClientFromRequestType = req.body;
  let client: ClientType = data;

  if (address) {
    const newAddress = await createAddress(address);

    if (newAddress) {
      client.address = newAddress._id;
    }
  }

  try {
    const newClient = await new Client().create({
      ...client,
      responsible: new ObjectId(responsible)
    });
  
    res.status(200).json(newClient);
  } catch (error) {
    res.status(500).json({
			message: "Error registering client",
			error,
		})
  }
}

export const getClients = async (req: Request, res: Response) => {
  try {
    const clients = await new Client().getAll();

    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({
			message: "Error getting clients",
			error,
		})
  }
}

import { Request } from "express";

export type ClientRequestType = Request & {
	user?: {
		id: string;
	};
};

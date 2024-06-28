import { ObjectId } from "mongodb";

// Omit types
type QueryUserOmitType =
	| "password"
	| "created_at"
	| "updated_at"
	| "role"
	| "_id";

type FilterUserOmitType =
	| "password"
	| "created_at"
	| "updated_at"
	| "role"

export type RoleType = "employee" | "manager";

export type UserType = {
	_id?: ObjectId;
	firstName: string;
	lastName: string;
	role: RoleType;
	email: string;
	password: string;
	created_at?: Date;
	updated_at?: Date;
};

// Query's types
export type QueryUserType = Partial<Omit<UserType, QueryUserOmitType>> & {
	id?: string;
};

export type QueryUsersType = QueryUserType & {
	role?: RoleType;
	many?: "true" | "false";
};

// Filters type
export type FilterUserType = Partial<Omit<UserType, FilterUserOmitType>> & {
	_id?: ObjectId;
};

export type FilterUsersType = FilterUserType & {
	role?: RoleType;
};


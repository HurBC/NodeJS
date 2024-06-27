import { ObjectId } from "mongodb";

export type RoleType = "client" | "employee" | "manager";

export type SearchUserType = {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export type SearchUsersType = {
  id?: string;
  firstName?: string;
  lastName?: string;
  role?: RoleType;
}

export type UserType = {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  role: RoleType;
  email: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
}
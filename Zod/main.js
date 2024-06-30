const { z } = require("zod");

const parse = (schema, data) => {
	let message = "";

	try {
		message = schema.parse(data);
	} catch (error) {
		if (error instanceof z.ZodError) {
			message = error;
		} else {
			message = error;
		}
	}

	console.log(message);
};

const safeParse = (schema, data) => {
	let message = schema.safeParse(data);

	console.log(message);
};

const mySchema = z.string({
	required_error: "Name is required",
	invalid_type_error: "Name must be a AMOGUS",
});

let message = "";

console.log("Parse:");
parse(mySchema, "Hello World");
parse(mySchema, 12);

console.log("\nSafe Parse:");
safeParse(mySchema, "Hello World");
safeParse(mySchema, 12);

console.log("\nCoerce:");

const coercionSchema = z.coerce.string();

parse(coercionSchema, 12);
parse(coercionSchema, true);

console.log("\nLiterals:");

const literalSchema = z.literal("Hello");

parse(literalSchema, "Hello");
parse(literalSchema, "World");

console.log("\nEnums:");
const FishEnum = z.enum(["Shark", "Dolphin", "Whale"]);

parse(FishEnum, "Shark");
parse(FishEnum, "Tuna");

const SharkAndWhale = FishEnum.extract(["Shark", "Whale"]);
const DolphinOnly = FishEnum.exclude(["Shark", "Whale"]);

console.log("\nObjects:");

// Object schema
const User = z.object({
	username: z.string({
		required_error: "Username is required",
	}),
	age: z
		.number({
			required_error: "Age is required",
			invalid_type_error: "Age must be a number",
		})
		.min(18, { message: "Age must be greater than 18" }),
});

parse(User, { username: 19, age: "Franco" });
parse(User, { username: "Franco", age: "Franco" });
parse(User, { username: "Franco", age: 12 });
parse(User, { username: "Franco", age: 19 });

// .extend
const UserWithAddress = User.extend({
	address: z.string({
		required_error: "Address is required",
		invalid_type_error: "Address must be a number",
	}),
});

parse(UserWithAddress, { username: "Franco", age: 19, address: 432 });
parse(UserWithAddress, { username: "Franco", age: 19, address: "123 Main St" });

// .merge
const verifyUser = z.object({
	password: z.string(),
	email: z.string().email(),
});

const UserWithVerification = User.merge(verifyUser);

parse(UserWithVerification, {
	username: "Franco",
	age: 19,
	password: "123",
	email: "fcobreque@gmail.com",
});

const { z } = require("zod");

const verifyAge = (data) => {
	return data >= 18;
};

const verifyUser = z.object({
	password: z.string().min(6),
	email: z.string().email(),
});

const baseSchema = z.object({
	name: z.string(),
	age: z
		.number()
		.refine(verifyAge, { message: "Age must be greater than 18" }),
});

const userSchema = baseSchema.merge(verifyUser);

const results = userSchema.safeParse({
	name: "Francisco",
	age: 19,
	password: "123456",
	email: "das@gjs.com",
});

console.log(results.error);

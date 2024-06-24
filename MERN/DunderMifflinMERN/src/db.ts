import { connect } from "mongoose";

// Connect to MongoDB
export const connectDB = async () => {
	try {
		const connection = await connect(process.env.DATABASE_URL!);

		console.log(`[DATABASE] Connected to ${connection.connection.host}`);
	} catch (error) {
		console.error("[DATABASE] Connection error:", error);
	}
};

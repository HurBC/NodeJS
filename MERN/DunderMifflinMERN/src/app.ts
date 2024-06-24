import express, { Express } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes";
import clientRoutes from "./routes/clientRoutes";
import localityRoutes from "./routes/localityRoutes";

dotenv.config();

const app: Express = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", clientRoutes);
app.use("/api/locality", localityRoutes);

export default app;

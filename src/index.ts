import app, { startServer } from "./server/app.js";
import morgan from "morgan";
import pingRouter from "./features/ping/router/PingRouter.js";
import { connectToDatabase } from "./database/index.js";
import express from "express";
import foxesRouter from "./features/fox/router/foxesRouter.js";

app.use(express.json());
app.use(morgan("dev"));
app.use("/", pingRouter);
app.use("/foxes", foxesRouter);

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl!);
startServer();

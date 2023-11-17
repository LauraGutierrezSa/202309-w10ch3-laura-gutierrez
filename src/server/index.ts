import morgan from "morgan";
import app from "./app.js";
import express from "express";
import pingRouter from "../features/ping/router/PingRouter.js";
import foxesRouter from "../features/fox/router/foxesRouter.js";

app.use(morgan("dev"));

app.use(express.json());

app.use("/foxes", foxesRouter);

app.use("/", pingRouter);

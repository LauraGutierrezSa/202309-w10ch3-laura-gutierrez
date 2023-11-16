import chalk from "chalk";
import { connectToDatabase } from "../database/index.js";
import "./server/index.js";
import { startServer } from "./app.js";

const port = process.env.PORT ?? 4000;
if (!process.env.MONGODB_URL) {
  console.log(chalk.red("Missing MongoDb Connection String"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);
startServer(+port);

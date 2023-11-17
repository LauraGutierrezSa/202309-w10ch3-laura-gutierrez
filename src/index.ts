import { startServer } from "./server/app.js";
import { connectToDatabase } from "./database/index.js";
import chalk from "chalk";

const port = process.env.PORT ?? 4000;

if (!process.env.MONGODB_URL) {
  console.log(chalk.red("Missing MongoDB Connection String"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);
startServer(+port);

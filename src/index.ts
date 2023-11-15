import chalk from "chalk";

const port = process.env.PORT ?? 4000;
if (!process.env.MONGODB_URL) {
  console.log(chalk.red("Missing MongoDb Connection String"));
  process.exit();
}

export default port;

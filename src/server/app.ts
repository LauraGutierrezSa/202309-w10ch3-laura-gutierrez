import chalk from "chalk";
import express from "express";

const port = process.env.PORT ?? 4000;
if (!process.env.MONGODB_URL) {
  console.log(chalk.red("Missing MongoDb Connection String"));
  process.exit();
}

const app = express();
app.disable("x-powered-by");

export const startServer = () => {
  app.listen(port, () => {
    console.log(chalk.green(`Listening on http://localhost:${port}`));
  });
};

app.use(express.json());

export default app;

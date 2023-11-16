import chalk from "chalk";
import mongoose from "mongoose";

export const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    console.log(chalk.green("Connected to database"));
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

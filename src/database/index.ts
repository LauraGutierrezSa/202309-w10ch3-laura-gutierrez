import chalk from "chalk";
import mongoose from "mongoose";

const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    mongoose.set("debug", true);
    console.log(chalk.green("Connected to database"));
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

export default connectToDatabase;

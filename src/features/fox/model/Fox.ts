import { Schema, model } from "mongoose";
import { type FoxStructure } from "../types";

const foxSchema = new Schema<FoxStructure>({
  name: {
    type: String,
    required: true,
  },
  scientific_name: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
  habitat: {
    type: String,
    required: true,
  },
  lifespan: {
    type: Number,
    required: true,
  },
});

const Fox = model("Fox", foxSchema, "foxes");

export default Fox;

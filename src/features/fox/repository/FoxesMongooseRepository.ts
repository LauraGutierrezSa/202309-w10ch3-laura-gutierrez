import Fox from "../model/Fox.js";
import type { FoxStructure, FoxesRepository } from "../types.js";

class FoxesMongooseRepository implements FoxesRepository {
  getFoxes = async (): Promise<FoxStructure[]> => {
    const foxes = await Fox.find();
    return foxes;
  };
}

export default FoxesMongooseRepository;

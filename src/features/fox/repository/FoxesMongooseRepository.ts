import Fox from "../model/Fox.js";
import type { FoxStructure, FoxesRepository } from "../types.js";

class FoxesMongooseRepository implements FoxesRepository {
  getFoxes = async (): Promise<FoxStructure[]> => {
    const foxes = await Fox.find();
    return foxes;
  };

  getFoxById = async (id: string): Promise<FoxStructure> => {
    const foxFromDatabase = await Fox.findById(id);

    if (!foxFromDatabase) {
      throw new Error("Fox not found");
    }

    return foxFromDatabase;
  };
}

export default FoxesMongooseRepository;

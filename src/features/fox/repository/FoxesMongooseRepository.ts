import Fox from "../model/Fox.js";
import type { FoxStructure, FoxesRepository } from "../types";

class FoxesMongooseRepository implements FoxesRepository {
  public async getFoxes(): Promise<FoxStructure[]> {
    const foxes = await Fox.find();
    return foxes;
  }

  public async getFoxById(foxId: string): Promise<FoxStructure> {
    const foxFromDatabase = await Fox.findById(foxId);

    if (!foxFromDatabase) {
      throw new Error("Fox not found");
    }

    return foxFromDatabase;
  }
}

export default FoxesMongooseRepository;

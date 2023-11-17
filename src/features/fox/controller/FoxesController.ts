import { type Request, type Response } from "express";
import type FoxesMongooseRepository from "../repository/FoxesMongooseRepository";

class FoxesController {
  constructor(private readonly foxesRepository: FoxesMongooseRepository) {}

  public getFoxes = async (_req: Request, res: Response): Promise<void> => {
    const foxes = await this.foxesRepository.getFoxes();

    res.status(200).json({ foxes });
  };

  public getFoxById = async (req: Request, res: Response): Promise<void> => {
    const { foxId } = req.params;
    try {
      const fox = this.foxesRepository.getFoxById(foxId);
      res.status(200).json({ fox });
    } catch {
      res.status(404).json({ error: "Fox not found" });
    }
  };
}

export default FoxesController;

import { type Request, type Response } from "express";
import type FoxesMongooseRepository from "../repository/FoxesMongooseRepository";

class FoxesController {
  constructor(private readonly foxesRepository: FoxesMongooseRepository) {}

  public getFoxes = async (_req: Request, res: Response): Promise<void> => {
    const foxes = await this.foxesRepository.getFoxes();

    res.status(200).json({ foxes });
  };
}

export default FoxesController;

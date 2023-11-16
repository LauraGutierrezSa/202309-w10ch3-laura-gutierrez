export interface FoxStructure {
  _id: string;
  name: string;
  scientific_name: string;
  colour: string;
  habitat: string;
  lifespan: number;
}

export interface FoxesRepository {
  getFoxes: () => Promise<FoxesRepository>;
  getFoxById: () => Promise<FoxStructure>;
}

export type FoxByIdRequest = Request<{ foxId: string }>;

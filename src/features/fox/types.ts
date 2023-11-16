export interface FoxStructure {
  id: string;
  name: string;
  scientific_name: string;
  colour: string;
  habitat: string;
  lifespan: number;
}

export interface FoxesRepository {
  getFoxes: () => Promise<FoxStructure>;
  getFoxById: () => Promise<FoxStructure>;
}

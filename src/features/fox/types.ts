export interface FoxStructure {
  id: string;
  name: string;
  scientificName: string;
  colour: string;
  habitat: string;
  lifespan: number;
}

export interface FoxesRepository {
  getFoxes: () => Promise<FoxStructure[]>;
  getFoxById: (foxId: string) => Promise<FoxStructure>;
}

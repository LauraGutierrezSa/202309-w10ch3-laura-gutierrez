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
  getFoxbyId: (id: string) => Promise<FoxStructure>;
}

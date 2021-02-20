import { mockCharacterCollection, mockCities } from './character.mock-data';

import { Character } from './character.api-model';
import { Lookup } from 'common/models';

export const getCharacter = async (id: string): Promise<Character> => {
  return mockCharacterCollection.find((h) => h.id === id);
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (hotel: Character): Promise<boolean> => {
  return true;
};

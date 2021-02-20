import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import axios from 'axios';
import { mockCharacterCollection } from './character.mock-data';

const getOneCharacter = `https://rickandmortyapi.com/api/character`;

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await axios.get<Character>(`${getOneCharacter}/${id}`);
  return data;
};

export const getCities = async (): Promise<Lookup[]> => {
  return [];
};

export const saveCharacter = async (hotel: Character): Promise<boolean> => {
  return true;
};

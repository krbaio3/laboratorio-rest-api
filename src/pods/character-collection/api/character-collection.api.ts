import { CharacterEntity, CharacterEntityResults } from './character-collection.api-model';

import axios from 'axios';
import { mockHotelCollection } from './character-collection.mock-data';

// let hotelCollection = [...mockHotelCollection];


export const getCharacterCollection = async (): Promise<CharacterEntityResults[]> => {
  const { data: {
    results
  } } = await axios.get<CharacterEntity>("https://rickandmortyapi.com/api/character")
  console.log(results);
  return results;
};

export const deleteHotel = async (id: string): Promise<boolean> => {
  // hotelCollection = hotelCollection.filter((h) => h.id !== id);
  return true;
};

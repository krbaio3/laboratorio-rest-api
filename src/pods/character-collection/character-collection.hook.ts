import * as React from 'react';

import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useHotelCollection = () => {
  const [hotelCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = async () => {
      setCharacterCollection(mapToCollection(await getCharacterCollection(), mapFromApiToVm))
  };

  return { hotelCollection, loadHotelCollection: loadCharacterCollection };
};

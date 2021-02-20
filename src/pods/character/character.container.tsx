import * as api from './api';

import { Character, createEmptyCharacter } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { useHistory, useParams } from 'react-router-dom';

import { CharacterComponent } from './character.component';
import { Lookup } from 'common/models';
import React from 'react';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const [cities, setCities] = React.useState<Lookup[]>([]);
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCityCollection = async () => {
    const apiCities = await api.getCities();
    setCities(apiCities);
  };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    handleLoadCityCollection();
  }, []);

  const handleSave = async (characterSave: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(characterSave);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save Character');
    }
  };

  return <CharacterComponent character={character} cities={cities} onSave={handleSave} />;
};

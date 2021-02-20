import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityResults
): viewModel.CharacterEntityVm => ({
  id: character.id,
  image: `${character.image}`,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  episode: character.episode,
  url: character.url,
  created: character.created,
});

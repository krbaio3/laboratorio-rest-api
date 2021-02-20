import * as React from 'react';
import * as classes from './character-collection.styles';

import Button from '@material-ui/core/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { HotelCard } from './components/character-card.component';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateHotel: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onDetails: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateHotel, onEdit, onDelete, onDetails} = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateHotel}>
        Add hotel
      </Button>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <HotelCard character={character} onEdit={onEdit} onDelete={onDelete} onDetails={onDetails}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

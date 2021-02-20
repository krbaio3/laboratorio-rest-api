import * as React from 'react';
import * as classes from './character-collection.styles';

import Button from '@material-ui/core/Button';
import { HotelCard } from './components/character-card.component';
import { HotelEntityVm } from './character-collection.vm';

interface Props {
  hotelCollection: HotelEntityVm[];
  onCreateHotel: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const HotelCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { hotelCollection, onCreateHotel, onEdit, onDelete } = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateHotel}>
        Add hotel
      </Button>

      <ul className={classes.list}>
        {hotelCollection.map((hotel) => (
          <li key={hotel.id}>
            <HotelCard hotel={hotel} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

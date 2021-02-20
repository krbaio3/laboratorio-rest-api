import * as React from 'react';

import { CharacterCollectionComponent } from './character-collection.component';
import { deleteHotel } from './api';
import { linkRoutes } from 'core/router';
import { useHistory } from 'react-router-dom';
import { useHotelCollection } from './character-collection.hook';

export const CharacterCollectionContainer = () => {
  const { hotelCollection, loadHotelCollection } = useHotelCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadHotelCollection();
  }, []);

  const handleCreateHotel = () => {
    history.push(linkRoutes.createHotel);
  };

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editHotel(id));
  };

  const handleDelete = async (id: string) => {
    await deleteHotel(id);
    loadHotelCollection();
  };

  const handleDetails = async (id: string) => {
    history.push(linkRoutes.detailCharacter(id));
  };

  return (
    <CharacterCollectionComponent
      characterCollection={hotelCollection}
      onCreateHotel={handleCreateHotel}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onDetails={handleDetails}
    />
  );
};

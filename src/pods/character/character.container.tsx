import * as api from './api';

import { Hotel, createEmptyHotel } from './character.vm';
import { mapHotelFromApiToVm, mapHotelFromVmToApi } from './character.mappers';
import { useHistory, useParams } from 'react-router-dom';

import { HotelComponent } from './character.component';
import { Lookup } from 'common/models';
import React from 'react';

export const HotelContainer: React.FunctionComponent = (props) => {
  const [hotel, setHotel] = React.useState<Hotel>(createEmptyHotel());
  const [cities, setCities] = React.useState<Lookup[]>([]);
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCityCollection = async () => {
    const apiCities = await api.getCities();
    setCities(apiCities);
  };

  const handleLoadHotel = async () => {
    const apiHotel = await api.getCharacter(id);
    setHotel(mapHotelFromApiToVm(apiHotel));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadHotel();
    }
    handleLoadCityCollection();
  }, []);

  const handleSave = async (hotel: Hotel) => {
    const apiHotel = mapHotelFromVmToApi(hotel);
    const success = await api.saveCharacter(apiHotel);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save hotel');
    }
  };

  return <HotelComponent hotel={hotel} cities={cities} onSave={handleSave} />;
};

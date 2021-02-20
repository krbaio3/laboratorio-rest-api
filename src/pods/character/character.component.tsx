import * as classes from './character.styles';

import { Form, Formik } from 'formik';
import {
  RatingComponent,
  SelectComponent,
  TextFieldComponent,
} from 'common/components';

import { Button } from '@material-ui/core';
import { Hotel } from './character.vm';
import { Lookup } from 'common/models';
import React from 'react';
import { formValidation } from './character.validations';

interface Props {
  hotel: Hotel;
  cities: Lookup[];
  onSave: (hotel: Hotel) => void;
}

export const HotelComponent: React.FunctionComponent<Props> = (props) => {
  const { hotel, cities, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={hotel}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="address" label="Address" />
          <RatingComponent name="rating" max={5} />
          <SelectComponent name="city" label="City" items={cities} />
          <TextFieldComponent
            name="description"
            label="Description"
            multiline={true}
            rows={3}
            rowsMax={5}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};

import * as classes from './character.styles';

import { Form, Formik } from 'formik';
import {
  RatingComponent,
  SelectComponent,
  TextFieldComponent,
} from 'common/components';

import { Button } from '@material-ui/core';
import { Character } from './character.vm';
import { Lookup } from 'common/models';
import React from 'react';
import { formValidation } from './character.validations';

interface Props {
  character: Character;
  cities: Lookup[];
  onSave: (hotel: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="species" label="Species" />
          <TextFieldComponent name="gender" label="Gender" />
          <TextFieldComponent name="status" label="Status" />
          {/* <SelectComponent name="city" label="City" items={cities} /> */}
          <img style={{width: '400px'}} src={character.image} alt={character.name}/>
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

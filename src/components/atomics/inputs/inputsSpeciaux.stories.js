import React from 'react';
import { withActions } from '@storybook/addon-actions';
import Inputs from './index';

export default {
  title: 'Inputs Spéciaux',
  component: Inputs.InputsRpps,
};


export const InputsRpps = () => (
  <Inputs.Rpps 
  label="Je suis le label "
  errorMessage="Message d'erreur !"
  />
);

InputsRpps.story = {
  name: 'Input de type Rpps',
};


export const InputsFiness = () => (
  <Inputs.Finess 
  label="Je suis le label "
  errorMessage="Message d'erreur !"
  />
);

InputsFiness.story = {
  name: 'Input de type Finess',
};

export const InputsRecherche = () => (
  <Inputs.Recherche
  placeHolder="Ma recherche"
  lanceRecherche={(value) => console.log(value)}
  noLabel
  />
);

InputsRecherche.story = {
  name: 'Input de type Recherche',
  decorators: [withActions('blur')]
};

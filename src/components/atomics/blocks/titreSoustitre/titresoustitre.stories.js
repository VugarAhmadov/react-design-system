import React from 'react';
import { withActions } from '@storybook/addon-actions';
import TitreSousTitre from '.';



export const titreSousTitreCpt = () => (
  <TitreSousTitre
  titre="Je suis le titre "
  soustitre={"Sous titre"}
  />
);

titreSousTitreCpt.story = {
  name: 'Titre avec sous titre',
};

export default {
    title: 'Atomes/Blocks/TitreSoustitre',
    component: titreSousTitreCpt,
  };
  
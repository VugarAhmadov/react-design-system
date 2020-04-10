import React from 'react';
import { action } from '@storybook/addon-actions';
import Inputs from './index';

import Icones from "../icones"

export const InputsDefault = () => (
  <>
  <Inputs.Generic noLabel onBlur={() => action("Evenement de blur !")} />
  <Inputs.Generic noLabel width={350} onBlur={() => action("Evenement de blur !")} />
  </>
);

InputsDefault.story = {
  name: 'Input sans label',
};


export const InputsDefaultAvecLabel = () => (
  <>
    <Inputs.Generic label="Je suis le label" />
    <Inputs.Generic label="Je suis un super long label, vraiment très long, tellement long "/>
    <Inputs.Generic label="Je suis un super long label, vraiment très long, tellement long " labelWidth={250}/>
  </>
);


export const InputsIconeGauche = () => (
  <Inputs.Generic
  icone_gauche={<Icones.Loupe />}
  label="Je suis le label"
  errorMessage="Message d'erreur !"
  />
);

InputsIconeGauche.story = {
name: 'Input générique avec une icône à gauche',
};


export const InputsIconeDroite = () => (
  <Inputs.Generic
  icone_droite={<Icones.Loupe />}
  label="Je suis le label"
  errorMessage="Message d'erreur !"
  />
);

InputsIconeDroite.story = {
name: 'Input générique avec une icône à droite',
};



export const InputsIconeDroiteColor = () => (
  <Inputs.Generic
  icone_droite={<Icones.Loupe style={{color: "red"}}/>}
  label="Je suis le label"
  errorMessage="Message d'erreur !"
  />
);

InputsIconeDroiteColor.story = {
name: 'Input générique avec une icône coloré à droite',
};


export const InputChangementPlaceholder = () => (
  <Inputs.Generic
  placeHolder="Nouveau placeholder"
  label="Je suis le label"
  errorMessage="Message d'erreur !"
  />
);

InputChangementPlaceholder.story = {
name: 'Input générique avec un placeholder',
};


export default {
  title: 'Atomes/Inputs/Generiques',
  component: InputsDefault,
};



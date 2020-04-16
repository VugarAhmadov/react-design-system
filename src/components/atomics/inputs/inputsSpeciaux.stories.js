import React,{
  useState
} from 'react';
import { withActions } from '@storybook/addon-actions';
import Inputs from './index';
import Textes from '../polices';

export default {
  title: 'Atomes/Inputs/Speciaux',
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

export const InputsRecherche = () => {
  const [recherche, setrecherche] = useState('')
  
  return (
    <>
      <Inputs.Recherche
      placeHolder="Ma recherche"
      recherche={recherche}
      onRechercheChange={(ev) => setrecherche(ev.value)}
      onRechercheReset={() => setrecherche('')}
      lanceRecherche={(value) => console.log(value)}
      noLabel
      />
    </>
  );
}

InputsRecherche.story = {
  name: 'Input de type Recherche',
  decorators: [withActions('blur')]
};

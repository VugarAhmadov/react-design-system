import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '.';

export default {
  title: 'Atomes/Boutons',
  component: Button,
};

export const BoutonDefault = () => (
    <Button onClick={action('clicked')}>
        Desmos bouton
    </Button>
);

BoutonDefault.story = {
    name: 'Bouton par default',
};


export const BoutonAvecValidation = () => (
    <Button onClick={action('clicked')} onlyOneClick>
        Desmos bouton
    </Button>
);

BoutonAvecValidation.story = {
    name: 'Bouton avec validation',
};


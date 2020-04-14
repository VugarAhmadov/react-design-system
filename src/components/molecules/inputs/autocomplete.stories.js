import React, {
    useState,
    useEffect
} from 'react';
import { withActions } from '@storybook/addon-actions';
import Autocomplete  from './autocomplete'
export const AutocompleteCpt = () => {
    return (
        <Autocomplete />
    )
};
AutocompleteCpt.story = {
name: 'Composant avec skeleton',
};

export default {
    title: 'Molecules/Inputs/Autocomplete',
    name: 'Inputs / Ligne Patient',
    component: AutocompleteCpt,
};
    
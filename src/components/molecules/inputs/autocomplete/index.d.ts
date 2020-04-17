import React from 'react';
import { propsRechercheInterface } from '../../../atomics/inputs/Recherche';
import { BullePropsInterface } from '../../../atomics/bulles/default';
export interface AutocompletePropsInterface extends propsRechercheInterface, BullePropsInterface {
    Autocomplete_resultats: React.ReactElement;
}
declare const Autocomplete: (props: AutocompletePropsInterface) => JSX.Element;
export default Autocomplete;

/// <reference types="react" />
import { InputProps, InputGeneriqueEvent } from '../Generique/generique.interface';
export interface propsRechercheInterface extends InputProps {
    InputRecherche_recherche: string;
    InputRecherche_onReset: () => void;
    InputRecherche_lanceRecherche: (value: string) => string;
    InputRecherche_onChange: (event: InputGeneriqueEvent) => string;
}
declare const _default: (props: propsRechercheInterface) => JSX.Element;
export default _default;

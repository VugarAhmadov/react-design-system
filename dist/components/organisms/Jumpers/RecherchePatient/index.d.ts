/// <reference types="react" />
import { AutocompletePropsInterface } from '../../../molecules/inputs/autocomplete';
import { ListePatientsInterface } from '../../Listes/Patients';
import { BullePropsInterface } from '../../../atomics/bulles/default';
export interface JumperPatientInterface extends AutocompletePropsInterface, BullePropsInterface, ListePatientsInterface {
    RecherchePatient_minimumRequis: number;
}
declare const RecherchePatient: {
    (props: JumperPatientInterface): JSX.Element;
    defaultProps: {
        RecherchePatient_minimumRequis: number;
    };
};
export default RecherchePatient;

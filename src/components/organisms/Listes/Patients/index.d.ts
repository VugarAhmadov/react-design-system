import React from 'react';
import { JumperLignePatientInterface } from '../../../molecules/ligne/patient';
import { LigneInterface } from '../../../atomics/ligne';
import { SelectableInterface } from '../../../atomics/comportements/selectable';
export interface ListePatientsInterface extends LigneInterface, SelectableInterface {
    ListePatient_wrapperStyle?: React.CSSProperties;
    ListePatient_patients: Array<JumperLignePatientInterface>;
    ListePatient_preloadCount: number;
    ListePatient_Height: number;
    ListePatient_Width: number;
}
declare const listePatientCpt: {
    (props: ListePatientsInterface): JSX.Element;
    defaultProps: {
        ListePatient_preloadCount: number;
    };
};
export default listePatientCpt;

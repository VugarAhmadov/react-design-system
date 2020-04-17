import React, { FunctionComponent } from 'react';
import { LigneInterface } from '../../../atomics/ligne';
import { handleClickInterface } from '../../../../interfaces/handle_click';
import { JumperPatient } from '../../../../interfaces/patient_jumper';
import { SelectableInterface } from '../../../atomics/comportements/selectable';
export interface JumperLignePatientInterface extends LigneInterface, JumperPatient, SelectableInterface {
    Ligne_onClick?: (event: handleClickInterface) => handleClickInterface;
    Ligne_Style?: React.CSSProperties;
}
declare const LignePatient: FunctionComponent<JumperLignePatientInterface>;
export default LignePatient;

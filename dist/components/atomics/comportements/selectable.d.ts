import { FunctionComponent } from 'react';
import { ChekboxProps } from '../inputs/Generique/checkbox';
import { JumperLignePatientInterface } from '../../molecules/ligne/patient';
import { handleClickInterface } from '../../../interfaces/handle_click';
export interface SelectableInterface extends ChekboxProps {
    Selectable_isSelectable: boolean;
    Selectable_Position?: string;
    Selectable_onSelect?: (event: handleClickInterface) => handleClickInterface;
}
declare const Selectable: FunctionComponent<JumperLignePatientInterface>;
export default Selectable;

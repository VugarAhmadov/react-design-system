import React, { FunctionComponent } from 'react';
import { SelectableInterface } from '../comportements/selectable';
import { handleClickInterface } from '../../../interfaces/handle_click';
export interface LigneInterface extends SelectableInterface {
    Ligne_onClick?: (event: handleClickInterface) => handleClickInterface;
    Ligne_Style?: React.CSSProperties;
}
declare const LigneCpt: FunctionComponent<LigneInterface>;
export default LigneCpt;

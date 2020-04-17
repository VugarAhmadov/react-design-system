import React from 'react';
import './style.less';
export interface ChekboxProps {
    CheckBox_selected: boolean;
    CheckBox_locked: boolean;
    CheckBox_disabled: boolean;
    CheckBox_className?: string;
    CheckBox_onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
declare const CheckBox: {
    (props: ChekboxProps): JSX.Element;
    defaultProps: {
        CheckBox_locked: boolean;
        CheckBox_disabled: boolean;
        CheckBox_selected: boolean;
    };
};
export default CheckBox;

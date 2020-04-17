import React from 'react';
import './style.less';
export interface InputGeneriqueEvent {
    value: string;
    isValid: boolean;
    key?: string;
    inputElement?: HTMLInputElement;
}
export interface InputProps {
    Input_content: string;
    Input_type: string;
    Input_name: string;
    Input_placeHolder: string;
    Input_errorMessage: string;
    Input_disabled: boolean;
    Input_Height: number;
    Input_Width: number;
    Input_customClass: string;
    Input_label: string;
    Input_labelWidth: number;
    Input_minlength: number;
    Input_maxlength: number;
    Input_required: boolean;
    Input_noLabel: boolean;
    Input_onChange: (event: InputGeneriqueEvent) => string;
    Input_onKeyPress: (event: InputGeneriqueEvent) => void;
    Input_onBlur: (event: InputGeneriqueEvent) => void;
    Input_onFocus: (event: InputGeneriqueEvent) => void;
    Input_validation: (value: string) => boolean;
    Input_autoFocus: boolean;
    Input_setError: (value: string | null) => void;
    Input_error: boolean;
    Input_icone_gauche: React.ReactElement;
    Input_icone_droite: React.ReactElement;
}
declare const _default: (props: import("./HOC_wrapper").HOCprops) => JSX.Element;
export default _default;

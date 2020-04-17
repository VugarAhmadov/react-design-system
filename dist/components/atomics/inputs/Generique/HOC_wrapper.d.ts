import React from 'react';
import { InputProps } from './generique';
export interface HOCprops extends InputProps {
    Input_label: string;
    Input_noLabel: boolean;
    Input_labelWidth: number;
}
declare const avecLabelEstErreur: (WrappedInput: React.FunctionComponent<InputProps>) => (props: HOCprops) => JSX.Element;
export default avecLabelEstErreur;

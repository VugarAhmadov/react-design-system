import { FunctionComponent } from 'react';
import { InputProps } from '../Generique/generique.interface';
interface HOCprops extends InputProps {
    Input_label: string;
    Input_noLabel: boolean;
    Input_labelWidth: number;
}
export declare function avecLabelEstErreur(WrappedInput: FunctionComponent<InputProps>): (props: HOCprops) => JSX.Element;
export {};

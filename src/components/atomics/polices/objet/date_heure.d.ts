import React from 'react';
import 'moment/locale/fr';
interface propsTitre {
    date: string;
    format: string;
    isValid: string;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    styles?: React.CSSProperties;
    className?: string;
}
declare const DateHeureCpt: {
    (props: propsTitre): JSX.Element;
    defaultProps: {
        isValid: boolean;
        format: string;
    };
};
export default DateHeureCpt;

import React from 'react';
import 'moment/locale/fr';
interface propsTelephone {
    numero: string;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    style?: React.CSSProperties;
    className?: string;
}
declare const _default: (props: propsTelephone) => JSX.Element;
export default _default;

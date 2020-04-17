import React from 'react';
import 'moment/locale/fr';
interface propsSecuriteSociale {
    numero: string | undefined;
    cle: string | undefined;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    styles?: React.CSSProperties;
    className?: string;
}
declare const _default: (props: propsSecuriteSociale) => JSX.Element;
export default _default;

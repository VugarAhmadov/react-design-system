import React from 'react';
interface propsResultat {
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    className?: string;
    count: number;
    styleGauche?: React.CSSProperties;
    styleDroite?: React.CSSProperties;
}
declare const _default: (props: propsResultat) => JSX.Element;
export default _default;

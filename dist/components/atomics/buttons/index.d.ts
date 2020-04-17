import React from 'react';
export interface ButtonProps {
    height: number;
    width: number;
    color1: string;
    color2: string;
    color1Pos: number;
    onlyOneClick: boolean;
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    children: React.ReactNode;
}
declare const _default: (props: ButtonProps) => JSX.Element;
export default _default;

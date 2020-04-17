import React from 'react';
export interface IconeSousTitreProps {
    icone: React.ReactElement | null;
    soustitre: string | null | JSX.Element;
    skeletonIconeWidth?: number;
    skeletonTextWidth?: number;
    onClickTitre?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onClickSousTitre?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    wrapperStyle?: React.CSSProperties;
}
declare const iconeSousTitre: {
    (props: IconeSousTitreProps): JSX.Element;
    defaultProps: {
        soustitre: string;
        skeletonIconeWidth: number;
        skeletonTextWidth: number;
    };
};
export default iconeSousTitre;

import React from 'react';
export interface TitreSousTitreProps {
    titre: string | null | Element;
    soustitre: string | null | JSX.Element;
    onClickTitre?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onClickSousTitre?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    wrapperStyle?: React.CSSProperties;
    titreStyle?: React.CSSProperties;
    soustitreStyle?: React.CSSProperties;
    skeletonTitreWidth: number;
    skeletonSousTitreWidth: number;
}
declare const titreSousTitre: {
    (props: TitreSousTitreProps): JSX.Element;
    defaultProps: {
        titre: string;
        soustitre: string;
    };
};
export default titreSousTitre;

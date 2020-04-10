import React from 'react'
import {
    ResultatDroite,
    ResultatGauche
} from './'
interface propsResultat {
    onClick? :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseEnter? :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseLeave? :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    className? :string;
    count :number;
    styleGauche? :React.CSSProperties;
    styleDroite? :React.CSSProperties;
}

export default (props :propsResultat) => (
    <div 
    className={props.className}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
    onClick={props.onClick}
    >
        <ResultatGauche style={props.styleGauche}>{props.count > 0 ? props.count : 'Aucun'}</ResultatGauche> <ResultatDroite style={props.styleDroite}>{`résultat${props.count > 0 ? 's' : ''}`}</ResultatDroite>
    </div>
)
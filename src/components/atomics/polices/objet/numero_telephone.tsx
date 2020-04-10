import React from 'react'
import 'moment/locale/fr'
import {
    TelephoneStyle
} from '../objet/index'
import { formatNumTel } from '../../../../helpers/helpers'

interface propsTelephone {
    numero: string;
    onClick? :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseEnter? :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseLeave? :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    style? :React.CSSProperties;
    className? :string;
}

export default (props :propsTelephone) => {
    return (
        <TelephoneStyle
        className={props.className}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}
        style={{
            ...props.style
        }}
        >
            {props.numero && props.numero.length > 0 ? formatNumTel(props.numero) : '-'}
        </TelephoneStyle>
    )
}
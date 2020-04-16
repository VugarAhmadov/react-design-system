import React from 'react'
import 'moment/locale/fr'
import {
    SecuriteSocialStyle
} from './index'
import { formatINSEE } from '../../../../helpers/helpers'
import { isNullOrUndefined } from 'util'

interface propsSecuriteSociale {
    numero          :string|undefined;
    cle             :string|undefined;
    onClick?        :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseEnter?   :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseLeave?   :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    styles?         :React.CSSProperties;
    className?      :string;
}

export default (props :propsSecuriteSociale) => {

    return (
        <SecuriteSocialStyle
        className={props.className}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}
        style={props.styles}
        >
            {( !isNullOrUndefined(props.numero) && !isNullOrUndefined(props.cle) )  ? formatINSEE(props.numero, props.cle) : '-'}
        </SecuriteSocialStyle>
    )
}
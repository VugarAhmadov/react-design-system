import React from 'react'
import moment from 'moment'
import 'moment/locale/fr'
import {
    DateHeureStyle,
    DateHeureErreurStyle
} from '../objet/index'

interface propsTitre {
    date: string;
    format :string;
    isValid :string;
    onClick? :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseEnter? :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseLeave? :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    styles? :React.CSSProperties;
    className? :string;
}

const DateHeureCpt = (props :propsTitre) => {
    return (
        <>
            {props.isValid ? 
                <DateHeureStyle
                className={props.className}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
                onClick={props.onClick}
                style={props.styles}
                >{moment(props.date).format(props.format)}</DateHeureStyle>
            :
                <DateHeureErreurStyle
                className={props.className}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
                onClick={props.onClick}
                style={props.styles}
                >{moment(props.date).format(props.format)}</DateHeureErreurStyle>
            }
        </>
    )
}
    
DateHeureCpt.defaultProps = {
    isValid: true,
    format: "dddd, MMMM Do YYYY, h:mm:ss a"
}

export default DateHeureCpt;
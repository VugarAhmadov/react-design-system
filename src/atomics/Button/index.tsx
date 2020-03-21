import React, { useState } from 'react'
import styled from 'styled-components'

import {ReactComponent as IconCheck} from '../../resources/icon-check.svg'

interface StyledProps {
    height: number;
    width: number;
    color1: string;
    color2: string;
    color1Pos: number;
    bloqued: boolean;
}

const Bouton = styled.div`
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
font-family: 'Lato', sans-serif;
box-sizing: border-box;

position: absolute;
height: ${(props :StyledProps) => props.height}px;
width: ${(props :StyledProps) => props.width}px;

display: flex;
flex-flow: row;
justify-content: center;
align-items:center;
color: white;

border: 0px solid transparent;
border-radius: 40px;
overflow: hidden;
cursor: pointer;
transition: all 200ms;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
background: ${(props :StyledProps) => props.color1};
div {
    z-index:1;
    &::selection{
        background-color:transparent;
    }
}

&::before {
    z-index:0;
    content:'';
    position: absolute;
    left:-${(props :StyledProps) => props.width/3}px;right:0;bottom:0;top:0;
    background-image: linear-gradient(115deg,  ${(props :StyledProps) => props.color1} ${(props :StyledProps) => props.color1Pos}%,  ${(props :StyledProps) => props.color2} 100%);
    transition: all 0.125s ease-in;
}

&:hover {
    box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);    
    &::before {
        left: 0;
    }
}

&:active {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    &::before {
        left:${(props :StyledProps) => props.width/2}px;
    }
}

svg.valid {
    position:absolute;
    top:0;left:0;bottom:0;right:0;
    
    fill: white;
    transform: scale(0);
    opacity:0;
    z-index: 1;
    transition: all 250ms 250ms ease-in-out;
}

${props => 

props.bloqued ? `
    width: ${props.height}px;
    cursor: not-allowed;
    &:hover {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        &::before {
            left: -200%;
        }
    }
    &::before {
        left: -200%;
    }
    &::active {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    div {
        width:0;
        opacity:0
    }
    svg.valid {
        transform: scale(0.5);
        opacity:1;
    }
` : ``}

`


export interface ButtonProps {
    height: number;
    width: number;
    color1: string;
    color2: string;
    color1Pos: number;
    onlyOneClick: boolean;
    onClick:  (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    children: React.ReactNode;
}

export default (props :ButtonProps) => {
    const [cliqued, setCliqued] = useState(false);
    const handleCliqued = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (props.onlyOneClick && cliqued) return;
        setCliqued(true)
        props.onClick(event)
    }

    return (
        <Bouton
        color1={props.color1 || '#6e98b9'}
        color1Pos={props.color1Pos || 45}
        color2={props.color2 || '#7bfbaf'}
        height={props.height || 40}
        width={props.width || 200}
        onClick={handleCliqued}
        bloqued={(props.onlyOneClick && cliqued)}
        >
            <div>{props.children}</div>
            <IconCheck className="valid"/>
        </Bouton>
    )
}
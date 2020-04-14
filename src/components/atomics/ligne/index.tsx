import React from 'react'
import Selectable from '../comportements/selectable'
import styled from 'styled-components'
import { handleClickInterface } from '../../../interfaces/handle_click'

const Ligne = styled.div`
height: ${(props :any) => props.height ? props.height : '60px'};
display: flex;
flex-flow: row nowrap;
align-items:center;
border-top: 1px solid #DDDDDD;
padding: 0 5px 0 4px;
background-color: ${(props :any) => props.selected ?  'rgba(241, 241, 241, 0.5)' : 'transparent'};  
&:hover {
    background-color: ${(props :any) => props.hoverColor ? props.hoverColor : 'rgba(241, 241, 241, 0.5)'};  
}
`
export interface LigneInterface {    
    selectable          :boolean;
    selected            :boolean;
    selectablePosition? :string;
    onSelect            :(event: handleClickInterface) => handleClickInterface;
    onLigneClick        :(event: handleClickInterface) => handleClickInterface;
    ligneStyle?         :React.CSSProperties;
    children?           :React.ReactElement;
}

export default (props :LigneInterface) => {
    return (
        <Ligne style={{...props.ligneStyle}} onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => props.onLigneClick({event: event, props: props})} {...props}>
            <Selectable
            selectablePosition={props.selectablePosition}
            selectable={props.selectable}
            onSelect={props.onSelect}
            selected={props.selected}
            {...props}
            >
                {props.children}
            </Selectable>
        </Ligne>
    )
}
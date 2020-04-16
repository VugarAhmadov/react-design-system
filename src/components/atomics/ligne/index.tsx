import React, { FunctionComponent } from 'react'
import Selectable, { SelectableInterface } from '../comportements/selectable'
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
export interface LigneInterface extends SelectableInterface {
    onLigneClick?       :(event: handleClickInterface) => handleClickInterface;
    ligneStyle?         :React.CSSProperties;
}

const LigneCpt :FunctionComponent<LigneInterface> = (props) :React.ReactElement => {
    return (
        <Ligne 
        style={{...props.ligneStyle}} 
        onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => props.onLigneClick && props.onLigneClick({event: event, props: props})}>
            <Selectable {...props}>
                {props.children}
            </Selectable>
        </Ligne>
    )
}

export default LigneCpt
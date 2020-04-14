import React from 'react'
import styled from 'styled-components'
import Checkbox from '../inputs/Generique/checkbox'
import { JumperLignePatientInterface } from '../../molecules/lignes/Jumper/Patient/interface'
import { handleClickInterface } from '../../../interfaces/handle_click'

const ItemSelectable = styled.div`
display: flex;
flex-flow: row nowrap;
`

export interface SelectableInterface {    
    selectable          :boolean;
    selectablePosition? :string;
    onSelect            :(event: handleClickInterface) => handleClickInterface;
    children?           :React.ReactElement 
}

const Selectable = (props :JumperLignePatientInterface) :React.ReactElement => {
    if (props.selectable) {
        const handleClick = (event :React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            event.stopPropagation();
            props.onSelect({event, ...props});
        }
        return (
            <ItemSelectable {...props}>
                {props.selectablePosition === 'left'   && <Checkbox onClick={handleClick} {...props} />}
                    {props.children}
                {props.selectablePosition === 'right'  && <Checkbox onClick={handleClick} {...props} />}
            </ItemSelectable>
        )
    }
    return <>
        {props.children}
    </>
}

Selectable.defaultProps = {
    selectable: false,
    selectablePosition: 'left'
}

export default Selectable;
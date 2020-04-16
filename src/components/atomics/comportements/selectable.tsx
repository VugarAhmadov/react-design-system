import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Checkbox from '../inputs/Generique/checkbox'
import { JumperLignePatientInterface } from '../../molecules/ligne/patient'
import { handleClickInterface } from '../../../interfaces/handle_click'

const ItemSelectable = styled.div`
display: flex;
flex-flow: row nowrap;
`

export interface SelectableInterface {    
    selectable          :boolean;
    selected            :boolean;
    selectablePosition? :string;
    selectableOnSelect? :(event: handleClickInterface) => handleClickInterface;
}

const Selectable :FunctionComponent<JumperLignePatientInterface> = (props) :React.ReactElement => { 
    if (props.selectable) {
        const handleClick = (event :React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            event.stopPropagation();
            props.selectableOnSelect && props.selectableOnSelect({event, props: {...props}});
        }
        return (
            <ItemSelectable>
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
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Checkbox, { ChekboxProps } from '../inputs/Generique/checkbox'
import { JumperLignePatientInterface } from '../../molecules/ligne/patient'
import { handleClickInterface } from '../../../interfaces/handle_click'

const ItemSelectable = styled.div`
display: flex;
flex-flow: row nowrap;
`

export interface SelectableInterface extends ChekboxProps {    
    Selectable_isSelectable :boolean;
    Selectable_Position?    :string;
    Selectable_onSelect?    :(event: handleClickInterface) => handleClickInterface;
}

const Selectable :FunctionComponent<JumperLignePatientInterface> = (props) :React.ReactElement => { 
    if (props.Selectable_isSelectable) {
        const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            event.stopPropagation();
            props.Selectable_onSelect && props.Selectable_onSelect({event, props: {...props}});
        }
        return (
            <ItemSelectable>
                {props.Selectable_Position === 'left'   && <Checkbox CheckBox_onClick={handleClick} {...props} />}
                    {props.children}
                {props.Selectable_Position === 'right'  && <Checkbox CheckBox_onClick={handleClick} {...props} />}
            </ItemSelectable>
        )
    }
    return <>
        {props.children}
    </>
}

Selectable.defaultProps = {
    Selectable_isSelectable: false,
    Selectable_Position: 'left'
}

export default Selectable;
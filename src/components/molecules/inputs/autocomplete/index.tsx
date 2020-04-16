import React, { useState }  from 'react'
import styled from 'styled-components'
import Bulles from '../../../atomics/bulles'
import Inputs from '../../../atomics/inputs'
import {uuid} from 'uuidv4'
import { InputGeneriqueEvent } from '../../../atomics/inputs/Generique/generique.interface'
import { propsRechercheInterface } from '../../../atomics/inputs/Recherche'

export interface AutocompletePropsInterface extends propsRechercheInterface {
    resultats       :React.ReactElement
    bulleHeight     :string;
    bulleShow       :boolean;
}

const Wrapper = styled.div`
position:relative;
`

const Autocomplete = (props :AutocompletePropsInterface) => {
    const id = `autocomplete_${uuid()}`;
    return (
        <Wrapper id={id}>
           <Inputs.Recherche {...props} /> 
           <Bulles.Default
           bulleContainer={id}
           bulleHeight={props.bulleHeight}
           bulleShow={props.bulleShow}
           >
               {props.resultats}
           </Bulles.Default>
        </Wrapper>
    )
}

export default Autocomplete;
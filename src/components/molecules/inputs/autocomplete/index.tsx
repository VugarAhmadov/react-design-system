import React, { useState }  from 'react'
import styled from 'styled-components'
import Bulles from '../../../atomics/bulles'
import Inputs from '../../../atomics/inputs'
import {uuid} from 'uuidv4'
import { InputGeneriqueEvent } from '../../../atomics/inputs/Generique/generique'
import { propsRechercheInterface } from '../../../atomics/inputs/Recherche'
import { BullePropsInterface } from '../../../atomics/bulles/default'

export interface AutocompletePropsInterface extends propsRechercheInterface, BullePropsInterface {
    Autocomplete_resultats      :React.ReactElement
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
           Bulle_Container={id}
           {...props}
           >
               {props.Autocomplete_resultats}
           </Bulles.Default>
        </Wrapper>
    )
}

export default Autocomplete;
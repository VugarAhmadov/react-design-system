import React, { useState }  from 'react'
import styled from 'styled-components'
import Bulles from '../../../atomics/bulles'
import Inputs from '../../../atomics/inputs'
import {uuid} from 'uuidv4'
import { InputGeneriqueEvent } from '../../../atomics/inputs/Generique/generique.interface'

interface autocompletePropsInterface {
    width       :string;
    height      :string;
    resultats   :React.ReactElement 
    lanceRecherche :(value :string) => string
}

const Wrapper = styled.div`
position:relative;
`

const Autocomplete = (props :autocompletePropsInterface) => {
    const id = `autocomplete_${uuid()}`;
    const [showBulle, setshowBulle] = useState(false)

    const handleChange = (event :InputGeneriqueEvent) => {
        setshowBulle(event.value.length >= 3);        
        return event.value;
    }

    const handleReset = () => {
        setshowBulle(false);
    }

    return (
        <Wrapper id={id}>
           <Inputs.Recherche
           placeHolder="Ma recherche"
           lanceRecherche={props.lanceRecherche}
           onRechercheChange={handleChange}
           onReset={handleReset}
           noLabel
           /> 
           <Bulles.Default
           container={id}
           width={'450px'}
           height={'250px'}
           show={showBulle}
           >
               {/* {props.resultats} */}azeeaze
           </Bulles.Default>
        </Wrapper>
    )
}

export default Autocomplete;
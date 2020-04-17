import React,{ useState, useEffect } from 'react';
import Inputs from '../';
import {
    InputProps,
    InputGeneriqueEvent
} from '../Generique/generique';
import Icones from '../../icones'

export interface propsRechercheInterface extends InputProps {
    InputRecherche_recherche         :string;
    InputRecherche_onReset           :() => void
    InputRecherche_lanceRecherche    :(value :string) => string;
    InputRecherche_onChange          :(event :InputGeneriqueEvent) => string
}

export default (props :propsRechercheInterface) => {
    
    const [active, setActive] = useState(false);
    const [recherche, setRecherche] = useState(props.InputRecherche_recherche);

    useEffect(() => {
        setRecherche(props.InputRecherche_recherche) 
        props.InputRecherche_recherche != undefined ? setActive(props.InputRecherche_recherche.length > 0) : setActive(false);
    }, [props.InputRecherche_recherche])

    const changeRecherche = (event :InputGeneriqueEvent) => {
        if (props.InputRecherche_onChange) {
            return props.InputRecherche_onChange(event)
        }
        throw new Error('InputRecherche_onChange() doit être implémenté pour l`\'utilisation d\'input !');
       
    }
    
    const reset = () => {
        if (props.InputRecherche_onReset ) {
            props.InputRecherche_onReset()
        }
        throw new Error('InputRecherche_onReset() doit être implémenté pour le click sur l\'icone !');
    }
    
    const Icone = active ? <Icones.Croix onClick={reset} /> : <Icones.Loupe style={{color: '#727272',  opacity: 0.5}}/>
    
    const handleKeyPress = (event :InputGeneriqueEvent) => {
        props.InputRecherche_lanceRecherche && props.InputRecherche_lanceRecherche(event.value)
        if (event.key === 'Enter') {
            // On appel la fonction Parente en cas ou on veut attacher un comportement
            event.inputElement?.blur()
        }
    }

    return (
        <Inputs.Generic
            Input_type="text"
            Input_content={props.InputRecherche_recherche}
            Input_name="recherche"
            Input_icone_droite={Icone}
            Input_onChange={(event) => changeRecherche(event)}
            Input_onKeyPress={handleKeyPress}
            {...props}
        />
    );
};

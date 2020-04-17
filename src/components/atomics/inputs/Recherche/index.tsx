import React,{ useState, useEffect } from 'react';
import Inputs from '../';
import {
    InputProps,
    InputGeneriqueEvent
} from '../Generique/generique.interface';
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
        console.log("PROPS.RECHERCHE", props.InputRecherche_recherche)
        setRecherche(props.InputRecherche_recherche) 
        props.InputRecherche_recherche != undefined ? setActive(props.InputRecherche_recherche.length > 0) : setActive(false);
    }, [props.InputRecherche_recherche])

    const changeRecherche = (event :InputGeneriqueEvent) => {
        props.InputRecherche_onChange && props.InputRecherche_onChange(event)
    }
    
    const reset = () => {
        props.InputRecherche_onReset && props.InputRecherche_onReset()
    }
    
    const Icone = active ? <Icones.Croix onClick={reset} /> : <Icones.Loupe style={{color: '#727272',  opacity: 0.5}}/>
    
    return (
        <Inputs.Generic
            Input_type="text"
            Input_content={recherche}
            Input_name="recherche"
            Input_icone_droite={Icone}
            Input_onChange={(event) => changeRecherche(event)}
            Input_onKeyPress={({ value }) => props.InputRecherche_lanceRecherche(value)}
            {...props}
        />
    );
};

import React,{ useState, useEffect } from 'react';

import Inputs from '../';
import { inputProps, InputGeneriqueEvent } from '../Generique/generique.interface';
import Icones from '../../icones'

interface propsRecherche extends inputProps {
    recherche           :string;
    onRechercheChange   :(event :InputGeneriqueEvent) => string
    onReset?            :() => void
    lanceRecherche      :(value :string) => string;
}

export default (props :propsRecherche) => {
    
    const [active, setActive] = useState(false);
    const [recherche, setRecherche] = useState("");

    useEffect(() => {
        setRecherche(props.recherche)        
    }, [props.recherche])

    const changeRecherche = (event :InputGeneriqueEvent) => {
        setRecherche(event.value);
        setActive(event.value.length > 0);
        props.onRechercheChange && props.onRechercheChange(event)
    }
    
    const reset = () => {
        setRecherche("");
        props.onReset && props.onReset()
        setActive(false)
    }
    
    const Icone = active ? <Icones.Croix onClick={reset} /> : <Icones.Loupe style={{color: '#727272',  opacity: 0.5}}/>
    
    return (
        <Inputs.Generic
            type="text"
            content={recherche}
            name="recherche"
            icone_droite={Icone}
            onChange={(event) => changeRecherche(event)}
            onKeyPress={({ value }) => props.lanceRecherche(value)}
            {...props}
        />
    );
};

import React,{ useState, useEffect } from 'react';
import Inputs from '../';
import {
    InputProps,
    InputGeneriqueEvent
} from '../Generique/generique.interface';
import Icones from '../../icones'

export interface propsRechercheInterface extends InputProps {
    recherche           :string;
    onRechercheReset    :() => void
    lanceRecherche      :(value :string) => string;
    onRechercheChange   :(event :InputGeneriqueEvent) => string
}

export default (props :propsRechercheInterface) => {
    
    const [active, setActive] = useState(false);
    const [recherche, setRecherche] = useState(props.recherche);

    useEffect(() => {
        console.log("PROPS.RECHERCHE", props.recherche)
        setRecherche(props.recherche) 
        props.recherche != undefined ? setActive(props.recherche.length > 0) : setActive(false);
    }, [props.recherche])

    const changeRecherche = (event :InputGeneriqueEvent) => {
        props.onRechercheChange && props.onRechercheChange(event)
    }
    
    const reset = () => {
        props.onRechercheReset && props.onRechercheReset()
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

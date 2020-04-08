import React,{ useState, useEffect } from 'react';

import Inputs from '../';
import { inputProps } from '../Generique/generique.interface';
import Icones from '../../icones'

interface propsRecherche extends inputProps {
    recherche :string;
    lanceRecherche :(value :string) => string
}

export default (props) => {
    
    const [active, setActive] = useState(false);
    const [recherche, setRecherche] = useState("");

    useEffect(() => {
        setRecherche(props.recherche)        
    }, [props.recherche])

    const changeRecherche = (value :string) => {
        setRecherche(value)
        setActive(value.length > 0)
    }
    
    const reset = () => {
        setRecherche("");
        setActive(false)
    }
    
    const Icone = active ? <Icones.Croix onClick={reset} /> : <Icones.Loupe style={{color: '#727272',  opacity: 0.5}}/>
    
    return (
        <Inputs.Generic
            type="text"
            content={recherche}
            name="recherche"
            icone_droite={Icone}
            onChange={({ value }) => changeRecherche(value)}
            onKeyPress={({ value }) => props.lanceRecherche(value)}
            {...props}
        />
    );
};

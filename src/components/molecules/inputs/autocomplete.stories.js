import React, {
    useState,
    useEffect
} from 'react';
import { withActions } from '@storybook/addon-actions';
import Autocomplete  from './autocomplete'
import ListePatient from '../../organisms/Listes/Patients'
const recherchPatient = {
    Recherche:"BONAC",
    Patients:[
        {
            Id:"400000004",
            IdODS:"1900000002",
            NomPat:"BONACHERA",
            NomUsuel:"BONACHERA",
            Prenom:"Cyril",
            Civilite:"Monsieur",
            Fixe:"0789799360",
            Portable:null,
            Age:"46",
            DateNaissance:"09/11/1973",
            PratReferent:"MALLET",
            NumINSEE:"1731113055310",
            ClefINSEE:"58",
            Archive:false,
            Alerte:false,
            EstOuvert:false,
            ProchainRdv:[]
        }
    ]
}

export const AutocompleteCpt = () => {
    const WAIT_INTERVAL = 300;
    const [recherche, setRecherche] = useState('');
    const [resultats, setResultat] = useState([]);
    const [timer, setTimer] = useState();
    const [showBulle, setShowBulle] = useState(false);

    const lanceRecherche = () => {
        window.stop();
        setResultat(recherchPatient.Patients);        
    }
    const triggerChange = () => {
        if (recherche.length > 2 && recherche.length != 0) {
            !showBulle && setShowBulle(true)
            lanceRecherche();
        } else {
            setShowBulle(false)
        }
    }

    useEffect(() => {
        clearTimeout(timer);
        setTimer(setTimeout(triggerChange, WAIT_INTERVAL));
    }, [recherche])


    return (
        <div style={{height: '100vh'}}>
            <Autocomplete 
            InputRecherche_recherche={recherche}
            InputRecherche_onChange={(ev) => setRecherche(ev.value)}
            InputRecherche_onReset={() => setRecherche('')}
            Bulle_Show={showBulle}
            Bulle_Height={'350px'}
            Bulle_Width={'100%'}
            Autocomplete_resultats={
                <ListePatient
                ListePatient_patients={resultats}                
                Selectable_OnSelect={(e) => {console.log("SELECT", e)}}
                Ligne_onClick={() => {console.log('CLIQUE LIGNE')}}
                Selectable_Position='right'
                Selectable_isSelectable={true}
                />
            }
            Input_noLabel
            />
        </div>
    )
};
AutocompleteCpt.story = {
name: 'Composant avec skeleton',
};

export default {
    title: 'Molecules/Inputs/Autocomplete',
    name: 'Inputs / Ligne Patient',
    component: AutocompleteCpt,
};
    
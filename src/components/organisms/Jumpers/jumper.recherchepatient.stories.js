import React, {
    useState,
    useEffect
} from 'react';
import { withActions } from '@storybook/addon-actions';
import RecherchePatient  from './RecherchePatient'
import { 
    PatientDesmosJumper
} from '../../../mocks/patient.desmos'

const listePatient = [
    { Id: 1, ...PatientDesmosJumper},
    { Id: 2, ...PatientDesmosJumper},
    { Id: 3, ...PatientDesmosJumper},
    { Id: 4, ...PatientDesmosJumper}
]

export const LignePatientCpt = () => {
    const [recherche, setRecherche] = useState('');
    const [patients, setPatients] = useState(listePatient);
    const [selectableBool, setSelectable] = useState(false);

    const handleOnSelect = (evenement) => {
        let pat = patients.find(p => p.Id === evenement.Id);
        if (pat) { pat.selected = !pat.selected  }
        setPatients([...listePatient])
    }

    const handleLigneClick = () => {
        setSelectable(!selectableBool)
    }
    const handleRechercheChange = (event) => {
        setRecherche(event.value);
        setPatients(null)
        setTimeout(() => {
            return setPatients(listePatient)
        }, 250)
        return event.value
    }

    return (
        <RecherchePatient
            recherche={recherche}
            patients={patients}
            listePatientheight={150}
            InputRecherche_onReset={() => setRecherche('')}
            Bulle_Height={"auto"}
            Bulle_Show={recherche.length >= 3}
            onSelect={handleOnSelect}
            onRechercheChange={handleRechercheChange}
            onLigneClick={handleLigneClick}
            selectable={selectableBool}
        />
    ) 
};

LignePatientCpt.story = {
    name: 'Composant avec skeleton',
};

export default {
    title: 'Organimes/Jumper/RecherchePatient',
    name: 'Jumper / Recherche Patient',
    component: LignePatientCpt,
};

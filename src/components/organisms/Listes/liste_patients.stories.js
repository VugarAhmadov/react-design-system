import React, {
    useState,
    useEffect
  } from 'react';
import { withActions } from '@storybook/addon-actions';
import ListePatient from './Patients'
import './Patients/index.less'
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
    const [patients, setPatients] = useState(listePatient)
    const [selectableBool, setSelectable] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            if (patients && patients.length > 0 ) {
            return setPatients(null)
            }
            return setPatients(listePatient)
        }, 5000)
    }, [patients])

    const handleOnSelect = (evenement) => {
        let pat = patients.find(p => p.Id === evenement.Id);
        if (pat) {
            pat.selected = !pat.selected
        }
        setPatients([...listePatient])
    }

    const handleLigneClick = () => {
        console.log("JE CLIQUE SUR LA LIGNE")
        setSelectable(!selectableBool)
    }

    return (
        <ListePatient
        patients={patients}
        height={'120px'}
        onSelect={handleOnSelect}
        onLigneClick={handleLigneClick}
        selectable={selectableBool}
        />
    ) 
};

LignePatientCpt.story = {
    name: 'Composant avec skeleton',
};

export default {
    title: 'Organimes/Liste/Jumper/ListePatient',
    name: 'Jumper / Ligne Patient',
    component: LignePatientCpt,
};

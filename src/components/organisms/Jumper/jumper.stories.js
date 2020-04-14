import React, {
    useState,
    useEffect
  } from 'react';
import { withActions } from '@storybook/addon-actions';
import ListePatient from './ListePatients'
import moment from 'moment'
import Scroller from '../../atomics/scroller'
import './ListePatients/index.less'

const initialState = {
    patient:{
        nom: 'issner',
        nom_usuel:'issner',
        prenom: 'natasha'
    },
    dateNaissance: moment('1980-05-31').toISOString(),
    numSecu: {
        numero:'18512457658',
        cle: '12'
    },
    civilite: 'mademoiselle',
    numTel1: '0383568974',
    numTel2: '',
    selected: false,
    pratReferent: 'DR FOLLE Amour'
}
const listePatient= [{id: 1, ...initialState}, {id: 2, ...initialState}, {id: 3, ...initialState}, {id: 4, ...initialState}]



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
        let pat = patients.find(p => p.id === evenement.id);
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

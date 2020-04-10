import React, {
    useState,
    useEffect
  } from 'react';
import { withActions } from '@storybook/addon-actions';
import ListePatient from './ListePatients'
import moment from 'moment'
import Scroller from '../../atomics/scroller'
import './ListePatients/index.less'

const initialState :JumperLignePatientInterface = {
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
    pratReferent: 'DR FOLLE Amour'
}
const listePatient= [initialState, initialState, initialState, initialState]

export const LignePatientCpt = () => {
    const [patients, setPatients] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            if (patients && patients.length > 0 ) {
            return setPatients(null)
            } 
            return setPatients(listePatient)
        }, 5000)
    }, [patients])
    return (
        <>test</>
        // <ListePatient
        // patients={patients}
        // height={'120px'}
        // />
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

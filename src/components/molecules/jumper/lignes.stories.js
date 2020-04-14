import React, {
  useState,
  useEffect
} from 'react';
import { withActions } from '@storybook/addon-actions';
import Lignes from '.'
import moment from 'moment';

const initialState = {
  id: 1,
  patient:{
    nom: 'issner',
    nom_usuel:'issner',
    prenom: 'natasha'
  },
  dateNaissance: moment('1980-05-31'),
  numSecu: {
    numero:'18512457658',
    cle: '12'
  },
  civilite: 'mademoiselle',
  numTel1: '0383568974',
  numTel2: '',
  pratReferent: 'DR FOLLE Amour',
  selected: false
}

export const LignePatientCpt = () => {
  const [infoPatient, setinfoPatient] = useState(null);
  useEffect(() => {
    setTimeout(() => {      
      return setinfoPatient(initialState)
    }, 5000)
  }, [])

  const setSelected = () => {
    infoPatient.selected = !infoPatient.selected 
    setinfoPatient({selected: !infoPatient.selected , ...infoPatient})
  }

  return (
    <Lignes.Jumper.Patient
    patient={infoPatient ? infoPatient.patient : null}
    dateNaissance={infoPatient ? infoPatient.dateNaissance: null}
    civilite={infoPatient ? infoPatient.civilite: null}
    numSecu={infoPatient ? infoPatient.numSecu: null}
    numTel1={infoPatient ? infoPatient.numTel1: null}
    numTel2={infoPatient ? infoPatient.numTel2: null}
    pratReferent={infoPatient ? infoPatient.pratReferent: null}
    onLigneClick={() => console.log("PATIENT CLICK")}
    selected={infoPatient ? infoPatient.selected: null}
    onSelect={()=> setSelected()}
    selectablePosition={'right'}
    selectable
    />
  )
};
LignePatientCpt.story = {
  name: 'Composant avec skeleton',
};

export default {
    title: 'Molecules/Jumper/LignePatient',
    name: 'Jumper / Ligne Patient',
    component: LignePatientCpt,
  };
  
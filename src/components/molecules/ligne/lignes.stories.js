import React, {
  useState,
  useEffect
} from 'react';
import { withActions } from '@storybook/addon-actions';
import Lignes from '.'
import moment from 'moment';

import { 
  PatientDesmosJumper
} from '../../../mocks/patient.desmos'

export const LignePatientCpt = () => {
  const [infoPatient, setinfoPatient] = useState(null);
  useEffect(() => {
    setTimeout(() => {      
      return setinfoPatient(PatientDesmosJumper)
    }, 5000)
  }, [])

  const setSelected = () => {
    infoPatient.selected = !infoPatient.selected 
    setinfoPatient({selected: !infoPatient.selected , ...infoPatient})
  }
  return (
    <Lignes.Patient
    Id={infoPatient ? infoPatient.Id: null}
    IdOds={infoPatient ? infoPatient.IdOds: null}
    NomPat={infoPatient ? infoPatient.NomPat: null}
    NomUsuel={infoPatient ? infoPatient.NomPat: null}
    Prenom={infoPatient ? infoPatient.NomPat: null}
    DateNaissance={infoPatient ? infoPatient.DateNaissance: null}
    Civilite={infoPatient ? infoPatient.Civilite?.toLocaleLowerCase(): null}
    NumINSEE={infoPatient ? infoPatient.NumINSEE: null}
    ClefINSEE={infoPatient ? infoPatient.ClefINSEE: null}
    Fixe={infoPatient ? infoPatient.Fixe: null}
    Portable={infoPatient ? infoPatient.Portable: null}
    PratReferent={infoPatient ? infoPatient.PratReferent: null}
    selected={infoPatient ? infoPatient.selected: null}
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
    title: 'Molecules/Ligne/Jumper/LignePatient',
    name: 'Jumper / Ligne Patient',
    component: LignePatientCpt,
  };
  
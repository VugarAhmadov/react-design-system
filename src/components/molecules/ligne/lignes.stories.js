import React, {
  useState,
  useEffect
} from 'react';
import { withActions } from '@storybook/addon-actions';
import Lignes from '.'

import { 
  PatientDesmosJumper
} from '../../../mocks/patient.desmos'

export const LignePatientCpt = () => {
  const [infoPatient, setinfoPatient] = useState(null);

  useEffect(() => {
    setTimeout(() => {  
          console.log("PatientDesmosJumper",PatientDesmosJumper)
      return setinfoPatient(PatientDesmosJumper)
    }, 2500)
  }, [])

  useEffect(() => {
   console.log("INFO PATIENT A CHANGE => ", infoPatient)
  }, [infoPatient])

  const setSelected = () => {
    if (infoPatient) {
      setinfoPatient({...infoPatient, Selected: !infoPatient.Selected })
    }
  }

  return (
    <Lignes.Patient
    Jumper_idCentre="1"
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
    ProchainRdv={infoPatient ? infoPatient.ProchainRdv: null}
    CentreEnCours={infoPatient ? infoPatient.CentreEnCours: null}
    Ligne_onClick={() => console.log("PATIENT CLICK => ", infoPatient)}
    CheckBox_selected={infoPatient ? infoPatient.Selected: null}
    Selectable_onSelect={()=> setSelected()}
    Selectable_Position={'right'}
    Selectable_isSelectable
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
  
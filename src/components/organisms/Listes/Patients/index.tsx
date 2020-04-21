import React from 'react'

import styled from 'styled-components'
import Ligne from '../../../molecules/ligne/index'
import {
    JumperLignePatientInterface
} from '../../../molecules/ligne/patient'
import { uuid } from 'uuidv4'
import Scroller from '../../../atomics/scroller'
import { LigneInterface } from '../../../atomics/ligne'
import { SelectableInterface } from '../../../atomics/comportements/selectable'

const Wrapper = styled.div`
overflow: hidden;
height: ${(props :ListePatientsInterface) => props.ListePatient_Height ? props.ListePatient_Height : '100%'};
width: ${(props :ListePatientsInterface) => props.ListePatient_Width ? props.ListePatient_Width : '100%'};
`

export interface ListePatientsInterface extends LigneInterface, SelectableInterface {
    ListePatient_wrapperStyle?  :React.CSSProperties;
    ListePatient_patients       :Array<JumperLignePatientInterface>;
    ListePatient_preloadCount   :number;
    ListePatient_Height         :number;
    ListePatient_Width          :number;
}

const listePatientCpt = (props :ListePatientsInterface) => {
    return (
        <Wrapper
        style={{...props.ListePatient_wrapperStyle}}
        {...props}
        >
            <Scroller Scroller_Height={props.ListePatient_Height +'px' }>
                {props.ListePatient_patients
                ?
                <>
                {props.ListePatient_patients?.map((patient :JumperLignePatientInterface) => 
                    <Ligne.Patient
                    key={uuid()}
                    Id={patient.Id}
                    IdOds={patient.IdOds}
                    NomPat={patient.NomPat}
                    NomUsuel={patient.NomUsuel}
                    Prenom={patient.Prenom}
                    DateNaissance={patient.DateNaissance}
                    Civilite={patient.Civilite?.toLocaleLowerCase()}
                    NumINSEE={patient.NumINSEE}
                    ClefINSEE={patient.ClefINSEE}
                    Fixe={patient.Fixe}
                    Portable={patient.Portable}
                    PratReferent={patient.PratReferent}
                    CheckBox_selected={patient.Selected}
                    {...props}
                    />
                )}
                </>
                :
                <>
                {Array(props.ListePatient_preloadCount).fill(null).map( (x,i) => i ).map( _ => 
                    <Ligne.Patient
                        key={uuid()}
                        Id={undefined}
                        IdOds={undefined}
                        NomPat={undefined}
                        NomUsuel={undefined}
                        Prenom={undefined}
                        DateNaissance={undefined}
                        Civilite={undefined}
                        NumINSEE={undefined}
                        ClefINSEE={undefined}
                        Fixe={undefined}
                        Portable={undefined}
                        PratReferent={undefined}
                        Selectable_isSelectable={false}
                        CheckBox_selected={false}
                        {...props}
                    /> 
                )}
                </>
                }
            </Scroller>
        </Wrapper>
    )
}
listePatientCpt.defaultProps = {
    ListePatient_preloadCount: 2
}
export default listePatientCpt;
import React from 'react'

import styled from 'styled-components'
import Ligne from '../../../molecules/ligne/index'
import {
    JumperLignePatientInterface
} from '../../../molecules/ligne/patient'
import { uuid } from 'uuidv4'
import { handleClickInterface } from '../../../../interfaces/handle_click'
import Scroller from '../../../atomics/scroller'
import { LigneInterface } from '../../../atomics/ligne'

const Wrapper = styled.div`
overflow: hidden;
height: ${(props :ListePatientsInterface) => props.listePatientHeight ? props.listePatientHeight : '100%'};
width: ${(props :ListePatientsInterface) => props.listePatientWidth ? props.listePatientWidth : '100%'};
`

export interface ListePatientsInterface extends LigneInterface {
    wrapperStyle?       :React.CSSProperties;
    patients            :Array<JumperLignePatientInterface>;
    preloadCount        :number;
    selectable          :boolean;
    selectablePosition? :string;
    ligneStyle?         :React.CSSProperties;
    listePatientHeight  :number;
    listePatientWidth   :number;
}

const listePatientCpt = (props :ListePatientsInterface) => {
    return (
        <Wrapper
        style={{...props.wrapperStyle}}
        {...props}
        >
            <Scroller scrollerHeight={props.listePatientHeight +'px'}>
                {props.patients
                ?
                <>
                {props.patients?.map((patient :JumperLignePatientInterface) => 
                    <Ligne.Patient
                    key={uuid()}
                    Id={patient.Id}
                    IdOds={patient.IdOds}
                    NomPat={patient.NomPat}
                    NomUsuel={patient.NomPat}
                    Prenom={patient.NomPat}
                    DateNaissance={patient.DateNaissance}
                    Civilite={patient.Civilite?.toLocaleLowerCase()}
                    NumINSEE={patient.NumINSEE}
                    ClefINSEE={patient.ClefINSEE}
                    Fixe={patient.Fixe}
                    Portable={patient.Portable}
                    PratReferent={patient.PratReferent}
                    selected={patient.selected}
                    onLigneClick={props.onLigneClick}
                    selectableOnSelect={props.selectableOnSelect}
                    selectablePosition={props.selectablePosition}
                    selectable={props.selectable}
                    />
                )}
                </>
                :
                <>
                {Array(props.preloadCount).fill(null).map( (x,i) => i ).map( _ => 
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
                        selectable={false}
                        selected={false}
                    /> 
                )}
                </>
                }
            </Scroller>
        </Wrapper>
    )
}
listePatientCpt.defaultProps = {
    preloadCount: 4
}
export default listePatientCpt;
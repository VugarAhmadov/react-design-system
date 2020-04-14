import React from 'react'

import styled from 'styled-components'
import Jumper from '../../../molecules/ligne/index'
import {
    JumperLignePatientInterface
} from '../../../molecules/ligne/patient'
import { uuid } from 'uuidv4'
import { handleClickInterface } from '../../../../interfaces/handle_click'
import Scroller from '../../../atomics/scroller'

const Wrapper = styled.div`
overflow: hidden;
height: ${(props :ListePatientsInterface) => props.height ? props.height : '100%'};
width: ${(props :ListePatientsInterface) => props.width ? props.width : '100%'};
`

export interface ListePatientsInterface {
    wrapperStyle?       :React.CSSProperties;
    patients            :Array<JumperLignePatientInterface>;
    preloadCount        :number;
    selectable          :boolean;
    selectablePosition? :string;
    onSelect            :(event: handleClickInterface) => handleClickInterface;
    onLigneClick        :(event: handleClickInterface) => handleClickInterface;
    ligneStyle?         :React.CSSProperties;
    height?             :string;
    width?              :string;
}

const listePatientCpt = (props :ListePatientsInterface) => {
    return (
        <Wrapper style={{...props.wrapperStyle}} {...props}>
            <Scroller height={props.height}>
                {props.patients
                ?
                <>
                {props.patients?.map((patient :JumperLignePatientInterface) => 
                    <Jumper.Patient
                    key={uuid()}
                    id={patient.id}
                    patient={patient.patient}
                    dateNaissance={patient.dateNaissance}
                    civilite={patient.civilite}
                    numSecu={patient.numSecu}
                    numTel1={patient.numTel1}
                    numTel2={patient.numTel2}
                    pratReferent={patient.pratReferent}
                    selected={patient.selected}
                    onLigneClick={props.onLigneClick}
                    onSelect={props.onSelect}
                    selectablePosition={props.selectablePosition}
                    selectable={props.selectable}
                    />
                )}
                </>
                :
                <>
                {Array(props.preloadCount).fill(null).map( (x,i) => i ).map( _ => 
                <Jumper.Patient
                key={uuid()}
                id={null}
                patient={undefined}
                dateNaissance={undefined}
                civilite={undefined}
                numSecu={undefined}
                numTel1={undefined}
                numTel2={undefined}
                pratReferent={undefined}
                selectable={false}
                /> 
                )}
                </>
                }
            </Scroller>
        </Wrapper>
    )
}
listePatientCpt.defaultProps = {
    preloadCount: 5
}
export default listePatientCpt;
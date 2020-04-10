import React from 'react'

import Lignes from '../../../molecules/lignes'
import {JumperLignePatientInterface} from '../../../molecules/lignes/Jumper/Patient/interface'
import ListePatientsInterface from './interface'
import { uuid } from 'uuidv4'



const listePatientCpt = (props :ListePatientsInterface) => {
    return (
        <></>
        // <Liste items={props.patients} component={Lignes.Jumper.Patient} height={props.height} scrollable selectionnable />
    )
}
listePatientCpt.defaultProps = {
    preloadCount: 3
}
export default listePatientCpt;
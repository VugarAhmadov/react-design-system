import React, {
    useState,
    useEffect
} from 'react';
import styled from 'styled-components'
import Autocomplete, { AutocompletePropsInterface }  from '../../../molecules/inputs/autocomplete'
import ListePatient, { ListePatientsInterface } from '../../Listes/Patients'
import { BullePropsInterface } from '../../../atomics/bulles/default';
import Polices from '../../../atomics/polices'; 

export interface JumperPatientInterface extends AutocompletePropsInterface, BullePropsInterface, ListePatientsInterface {

}

const HeaderRecherche = styled.div`
height: 60px;
width: 595px;
color: #97989D;
font-family: Lato;
font-size: 13px;
line-height: 60px;
vertical-align: middle;
text-align: left;
margin-left: 20px;
margin-right: 30px;
display: -webkit-flex;
display: flex;
` 

const RecherchePatient = (props :JumperPatientInterface) => {

    const ContenuDeLaPopUp = 
    <>
        <HeaderRecherche>DOSSIERS PATIENTS CONSULTES RECEMMENTS</HeaderRecherche>
        <ListePatient
            Selectable_Position='right'
            {...props}
        />
    </>
    return (
        <Autocomplete         
        Autocomplete_resultats={ContenuDeLaPopUp}
        Input_noLabel
        {...props}
        />
    )
};


export default RecherchePatient
    
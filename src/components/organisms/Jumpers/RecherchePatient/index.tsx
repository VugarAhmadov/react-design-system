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
    RecherchePatient_minimumRequis :number;
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
display: flex;

& > p {
    vertical-align: middle;
    line-height: 40px;
}

&.aucun-recent {
    height: 180px;
    margin: auto;
    display: block;
    padding-top: 50px;

    & p {
        display: block;
        font-family: Lato;
        font-style: italic;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        color: #97989D;
        margin: auto;
        line-height: 19px;
        margin-top: 10px;
    }
}

&.aucun {
    height: 60px;
    width: 595px;
    line-height: 18px;
    height: 180px;
    display: flex;

    & p {
        font-family: Lato;
        font-style: italic;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        color: #97989D;
        margin: auto;
        line-height: 26px;
    }
}
` 

const InfosHeader = styled.div`
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
display: flex;

& small {
    font-family: LatoItalic;
    font-size: 13px;
}
`

const InfosContent = styled.div`
min-height: 180px;
display: flex;
justify-content: center;
align-items: center;
font-family: Lato;
font-size: 16px;
text-align: center;
color: #97989D;
margin: auto;
line-height: 26px;
`

const NbFind = styled.div`
display: inline-block;
margin-right: 4px;
font-family: Lato;
font-size: 18px;
color: #333333;
line-height: 30px
display: flex;
justify-content: center;
align-items: center;
`

const RecherchePatient = (props :JumperPatientInterface) => {

    const isRechercheActive     :boolean = !(props.InputRecherche_recherche.length < props.RecherchePatient_minimumRequis);
    const hasResultats          :boolean = props.ListePatient_patients && props.ListePatient_patients.length > 0

    const formatHeader = () => {
        let count = props.ListePatient_patients.length
        return count >= 49 ?
            <InfosHeader>DOSSIERS PATIENTS TROUVES. <small>Essayez de compléter votre recherche</small></InfosHeader>
            :
            <InfosHeader>{`DOSSIER${count > 1 ? 'S' : ''} PATIENT${count > 1 ? 'S' : ''} TROUVE${count > 1 ? 'S' : ''}.`}</InfosHeader>            
    };

    const header = 
    <>
        {!isRechercheActive ?
            <>
                {hasResultats ?
                <InfosHeader>DOSSIERS PATIENTS CONSULTES RECEMMENTS</InfosHeader>
                :
                <InfosHeader>Aucun dossier patient  consulté aujourd’hui</InfosHeader>
                }
            </>
        :
            <>
                {hasResultats &&
                    <InfosHeader>
                        <NbFind>
                            {props.ListePatient_patients.length >= 49 ? '+ de 50' : props.ListePatient_patients.length}
                        </NbFind>
                        {formatHeader()}
                    </InfosHeader>
                }
            </>
        }
    </>

    const body = 
    <>
        {!isRechercheActive ? 
            <>
                {!hasResultats ?
                    <InfosContent>
                        Vous pouvez rechercher par Nom et prénom du client, <br />
                        date de naissance, numéro de sécu, <br />
                        N° de facture, de dossier, de FSE…
                    </InfosContent>
                :
                    <ListePatient
                    Selectable_Position='right'
                    {...props}
                    />
                }                    
            </>
        :
            <>
                {hasResultats ?
                    <InfosContent>
                        <ListePatient
                        Selectable_Position='right'
                        {...props}
                        />
                    </InfosContent>
                    :
                    <InfosContent>
                        Aucun dossier patient trouvé <br />
                        Essayez de modifier votre recherche
                    </InfosContent>                
                }
            </>
        }
    </>

    const ContenuDeLaPopUp = 
    <>
        {header}
        {body}
    </>

    return (
        <Autocomplete         
        Autocomplete_resultats={ContenuDeLaPopUp}
        Input_noLabel
        Bulle_Height={400}
        Bulle_Width={600}
        {...props}
        />
    )
};

RecherchePatient.defaultProps = {
    RecherchePatient_minimumRequis: 3
}

export default RecherchePatient
    
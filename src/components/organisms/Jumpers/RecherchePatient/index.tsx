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

& .nb-find {
    display: inline-block;
    margin-right: 4px;
    font-family: Lato;
    font-size: 18px;
    color: #333333;
    line-height: 30px
}

& small {
    font-family: LatoItalic;
    font-size: 13px;
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

const NbFind = styled.div`
display: inline-block;
margin-right: 4px;
font-family: Lato;
font-size: 18px;
color: #333333;
line-height: 30px
`

const RecherchePatient = (props :JumperPatientInterface) => {

    const formatHeader = () => {
        return  props.ListePatient_patients && props.ListePatient_patients.length != 1 && props.ListePatient_patients.length >= 49 ?

            <HeaderRecherche className="trouve">DOSSIERS PATIENTS TROUVES. <small>Essayez de compléter votre recherche</small></HeaderRecherche>
            : (
                props.ListePatient_patients.length == 1 ?
                    <HeaderRecherche>DOSSIER PATIENT TROUVE.</HeaderRecherche>
                    :
                    <HeaderRecherche>DOSSIERS PATIENTS TROUVES.</HeaderRecherche>
            )
    };

    const header = 
    <>
        {props.InputRecherche_recherche.length < props.RecherchePatient_minimumRequis ?
            <>
                <HeaderRecherche>DOSSIERS PATIENTS CONSULTES RECEMMENTS</HeaderRecherche>
                {props.ListePatient_patients && props.ListePatient_patients.length == 0 &&
                    <>
                        <HeaderRecherche className="aucun-recent">Aucun dossier patient  consulté aujourd’hui</HeaderRecherche>
                        <p>
                            Vous pouvez rechercher par Nom et prénom du client, <br />
                            date de naissance, numéro de sécu, <br />
                            N° de facture, de dossier, de FSE…
                        </p>
                    </>                
                }
            </>
        :
            <>
                { props.ListePatient_patients && props.ListePatient_patients.length > 0 ?
                    < >
                        <NbFind>
                            {props.ListePatient_patients.length >= 49 ?
                                <p> + de 50</p>
                            :
                                <p>{props.ListePatient_patients.length}</p>
                            }
                        </NbFind>
                        {formatHeader()}
                    </>
                :
                    <HeaderRecherche className="aucun">
                            Aucun dossier patient trouvé <br />
                            Essayez de modifier votre recherche
                    </HeaderRecherche>
                }
            </>
        }
    </>

    const ContenuDeLaPopUp = 
    <>
        {header}
        {props.ListePatient_patients && props.ListePatient_patients.length > 0 &&
            <ListePatient
                Selectable_Position='right'
                {...props}
            />
        }
    </>

    return (
        <Autocomplete         
        Autocomplete_resultats={ContenuDeLaPopUp}
        Input_noLabel
        {...props}
        />
    )
};

RecherchePatient.defaultProps = {
    RecherchePatient_minimumRequis: 3
}

export default RecherchePatient
    
import React, { FunctionComponent } from 'react'
import Block from '../../../atomics/blocks'
import styled from 'styled-components'
import Icone from '../../../atomics/icones'
import Polices from '../../../atomics/polices'

import {
    ObjectIsNullOrUndefined,
    formatNomPatient,
    formatPrenom
} from '../../../../helpers/helpers'
import Skeleton from '../../../atomics/skeleton'
import moment from 'moment'
import Ligne from '../../../atomics/ligne'
import NumeroSecuInterface from '../../../../interfaces/numero_secu'
import NomPatient from '../../../../interfaces/nom_patient';
import { handleClickInterface } from '../../../../interfaces/handle_click'

export interface JumperLignePatientInterface {
    Id?                 :string|number;
    IdOds?              :string|number;
    Civilite?           :string|undefined;
    NomPat?             :string|undefined;
    NomUsuel?           :string|undefined;
    Prenom?             :string|undefined;
    DateNaissance?      :string|undefined;
    Portable?           :string|undefined;
    Fixe?               :string|undefined;
    NumINSEE?           :string|undefined;
    ClefINSEE?          :string|undefined;
    //ProchainRdv       :string;
    PratReferent?       :string|undefined;
    selectable          :boolean;
    selected            :boolean;
    selectablePosition? :string;
    selectableOnSelect? :(event :handleClickInterface) => handleClickInterface;
    onLigneClick?       :(event :handleClickInterface) => handleClickInterface;
    ligneStyle?         :React.CSSProperties;
}

const BlockNumero = styled.div`
display:flex;
width: 100px;
height:100%;
flex-flow: column nowrap;
justify-content: center;
align-items: flex-end;
`
const BlockSecuriteSociale = styled.div`
display:flex;
width: 180px;
align-items:center;
justify-content: flex-end;
`

const GetIcone =  (civilite:string|undefined) :JSX.Element|null =>  {
    switch (civilite?.toLowerCase()) {
        case 'mademoiselle':
            return <Icone.Mademoiselle style={{width:'35px'}}/>
        case 'madame':
            return <Icone.Madame style={{width:'35px'}}/>
        case 'monsieur':
            return <Icone.Monsieur style={{width:'35px'}}/>
        default:        
            return null;
    }
}

const LignePatient :FunctionComponent<JumperLignePatientInterface> = (props :JumperLignePatientInterface) => {
    
    const formatSousTitre = () :JSX.Element => {
        if (props.DateNaissance && props.Civilite){
            let verbeNaitre = null
            switch(props.Civilite.toLowerCase()) {
                case 'monsieur':
                    verbeNaitre = 'Né'
                    break;
                default:
                    verbeNaitre= 'Née'
                    break;
            }
            return <>{verbeNaitre} le {moment(props.DateNaissance).format('DD/MM/YYYY')}, <span style={{fontFamily: 'Lato-Italic'}}>suivi par {props.PratReferent}</span></>
        }
        return <Skeleton.Rectangle />
    }

    const formatAge = () => {
        if (props.DateNaissance){     
            var diff = moment().diff(props.DateNaissance, 'years');
            var diffMois = moment().diff(props.DateNaissance, 'months');
            if (diff > 0) return `${diff} ans` 
            return `${diffMois} mois`
        }
        return null
    }
    
    const formatNomPrenomPatient = () => {
        return props.NomPat &&  props.NomUsuel && props.Prenom?  
            `${formatNomPatient(props.NomPat, props.NomUsuel, props.Prenom)} ${formatPrenom(props.Prenom)}`
            : 
            null
    }

    return (
        <Ligne {...props}>
            <>
                <Block.IconeSousTitre
                icone={!ObjectIsNullOrUndefined(props.Civilite) ? GetIcone(props.Civilite) : null}
                soustitre={formatAge()}
                skeletonIconeWidth={35}
                />
                <Block.TitreSousTitre
                titre={formatNomPrenomPatient()}
                soustitre={formatSousTitre()}
                titreStyle={{height: '35px', fontSize:'15px'}}
                wrapperStyle={{width:'250px', paddingLeft: '10px'}}
                skeletonTitreWidth={175}
                skeletonSousTitreWidth={200}
                />
                <BlockNumero>
                    <div style={{height:'35px', alignItems:'center', display:'flex'}}>
                        {props.Fixe != null ? <Polices.Objet.Telephone numero={props.Fixe} /> : <Skeleton.Rectangle />}
                    </div>
                    {props.Portable != null ? <Polices.Objet.Telephone numero={props.Portable} /> : <Skeleton.Rectangle />}
                </BlockNumero>
                <BlockSecuriteSociale>
                    {props.NumINSEE != null ? 
                        <Polices.Objet.SecuriteSocial numero={props.NumINSEE} cle={props.ClefINSEE} />
                    :
                        <Skeleton.Rectangle width={120}/>
                    }
                </BlockSecuriteSociale>
            </>
        </Ligne>
    )
}

LignePatient.defaultProps = {
    NomUsuel: '',
    NomPat  : '',
    Prenom  : '',
}
export default LignePatient
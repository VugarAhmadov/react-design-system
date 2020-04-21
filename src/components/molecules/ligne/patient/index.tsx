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
import Ligne, { LigneInterface } from '../../../atomics/ligne'
import NumeroSecuInterface from '../../../../interfaces/numero_secu'
import NomPatient from '../../../../interfaces/nom_patient';
import { handleClickInterface } from '../../../../interfaces/handle_click'
import { JumperPatient } from '../../../../interfaces/patient_jumper'
import { SelectableInterface } from '../../../atomics/comportements/selectable'
import { ChekboxProps } from '../../../atomics/inputs/Generique/checkbox'

export interface JumperLignePatientInterface extends LigneInterface, JumperPatient, SelectableInterface {    
    Ligne_onClick?      :(event :handleClickInterface) => handleClickInterface;
    Ligne_Style?        :React.CSSProperties;
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
            return <>{verbeNaitre} le {moment(props.DateNaissance,'DD/MM/YYYY').format('DD/MM/YYYY')}, <span style={{fontFamily: 'Lato-Italic'}}>suivi par {props.PratReferent}</span></>
        }
        return <Skeleton.Rectangle />
    }

    const formatAge = () => {
        if (props.DateNaissance){     
            var diff = moment().diff(moment(props.DateNaissance,'DD/MM/YYYY'), 'years');
            var diffMois = moment().diff(moment(props.DateNaissance,'DD/MM/YYYY'), 'months');
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
                        {props.NomPat != null ? <Polices.Objet.Telephone numero={props.Fixe ? props.Fixe : ''} /> : <Skeleton.Rectangle />}
                    </div>
                    {props.NomPat != null ? <Polices.Objet.Telephone numero={props.Portable ? props.Portable : ''} /> : <Skeleton.Rectangle />}
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
import React, {
    useState,
    useEffect
} from 'react'
import Block from '../../../../atomics/blocks'
import styled from 'styled-components'
import Icone from '../../../../atomics/icones'
import Polices from '../../../../atomics/polices'
import {
    JumperLignePatientInterface
} from './interface'

import {
    ObjectIsNullOrUndefined,
    formatNomPatient,
    formatPrenom
} from '../../../../../helpers/helpers'
import Skeleton from '../../../../atomics/skeleton'
import moment from 'moment'
import Ligne from '../../ligne'

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

export default (props :JumperLignePatientInterface) => {
    
    const formatSousTitre = () :JSX.Element => {
        if (props.dateNaissance && props.civilite){
            let verbeNaitre = null
            switch(props.civilite.toLowerCase()) {
                case 'monsieur':
                    verbeNaitre = 'Né'
                    break;
                default:
                    verbeNaitre= 'Née'
                    break;
            }
            return <>{verbeNaitre} le {moment(props.dateNaissance).format('DD/MM/YYYY')}, <span style={{fontFamily: 'Lato-Italic'}}>suivi par {props.pratReferent}</span></>
        }
        return <Skeleton.Rectangle />
    }

    const formatAge = () => {
        if (props.dateNaissance){     
            var diff = moment().diff(props.dateNaissance, 'years');
            var diffMois = moment().diff(props.dateNaissance, 'months');
            if (diff > 0) return `${diff} ans` 
            return `${diffMois} mois`
        }
        return null
    }
    
    const formatNomPrenomPatient = () => {
        return props.patient ? 
            `${formatNomPatient(props.patient.nom, props.patient.nom_usuel, props.patient.prenom)} ${formatPrenom(props.patient.prenom)}`
            : 
            null
    }

    return (
        <Ligne {...props}>
            <>
                <Block.IconeSousTitre
                icone={!ObjectIsNullOrUndefined(props.civilite) ? GetIcone(props.civilite) : null}
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
                        {props.numTel1 != null ? <Polices.Objet.Telephone numero={props.numTel1} /> : <Skeleton.Rectangle />}
                    </div>
                    {props.numTel2 != null ? <Polices.Objet.Telephone numero={props.numTel2} /> : <Skeleton.Rectangle />}
                </BlockNumero>
                <BlockSecuriteSociale>
                    {props.numSecu != null ? 
                        <Polices.Objet.SecuriteSocial numero={props.numSecu.numero} cle={props.numSecu.cle} />
                    :
                        <Skeleton.Rectangle width={120}/>
                    }
                </BlockSecuriteSociale>
            </>
        </Ligne>
    )
}
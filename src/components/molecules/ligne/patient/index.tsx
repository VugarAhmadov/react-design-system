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
import { handleClickInterface } from '../../../../interfaces/handle_click'
import { JumperPatient } from '../../../../interfaces/patient_jumper'
import { SelectableInterface } from '../../../atomics/comportements/selectable'

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

const ProchainRendezVous_Container = styled.div`
&.prochainRdv {
    margin-left: 40px;
    min-width: 80px;
    display: flex;
    align-items: center;
    
    .prochainRdv_container {
        display: flex;
        flex-flow: row;
        height: 40px;
    
        .prochainRdv_barreColor {
            width: 4px;
            height: 40px;
            background-color: red;
        }
    
        .prochainRdv_date {
            display: flex;
            flex-flow: column;
            font-family: Lato;
            margin-left: 6px;
            display: flex;
            justify-content: center;
    
            &_day {
                height: 20px;
                line-height: 20px;
                font-size: 11px;
                color: #666666;
                width: 100%;
            }
    
            &_hour {
                height: 20px;
                line-height: 20px;
                font-size: 13px;
                color: #000000;
                width: 100%;
            }
        }
    }
    
    .prochainRdv_noRdv {
        font-family: LatoItalic;
        font-size: 11px;
        color: #97989D;
        display: flex;
        padding-left: 10px;
        align-items: center;
        width: 100%;
        height: 100%;
    }
}

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
                
                <ProchainRendezVous_Container className="prochainRdv">
                {props.ProchainRdv != null && props.ProchainRdv.length > 0 ?

                    <div className="prochainRdv_container">
                        {props.CentreEnCours == props.ProchainRdv[0].idCentre &&
                            <>
                            <div className="prochainRdv_barreColor" style={{ backgroundColor: '#' + (props.ProchainRdv[0].Couleur ? props.ProchainRdv[0].Couleur : 'ffffff') }}></div>
                            <div className="prochainRdv_date">
                                <div className="prochainRdv_date_day">{moment(props.ProchainRdv[0].Date).format('ddd DD MMM')}</div>
                                <div className="prochainRdv_date_hour">{moment(props.ProchainRdv[0].Date).format('HH:mm')}</div>
                            </div>

                            </>
                        }
                    </div>
                    :
                    <div className="prochainRdv_noRdv">
                        Aucun Rdv
                </div>
                }
                </ProchainRendezVous_Container>
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
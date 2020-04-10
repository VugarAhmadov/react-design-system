import styled from 'styled-components'
import DateHeureCpt from './date_heure'
import TelephoneCpt from './numero_telephone'
import SecuriteSocialCpt from './numero_ss'

export const InformationPrincipale = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-family: Lato-Regular;
font-size: 13px;
color: #000000;
display:flex;
align-items:center;
`

export const InformationSecondaire = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-family: Lato-Regular;
font-size: 11px;
color: #97989D;
`

export const Cliquable = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-family: Lato-Regular;
font-size: 13px;
color: #2E7FAE;
`

export const DateHeureStyle = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-family: Lato-Regular;
font-size: 11px;
color: #000000;
// text-align: right;
`

export const DateHeureErreurStyle = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-family: Lato-Italic;
font-size: 11px;
color: #D50A0A;
// text-align: right;
`

export const InformationLie = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-family: Lato-Bold;
font-size: 11px;
color: #97989D;
`

export const Erreur = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-family: Lato-Italic;
font-size: 11px;
color: #D50A0A;
`

export const TelephoneStyle = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-family: Lato-Regular;
font-size: 13px;
color: #666666;
text-align: right;
`


export const SecuriteSocialStyle = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-family: Lato-Regular;
font-size: 13px;
color: #666666;
text-align: right;
`

export const DateHeure = DateHeureCpt
export const Telephone = TelephoneCpt
export const SecuriteSocial = SecuriteSocialCpt
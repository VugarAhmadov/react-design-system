import styled from 'styled-components'
import Result from './resultats'

export const Titre = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-size: 25px;
color: #5BABB9;
font-family: Lato-Bold;
`

export const SousTitre = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-size: 18px;
color: #666666;
font-family: Lato-Light;
`

export const Tracabilite = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-size: 13px;
color: #97989D;
font-family: Lato-Regular;
`

export const MessageGauche = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-size: 15px;
color: #97989D;
font-family: Lato-BoldItalic;
text-align: left;
`

export const MessageCentre = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-size: 15px;
color: #97989D;
font-family: Lato-BoldItalic;
text-align: center;
`

export const Groupe = styled.div`
${props => props.onClick ? 'cursor: pointer;' : ''}
font-size: 15px;
color: #666666;
font-family: Lato-Bold;
`

export const ResultatGauche = styled.span`
font-size: 13px;
color: #000000;
font-family: Lato-Bold;
`

export const ResultatDroite = styled.span`
font-size: 13px;
color: #333333;
font-family: Lato-Light;
`

export const Resultat = Result
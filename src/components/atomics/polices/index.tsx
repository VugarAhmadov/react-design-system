import {
    Titre,
    SousTitre,
    MessageCentre,
    MessageGauche,
    Tracabilite,
    Resultat,
    Groupe
} from './panneau'

import {
    InformationLie,
    InformationPrincipale,
    Cliquable,
    DateHeure,
    InformationSecondaire,
    Erreur,
    Telephone,
    SecuriteSocial
} from './objet'

import '../../../default.style.less'

export default {
    Panneau: {
        Titre,
        SousTitre,
        MessageCentre,
        MessageGauche,
        Tracabilite,
        Groupe,
        Resultat
    },
    Objet : {
        InformationPrincipale,
        InformationSecondaire,
        Cliquable,
        DateHeure,
        InformationLie,
        Erreur,
        Telephone,
        SecuriteSocial
    }
}
import React from 'react';
import Textes from '.';

export const Police = () => (
    <div style={{width: '75%', border: '1px dashed'}}>
        <Textes.Panneau.Titre>Titre du panneau</Textes.Panneau.Titre>
        <Textes.Panneau.SousTitre>Sous titre du panneau</Textes.Panneau.SousTitre>
        <Textes.Panneau.MessageCentre>Message (centré)</Textes.Panneau.MessageCentre>
        <Textes.Panneau.MessageGauche>Message (A gauche)</Textes.Panneau.MessageGauche>
        <Textes.Panneau.Groupe>Nom du groupe</Textes.Panneau.Groupe>
        <Textes.Panneau.Resultat count={3} />
        <Textes.Panneau.Resultat count={0} />
        <Textes.Objet.InformationPrincipale>Information principale</Textes.Objet.InformationPrincipale>
        <Textes.Objet.InformationSecondaire>Information secondaire</Textes.Objet.InformationSecondaire>
        <Textes.Objet.Cliquable>Information cliquable</Textes.Objet.Cliquable>
        <Textes.Objet.DateHeure date={(new Date()).toISOString()} />
        <Textes.Objet.DateHeure date={(new Date()).toISOString()} format={'DD/MM/YYYY'}/>
        <Textes.Objet.DateHeure date={(new Date()).toISOString()} format={'DD/MM/YYYY'} isValid={false} onClick={() => console.log("A")}/>
        <Textes.Objet.InformationLie>Information lié</Textes.Objet.InformationLie>
        <Textes.Objet.Erreur>Erreur</Textes.Objet.Erreur>
        <Textes.Objet.Telephone />
        <Textes.Objet.Telephone numero={"1234567890"}/>
        <Textes.Objet.SecuriteSocial />
        <Textes.Objet.SecuriteSocial numero={"0987654321234"} cle={"12"}/>

    </div>
);

Police.story = {
  name: 'Liste des polices disponibles',
};
export default {
  title: 'Atomes/police',
  component: Police,
};


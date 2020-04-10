import { Moment } from 'moment'

export function isNumeric(x:string|number)  :boolean {
    return !ObjectIsNullOrUndefined(x) && x !== "" && !isNaN(parseInt(x.toString()));
}

export function isNullOrUndefined(x :string) :boolean{
    return x === null || x === undefined;
}

export function ObjectIsNullOrUndefined(x :any) :boolean {
    return x === null || x === undefined;
}

export function formatDateDMMMYYYY(dateMoment :Moment) :string{
    if (dateMoment.date() == 1) {
        return dateMoment.date() + "er " + dateMoment.format('MMMM') + " " + dateMoment.year()
    } else {
        return dateMoment.format("LL")
    }
}

export function afficherMontant(entree :string, nbdecimales:number = 2 ) :string{

    if (isNullOrUndefined(entree) || entree === "")
        return "";

    let nombre = entree.toString().replace(",", ".");
    let montant = parseFloat(nombre);

    if (!montant && montant != 0)
        return '';

    if (montant % 1 === 0)
        return montant.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ",".padEnd(nbdecimales + 1, "0") + " €";

    var tab = montant.toString().split('.');
    var left_part = tab[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    var right_part = tab[1].substring(0, nbdecimales).padEnd(nbdecimales, "0");

    return left_part + "," + right_part + " €";
}

export const formatNumTel = (numero :string) :string => {

    let newvalue = "";
    if (numero != undefined && numero != 'NULL') {
        // numéro recus de l'api sans espaces ni points
        let numFormated = numero.replace(/[\.\s]+/g, "");
        // future value

        // Boucle sur le numéro pour le formater et gras
        for (var i = 0; i < numFormated.length; i++) {

            // le numéro courant 
            var num = numFormated.charAt(i);

            // si pair
            if (numFormated.length % 2 == 0) {

                if (i % 2 == 0) {
                    newvalue += " ";
                }
                newvalue += `${num}`;
            }
            else {
                // sinon impair
                if ((i > 0) && (i % 3 == 0)) {
                    newvalue += " ";
                }
                newvalue += `${num}`;
            }

        }
        return newvalue;

    }
    return newvalue;

};

// Format ; NOM(NOM2)Prenom
export const formatNomPatient = (NomPat :string, NomUsuel:string, Prenom:string) :string => {

    var nom_jf = NomPat;
    var nom_usuel = NomUsuel;
    var prenom = Prenom;

    var nom_formated =
        (nom_usuel != null ? nom_usuel.toUpperCase() : "-") +
        (
            nom_jf != "" && nom_usuel != nom_jf && nom_jf != null ?
                "(" + nom_jf.toUpperCase() + ")"
                :
                ""
        );

    return nom_formated;

};

export const formatDateNaissance = (DateNaissance :Date) :string=> {

    var dateNaiss = DateNaissance == null ? "-" : DateNaissance.toString();
    return dateNaiss;

};

// Format code INSEE x xx xx xx xxx xxx - x
export const formatINSEE = (numInsee:string|number, ClefINSEE:string|number)  :string => {
    let insee = numInsee == null ? '-' : numInsee.toString();

    var clef = ClefINSEE != null ? " - " + ClefINSEE : '';
    if (insee != '-') {

        insee = [insee.slice(0, 1), " ", insee.slice(1)].join('');
        insee = [insee.slice(0, 4), " ", insee.slice(4)].join('');
        insee = [insee.slice(0, 7), " ", insee.slice(7)].join('');
        insee = [insee.slice(0, 10), " ", insee.slice(10)].join('');
        insee = [insee.slice(0, 14), " ", insee.slice(14)].join('')

    }

    return `${insee}${clef}`;

};

export function formatDate(entree :string) :string {

    let endSlash = entree.endsWith("/");
    let date = entree.replace(/[^\d]/g, "");

    let j = date.substring(0, 2).replace(/^([4-9])/, "0$1").replace(/^3[2-9]/, "3").replace(/^00/, "0");
    let m = date.substring(2, 4).replace(/^([2-9])/, "0$1").replace(/^1[3-9]/, "2").replace(/^00/, "0");
    let a = date.substring(4, 8).replace(/^0+/, "");

    let sortie = "";

    if (endSlash) {

        if (m && m.length === 1) m = `0${m}`;
        if (j && j.length === 1) j = `0${j}`;
    }

    if (j) sortie += j;
    if (m) sortie += `/${m}`;
    if (a) sortie += `/${a}`;

    return sortie;
}

export function formatNombre(entree :string) :string {
    return entree.replace(/^0+(?=.)/, "").replace(/[^\d]/g, "");
}

export function formatNombreAvecZero(entree :string) :string{
    return entree.replace(/[^\d]/g, "")
}

export function formatMontant(entree :string, nbdecimales :number = 2)  :string{

    if (!entree)
        return "";

    let tab = entree.replace(",", ".").replace(/[^\d\.]/g, "").split(".");

    let partieEntiere = tab[0].replace(/^0+(?=.)/, "");

    let nombre = partieEntiere;

    if (tab.length > 1) {

        let partieDecimale = tab[1].substring(0, nbdecimales);
        nombre += "," + partieDecimale;
    }

    return nombre;
}

export function valideMontant(nombre :number, montantMax:number = 9999999.00, montantMin:number = 0) :boolean{
    if (!isNaN(montantMax) && parseFloat(nombre.toString()) > parseFloat(montantMax.toString())) {
        return false;
    }
    if (!isNaN(montantMin) && parseFloat(nombre.toString()) < parseFloat(montantMin.toString())) {
        return false;
    }
    return true;
}

export function formatLettreCle(entree:string) :string{

    return entree.toUpperCase().substring(0, 5).replace(/[^0-9A-Z,]/g, "");
}

export function formatCodeActe(entree:string) :string {

    let lettres = entree.toUpperCase().substring(0, 4).replace(/[^A-Z]/g, "");
    let chiffres = entree.substring(4, 7).replace(/[^\d]/g, "");

    return lettres + chiffres;
}

export function formatAlphaNumerique(entree:string) :string {

    entree = entree.replace(/[\W_]/g, "");
    return entree;
}

export function formatNombreDent(entree:string) :string|number{

    entree = formatNombre(entree);
    if (parseInt(entree) > 32) {
        return 32
    } else if (parseInt(entree) <= 0) {
        return ""
    }
    return entree;
}

export function formatPrenom(entree :string) :string{

    return entree
        // Suppression de tous les caractères unicode qui ne sont pas des lettres, lettres accentuées, chiffres, espaces, apostrophes, ou tirets
        .replace(/[^0-9A-Za-zÀ-ÖØ-öø-ÿ\s'\-]/g, '')
        // Suppression des doubles espaces et doubles tirets
        .replace(/(\s|\-){2,}/g, '$1')
        .toLowerCase()
        // Séparation en deux temps : une fois sur les espaces, une fois sur les tirets, pour que la première lettre soit en majuscule
        .split(/\s/g)
        .map(x => {

            let res = x
                .split(/\-/g)
                .map(y => y.charAt(0).toUpperCase() + y.substring(1))
                .join('-');

            return res.charAt(0).toUpperCase() + res.substring(1);
        })
        .join(' ');
}

import React from 'react';

import Inputs from '../';
import { formatNombreAvecZero } from '../../../../helpers/helpers';

/**
 *  Exemple minimal d'utilisation
 *  
 *  <InputRpps
 *  label="label"
 *  errorMessage="Message d'erreur !"
 *  />
 */

/**
 * 
 * @description Affiche un input avec son label et sa PopUp d'erreur 
 * 
 * @param {string}   label              Sera envoyé au HOC qui affichera le label et le message d'erreur
 * @param {string}   customClass        Sera envoyé au HOC qui ajoutera une custom class
 * @param {Number}   height             Sera envoyé au HOC qui gèrera la hauteur du message d'erreur
 * @param {string}   content            Donnée qui initialisera la valeur de l'input
 * @param {string}   type               Type d'input (text, email, ...)
 * @param {string}   placeholder        Affichera le placeholder en cas de champ vide
 * @param {string}   errorMessage       Affichera le message d'erreur dans la PopUp
 * @param {number}   maxlength          Ajoutera l'attribus maxlength à l'input
 * @param {number}   minlength          Ajoutera l'attribus minlength à l'input
 * @param {boolean}  required           Affichera le message d'erreur dans la PopUp précisant que le champ est obligatoire
 * @param {Function} onChange       Sera trigger à chaque saisie dans le champ
 * @param {Function} onKeyPress     Sera trigger lorsque la touche Entrée et Tab sera appuyé
 * @param {Function} onBlur         Sera trigger au moment du blur de l'element
 * @param {Function} onFocus        Sera trigger au moment du Focus de l'élément
 * @param {Function} validation         Sera utilisée pour valider le champ
 * 
 */

export default (props :any) => {

    function formatRPPS(rpps :string) {

        return formatNombreAvecZero(rpps);
    }

    function validRpps(val :string) {
        // On ne vérifie pas la longueur de la chaine, il n'y aura pas de PopUp d'erreur
        return true;
    }

    return (
        <Inputs.Generic
            Input_type="text"
            Input_name="rpps"
            Input_maxlength={20}
            Input_validation={validRpps}
            Input_onChange={({ value }) => formatRPPS(value)}
            {...props}
        />
    );
};

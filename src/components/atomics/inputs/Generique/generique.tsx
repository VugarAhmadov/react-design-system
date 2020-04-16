import React, {
    useState, useEffect, useRef
} from 'react';

import {InputProps} from './generique.interface'

import {
    isNullOrUndefined
} from '../../../../helpers/helpers'

// Hook qui affichera le label + la gestion d'erreur pour tout les composant générique d'input
import {
    avecLabelEstErreur
} from './HOC_wrapper'


import './style.less'

const InputGenerique = (props :InputProps) => {
    // On initialise la valeur initiale avec la props content qui lui ai passé.
    const [value, setValue] = useState(props.content);

    // Récupération d'une référence vers l'input pour lui donner le focus plus tard
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    // Quand le composant est monté, si autofocus est rensigné l'input prend le focus
    useEffect(() => {

        if (props.autoFocus)
            setTimeout(() => inputRef.current.focus({ preventScroll: true }), 100);

    }, [inputRef, props.autoFocus])

    // Au changement du parent 
    useEffect(() => {
        setValue(props.content);
    }, [props.content]);

    const handleChange = (event :React.ChangeEvent<HTMLInputElement>) => {
        if (props.type === 'number' && event.target.value.length > props.maxlength) return false;
        let valeur = event.target.value;

        // On appel la fonction Parente en cas ou on veut attacher un comportement
        let valeurChangedFromParent = props.onChange ? props.onChange({
            value: valeur,
            isValid: props.validation ? props.validation(valeur) : true
        }) : valeur
        if (!isNullOrUndefined(valeurChangedFromParent)) {
            valeur = valeurChangedFromParent;
        }
        setValue(valeur);
    }

    const handleKeyPress = (event :React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            // On appel la fonction Parente en cas ou on veut attacher un comportement
            props.onKeyPress && props.onKeyPress({
                value: value,
                isValid: props.validation ? props.validation(value) : true,
                key: event.key
            });
            inputRef.current.blur()
        }
    }

    const handleBlur = (event :React.FocusEvent<HTMLInputElement>) => {
        // Au Blur on affiche la condition erreur (PopUp + liserais rouge)
        let message = null
        if (value.length === 0 && props.required) { message = 'Ce champ est requis !' }
        if (props.validation && !props.validation(value) && value.length > 0) { message = props.errorMessage }
        props.setError && props.setError(message);
        props.onBlur && props.onBlur({ value: value, isValid: props.validation(value) })
    }

    const handleFocus = (event :React.FocusEvent<HTMLInputElement>) => {
        // Au Focus on affiche pas la condition erreur (PopUp + liserais rouge)
        props.setError && props.setError(null);
        props.onFocus && props.onFocus({ value: value, isValid: props.validation(value) })
    }

    const inputStyles :React.CSSProperties = {
        height: props.inputHeight + 'px',
        width: props.inputWidth + 'px',
        paddingLeft: props.icone_gauche ? props.inputHeight : props.inputHeight/4,
        paddingRight: props.icone_droite ? props.inputHeight : props.inputHeight/4
    }

    const iconeStyles :React.CSSProperties = {
        position: "absolute",
        width: props.inputHeight,
        height: props.inputHeight
    }
    return (
        <>
            {props.icone_gauche && 
                <div className={"icone_gauche"} style={{...iconeStyles, left:0}}>
                    {props.icone_gauche}
                </div>
            }
            <input
                ref={inputRef}
                name={props.name}
                minLength={props.minlength}
                maxLength={props.maxlength}
                type={props.type}
                value={value}
                onChange={handleChange}
                className={(props.error ? 'hasError' : '')}
                placeholder={props.placeHolder}
                onKeyPress={handleKeyPress}
                onBlur={handleBlur}
                onFocus={handleFocus}
                style={inputStyles}
                disabled={props.disabled}
                required={props.required}
                autoComplete="off"
            />
            {props.icone_droite && 
               <div className={"icone_droite"} style={{...iconeStyles, right:0}}>
                   {props.icone_droite}
                </div>
            }
        </>
    );
}

InputGenerique.defaultProps = {
    type: "text",
    name: "input_generique",
    errorMessage: "Une erreur empêche la validation de votre saisie",
    disabled: false,
    noLabel: false,
    inputHeight: 30,
    inputWidth: 210,
    labelWidth: 150,
    minlength: 0,
    maxlength: 99999,
    required: false,
    autoFocus: false,
    error: false
}
// On attache le comportement avecLabelEstErreur au composant
export default avecLabelEstErreur(InputGenerique);
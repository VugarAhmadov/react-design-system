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
    const [value, setValue] = useState(props.Input_content);

    // Récupération d'une référence vers l'input pour lui donner le focus plus tard
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    // Quand le composant est monté, si autofocus est rensigné l'input prend le focus
    useEffect(() => {

        if (props.Input_autoFocus)
            setTimeout(() => inputRef.current.focus({ preventScroll: true }), 100);

    }, [inputRef, props.Input_autoFocus])

    // Au changement du parent 
    useEffect(() => {
        setValue(props.Input_content);
    }, [props.Input_content]);

    const handleChange = (event :React.ChangeEvent<HTMLInputElement>) => {
        if (props.Input_type === 'number' && event.target.value.length > props.Input_maxlength) return false;
        let valeur = event.target.value;

        // On appel la fonction Parente en cas ou on veut attacher un comportement
        let valeurChangedFromParent = props.Input_onChange ? props.Input_onChange({
            value: valeur,
            isValid: props.Input_validation ? props.Input_validation(valeur) : true,            
            inputElement: inputRef.current
        }) : valeur
        if (!isNullOrUndefined(valeurChangedFromParent)) {
            valeur = valeurChangedFromParent;
        }
        setValue(valeur);
    }

    const handleKeyPress = (event :React.KeyboardEvent) => {
        props.Input_onKeyPress && props.Input_onKeyPress({
            value: value,
            isValid: props.Input_validation ? props.Input_validation(value) : true,
            key: event.key,
            inputElement: inputRef.current
        });
        if (event.key === 'Enter') {
            // On appel la fonction Parente en cas ou on veut attacher un comportement
            inputRef.current.blur()
        }
    }

    const handleBlur = (event :React.FocusEvent<HTMLInputElement>) => {
        // Au Blur on affiche la condition erreur (PopUp + liserais rouge)
        let message = null
        if (value.length === 0 && props.Input_required) { message = 'Ce champ est requis !' }
        if (props.Input_validation && !props.Input_validation(value) && value.length > 0) { 
            message = props.Input_errorMessage
        }
        props.Input_setError && props.Input_setError(message);
        props.Input_onBlur && props.Input_onBlur({
            value: value,
            isValid: props.Input_validation(value),
            inputElement: inputRef.current
        })
    }

    const handleFocus = (event :React.FocusEvent<HTMLInputElement>) => {
        // Au Focus on affiche pas la condition erreur (PopUp + liserais rouge)
        props.Input_setError && props.Input_setError(null);
        props.Input_onFocus && props.Input_onFocus({
            value: value,
            isValid: props.Input_validation(value),
            inputElement: inputRef.current
        })
    }

    const inputStyles :React.CSSProperties = {
        height: props.Input_Height + 'px',
        width: props.Input_Width + 'px',
        paddingLeft: props.Input_icone_gauche ? props.Input_Height : props.Input_Height/4,
        paddingRight: props.Input_icone_droite ? props.Input_Height : props.Input_Height/4
    }

    const iconeStyles :React.CSSProperties = {
        position: "absolute",
        width: props.Input_Height,
        height: props.Input_Height
    }
    return (
        <>
            {props.Input_icone_gauche && 
                <div className={"icone_gauche"} style={{...iconeStyles, left:0}}>
                    {props.Input_icone_gauche}
                </div>
            }
            <input
                ref={inputRef}
                name={props.Input_name}
                minLength={props.Input_minlength}
                maxLength={props.Input_maxlength}
                type={props.Input_type}
                value={value}
                onChange={handleChange}
                className={(props.Input_error ? 'hasError' : '')}
                placeholder={props.Input_placeHolder}
                onKeyPress={handleKeyPress}
                onBlur={handleBlur}
                onFocus={handleFocus}
                style={inputStyles}
                disabled={props.Input_disabled}
                required={props.Input_required}
                autoComplete="off"
            />
            {props.Input_icone_droite && 
               <div className={"icone_droite"} style={{...iconeStyles, right:0}}>
                   {props.Input_icone_droite}
                </div>
            }
        </>
    );
}

InputGenerique.defaultProps = {
    Input_type: "text",
    Input_name: "input_generique",
    Input_errorMessage: "Une erreur empêche la validation de votre saisie",
    Input_disabled: false,
    Input_noLabel: false,
    Input_inputHeight: 30,
    Input_inputWidth: 210,
    Input_labelWidth: 150,
    Input_label: 'Label',
    Input_minlength: 0,
    Input_maxlength: 99999,
    Input_required: false,
    Input_autoFocus: false,
    Input_error: false
}
// On attache le comportement avecLabelEstErreur au composant
export default avecLabelEstErreur(InputGenerique);
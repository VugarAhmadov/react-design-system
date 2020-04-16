import React, {
    useState,
    FunctionComponent
} from 'react'
import PopUpError from './popup_erreur'
import { InputProps } from '../Generique/generique.interface'
import { uuid } from 'uuidv4';
import {
    ObjectIsNullOrUndefined
} from '../../../../helpers/helpers'

interface HOCprops extends InputProps {   
    name        :string;
    label       :string;
    errorMessage:string;
    noLabel     :boolean;
    inputHeight :number;
    labelWidth  :number;
}

export function avecLabelEstErreur(WrappedInput :FunctionComponent<InputProps>) {

    return (props :HOCprops) =>  {
        
        const {
            name = "input_generique",
            inputHeight = 30,
            labelWidth=150         
        } = props

        // On génère une id unique afin de pouvoir afficher la popup en cas d'erreur
        const id = name + '-' + uuid()
        const [stateError, setStateError] = useState('');
    
        const handleSetError = (val :string|null) :void => {
            val && setStateError(val)
        }

        const labelStyles :React.CSSProperties = {
            width: `${labelWidth}px`,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace:"nowrap"
        }

        return (
            <div className={`input input_${name} ` + (props.customClass)} style={{height: `${inputHeight}px` }}>
                {!props.noLabel &&
                    <div className={`input--label input_${name}--label`} style={labelStyles}>
                        {props.label}
                    </div>                
                }
                <div
                    className={`input--input input_${name}--input`}
                    id={id}
                >
                    <WrappedInput setError={handleSetError} error={stateError.length > 0} {...props} />
                    {stateError &&
                        <PopUpError
                            popUpHeight={props.inputHeight}
                            container={id}
                            message={stateError}
                        />
                    }
                </div>
            </div>
        );
    }
    
}

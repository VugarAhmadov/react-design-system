import React, {
    useState,
    FunctionComponent
} from 'react'
import PopUpError from './popup_erreur'
import { InputProps } from '../Generique/generique.interface'
import { uuid } from 'uuidv4';

interface HOCprops extends InputProps {
    Input_label         :string;
    Input_noLabel       :boolean;
    Input_labelWidth    :number;
}

export function avecLabelEstErreur(WrappedInput :FunctionComponent<InputProps>) {

    return (props :HOCprops) =>  {
        
        const {
            Input_name = "input_generique",
            Input_Height = 30,
            Input_labelWidth=150         
        } = props

        // On génère une id unique afin de pouvoir afficher la popup en cas d'erreur
        const id = Input_name + '-' + uuid()
        const [stateError, setStateError] = useState('');
    
        const handleSetError = (val :string|null) :void => {
            val && setStateError(val)
        }

        const labelStyles :React.CSSProperties = {
            width: `${Input_labelWidth}px`,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace:"nowrap"
        }

        return (
            <div className={`input input_${Input_name} ` + (props.Input_customClass)} style={{height: `${Input_Height}px` }}>
                {!props.Input_noLabel &&
                    <div className={`input--label input_${Input_name}--label`} style={labelStyles}>
                        {props.Input_label}
                    </div>                
                }
                <div
                    className={`input--input input_${Input_name}--input`}
                    id={id}
                >
                    <WrappedInput Input_setError={handleSetError} Input_error={stateError.length > 0} {...props} />
                    {stateError &&
                        <PopUpError
                            popUpHeight={props.Input_Height}
                            container={id}
                            message={stateError}
                        />
                    }
                </div>
            </div>
        );
    }
    
}

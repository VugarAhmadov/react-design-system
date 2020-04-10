import React, {
    useState
}from 'react'
import PopUpError from './popup_erreur'
import { uuid } from 'uuidv4';

interface HOCprops  {   
    name  :string;
    label :string;
    customClass :string|null;
    errorMessage  :string;
    noLabel :boolean;
    height :number;
    labelWidth :number;
}

export function avecLabelEstErreur(WrappedInput) {

    return (props :HOCprops) =>  {
        
        const {
            name = "input_generique",
            height = 30,
            labelWidth=150         
        } = props

        // On génère une id unique afin de pouvoir afficher la popup en cas d'erreur
        const id = name + '-' + uuid()
        const [error, setError] = useState(null);
    
        const handleSetError = (val :React.SetStateAction<null>) => {
            setError(val)
        }

        const labelStyles :React.CSSProperties = {
            width: `${labelWidth}px`,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace:"nowrap"
        }

        return (
            <div className={`input input_${name} ` + (props.customClass)} style={{height: `${height}px` }}>
                {!props.noLabel &&
                    <div className={`input--label input_${name}--label`} style={labelStyles}>
                        {props.label}
                    </div>                
                }
                <div
                    className={`input--input input_${name}--input`}
                    id={id}
                >
                    <WrappedInput setError={handleSetError} error={error} {...props} />
                    {error &&
                        <PopUpError
                            isError={error != null}
                            height={props.height}
                            container={id}
                            message={error}
                        />
                    }
                </div>
            </div>
        );
    }
    
}

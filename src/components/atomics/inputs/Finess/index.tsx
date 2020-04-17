import React, { FunctionComponent } from 'react';
import Inputs from '../';
import {
    formatNombreAvecZero
} from "../../../../helpers/helpers";
import { InputGeneriqueEvent } from '../Generique/generique.interface';

const InputsFiness :FunctionComponent<any> = (props) => {

    function validFiness(finess:string) {
        return finess.length === 9;
    }

    const formatFiness = (event :InputGeneriqueEvent) => {
        let res = formatNombreAvecZero(event.value);
        return res;
    }

    return (
        <Inputs.Generic
        Input_type="text"
        Input_name="finess"
        Input_maxlength={9}
        Input_validation={validFiness}
        Input_onChange={formatFiness}
        Input_errorMessage={"Il doit comporter 9 chiffres "}
            {...props}
        />
    );
};

export default  InputsFiness;

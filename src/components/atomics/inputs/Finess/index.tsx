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
            type="text"
            name="finess"
            maxlength={9}
            validation={validFiness}
            onChange={formatFiness}
            errorMessage={"Il doit comporter 9 chiffres "}
            {...props}
        />
    );
};

export default  InputsFiness;

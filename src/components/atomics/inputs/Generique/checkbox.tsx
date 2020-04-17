import React from 'react'
import './style.less'

export interface ChekboxProps {
    CheckBox_selected   :boolean;
    CheckBox_locked     :boolean;
    CheckBox_disabled   :boolean;
    CheckBox_className? :string;
    CheckBox_onClick    :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const CheckBox = ( props :ChekboxProps) => {
    const handleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (!props.CheckBox_disabled && !props.CheckBox_locked) {
            props.CheckBox_onClick(event)
        }
    }
    return (
        <span className="spanInputCheckBox" onClick={handleChange}>
            <input
                className={"checkbox-component " + props.CheckBox_className}
                value={props.CheckBox_selected ? '1' : '0'}
                type="checkbox"
                checked={props.CheckBox_selected}
                onChange={() => { /* Sera géré par le onClick de la span supérieur */ }}
                tabIndex={1}
                disabled={props.CheckBox_locked}
            />
            <span></span>
        </span>
    )
}

CheckBox.defaultProps = {
    CheckBox_locked: false,
    CheckBox_disabled: false,
    CheckBox_selected: false
}

export default CheckBox
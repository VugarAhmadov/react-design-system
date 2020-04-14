import React from 'react'
import './style.less'

export default ( props :any) => {
    const handleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (!props.disabled && !props.locked) {
            props.onClick(event)
        }
    }
    return (
        <span className="spanInputCheckBox" onClick={handleChange}>
            <input
                className={"checkbox-component " + props.className}
                value={props.selected}
                type="checkbox"
                checked={props.selected}
                onChange={() => { /* Sera géré par le onClick de la span supérieur */ }}
                tabIndex={1}
                disabled={props.locked}
            />
            <span></span>
        </span>
    )
}
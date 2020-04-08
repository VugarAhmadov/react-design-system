
import React from 'react'
import IconeInterface from './icone.interface'

const Icone = (props :IconeInterface) => (
    <svg viewBox="0 0 40 40" version="1.1" className={props.classe} style={props.style} onClick={props.onClick}>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g stroke="currentColor">
                <g transform="translate(12.682927, 12.682927)" strokeWidth="2">
                    <circle cx="10.4065041" cy="5.20325203" r="5.20325203"></circle>
                    <path d="M6.50406504,9.10569106 L1.15535404e-15,15.6097561" strokeLinecap="square"></path>
                </g>
            </g>
        </g>
    </svg>
);

Icone.defaultProps = {
    classe: 'icone-svg'
}

export default Icone
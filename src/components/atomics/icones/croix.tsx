
import React from 'react'
import IconeInterface from './icone.interface'

const Icone = (props :IconeInterface) => (
    <svg viewBox="0 0 40 40" version="1.1" className={props.classe} style={{ ...props.style, cursor: props.onClick ? 'pointer' : 'normal'}} onClick={props.onClick}>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g fill="currentColor">
                <path d="M18.7915468,19.4974268 L13.1446535,13.7224413 L13.8466798,13.0044905 L19.5024112,18.7885146 L25.3068668,13 L26,13.7269319 L20.2044932,19.5065224 L25.7424273,25.1700771 L25.040401,25.8880279 L19.4936287,20.2154345 L13.6931332,26 L13,25.2730681 L18.7915468,19.4974268 Z"></path>
            </g>
        </g>
    </svg>
);

Icone.defaultProps = {
    classe: 'icone-svg'
}

export default Icone
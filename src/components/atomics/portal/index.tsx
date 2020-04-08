import React, { useEffect, ReactElement } from 'react'
import { createPortal } from 'react-dom'

import './style.less'


interface ChildProps {
    cb: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    style?: React.CSSProperties;
    children?: ReactElement;
}

interface PortalProps {
    cb: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
    container: string;
    fullscreen: boolean;
    portalStyles: CSSRuleList
}

const Child = (props :ChildProps)  => (
    <div onClick={props.cb} style={props.style}>
        {props.children}
    </div>
);


const Portal = (props: PortalProps) => {
    let DOMContainer :HTMLDivElement|null;
    let DOMWrapperElement :HTMLDivElement = document.createElement('div');
    DOMWrapperElement.id = "portal-container"
    
    const toggleActif = () => {
        const { fullsize } = props
        let styles = props.portalStyles || {}
        for (let [key, value] of Object.entries(styles)) {
            DOMWrapperElement.style[key] = value;
        }
        DOMContainer = document.querySelector(props.container)
        if (DOMContainer) {
            (fullsize) ? DOMWrapperElement.classList.add('fullsize') : DOMWrapperElement.classList.remove('fullsize')
            DOMContainer.appendChild(DOMWrapperElement)
        } else {
            throw new Error('PORTAL MOUNT: Div container manquante !')
        }
    }

    useEffect(() => {
        toggleActif()
        return () => {
            if (DOMContainer) {
                DOMContainer.removeChild(DOMWrapperElement)
            } else {
                throw new Error('PORTAL UNMOUNT: Div container manquante !')
            }
        }
    }, [])

    useEffect(() => {
        toggleActif()
    }, [props.fullscreen])

    return createPortal(<Child  {...props}/>, DOMWrapperElement)
}

export default Portal;

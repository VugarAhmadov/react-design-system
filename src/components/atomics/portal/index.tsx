import React, { useEffect, ReactElement, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'

import './style.less'


interface ChildProps {
    cb          :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    style?      : React.CSSProperties;
    children?   :ReactElement;
}

interface PortalProps {
    cb: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void,
    container   :string;
    fullscreen? :boolean;
    portalStyles:React.CSSProperties;
    children?   :ReactElement;
}

const Child = (props :ChildProps)  => (
    <div onClick={props.cb} style={props.style}>
        {props.children}
    </div>
);


const Portal = (props: PortalProps) => {
    let DOMContainer = useRef() as React.MutableRefObject<HTMLElement|null>;
    let DOMWrapperElement :HTMLElement = document.createElement('div');
    DOMWrapperElement.id = "portal-container"
    
    const toggleActif = useCallback(
        () => {
            let styles = props.portalStyles || {}
            for (let [key, value] of Object.entries(styles)) {
                DOMWrapperElement.style[key] = value;
            }
            DOMContainer.current = document.querySelector(props.container)
            if (DOMContainer) {
                (props.fullscreen) ? DOMWrapperElement.classList.add('fullsize') : DOMWrapperElement.classList.remove('fullsize')
                DOMContainer.current?.appendChild(DOMWrapperElement)
            } else {
                throw new Error('PORTAL MOUNT: Div container manquante !')
            }
        },
        [props, DOMWrapperElement, DOMContainer],
      );
      

    useEffect(() => {
        toggleActif()
        return () => {
            if (DOMContainer.current) {
                DOMContainer.current.removeChild(DOMWrapperElement)
            } else {
                throw new Error('PORTAL UNMOUNT: Div container manquante !')
            }
        }
    }, [DOMContainer, toggleActif, DOMWrapperElement])

    useEffect(() => {
        toggleActif()
    }, [props.fullscreen, toggleActif])

    return createPortal(<Child  {...props}/>, DOMWrapperElement)
}

export default Portal;

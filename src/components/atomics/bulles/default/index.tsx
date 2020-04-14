import React, {
    useEffect,
    useRef,
    useState,
    useCallback
} from 'react';
import styled from 'styled-components'
import Portal from '../../portal'

import { isNullOrUndefined } from 'util';

interface BulleProps{
    height      :string;
    width       :string;
    container   :string;
    show        :boolean;
    children    :React.ReactElement;
}

const Wrapper = styled.div`
position: relative;
width:${(props :BulleProps) => props.width};
height: 0px;
background-color: rgba(255,255,255,1);
font-family: Lato-Bold;
padding:0;
border-radius: 4px;
font-size: 12px;
transition: height 250ms;
&.show {
    padding:4px 10px;
    height:${(props :BulleProps) =>  props.height };
    border: ${(props :BulleProps) => props.show ? ' 1px solid #DDDDDD': '0px'};
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.25);
}
${(props :BulleProps) => props.show ? `
&:after {
    content: '';
    position: absolute;
    top: -5px;
    left: 5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid rgba(255,255,255,1);
}
`:null}

`

const Bulle = (props :BulleProps) => {
    //On stock la référence du parent
    const containerRef = useRef() as React.MutableRefObject<HTMLElement|null>;
    const bulleRef = useRef() as React.MutableRefObject<HTMLElement|null>;
    
    //Permettra de mettra  à jour le dom lorsque la ref va changer
    const [, updateState] = useState();
    useEffect(() => {
        if (props.show) {
            setTimeout(() => bulleRef.current?.classList.add('show'), 0);
        } else {
            setTimeout(() => bulleRef.current?.classList.remove('show'), 0);
        }
    }, [props.show])
    useEffect(() => {
        //On stock le noeud HTML
        containerRef.current = document.querySelector("#"+props.container);
        //On lance la maj du dom
        updateState(containerRef.current)
    }, [containerRef.current]);

    const GetParentHeight = useCallback(
        () :string => {
            if (!isNullOrUndefined(containerRef.current)) {
                //Permet de positionner la bulle en dessous de l'element parent
                return `${containerRef.current.offsetHeight+ 2}px`;
            }
            //Place l'élement au dessus du parent
            return '0px';
        },
        [containerRef.current]
    )

    return (
        <Portal
            container={"#" + props.container}            
            fullsize={true}
            portalStyles={{transform: `translateY(${GetParentHeight()})`, overflow: 'hidden', padding: '4px'}}
        >
            <Wrapper ref={bulleRef} {...props}>
                {props.children}
            </Wrapper>
        </Portal>
    );
};

Bulle.defaultProps = {
    height: 30,
    show: false
}

export default Bulle;
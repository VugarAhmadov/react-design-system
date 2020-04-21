import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    FunctionComponent
} from 'react';
import styled from 'styled-components'
import Portal from '../../portal'


export interface BullePropsInterface {
    Bulle_Height      :string;
    Bulle_Width       :string;
    Bulle_Container   :string;
    Bulle_Show        :boolean;
}

const Wrapper = styled.div`
position: relative;
width:${(props: BullePropsInterface) => props.Bulle_Width ? props.Bulle_Width : '100%'};
height: 0px;
background-color: rgba(255,255,255,1);
font-family: Lato-Bold;
padding:0;
border-radius: 4px;
font-size: 12px;
transition: all 250ms ease-in-out;
opacity: 0;
&.show {
    padding:4px 10px;
    height:${(props :BullePropsInterface) =>  props.Bulle_Height };
    border: ${(props :BullePropsInterface) => props.Bulle_Show ? ' 1px solid #DDDDDD': '0px'};
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.25);
    opacity: 1;
}
${(props :BullePropsInterface) => props.Bulle_Show ? `
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

const Bulle :FunctionComponent<BullePropsInterface> = (props) => {
    //On stock la référence du parent
    const containerRef = useRef() as React.MutableRefObject<HTMLDivElement|null>;
    const bulleRef = useRef() as React.MutableRefObject<HTMLDivElement|null>;
    
    //Permettra de mettra  à jour le dom lorsque la ref va changer
    const [, updateState] = useState();
   
    useEffect(() => {
        //On stock le noeud HTML
        containerRef.current = document.querySelector("#"+props.Bulle_Container);
    }, []);

    const GetParentHeight = () => {
        if (containerRef?.current !== undefined && containerRef?.current!== null ) {
            //Permet de positionner la bulle en dessous de l'element parent
            return `${containerRef.current.offsetHeight+ 2}px`;
        }
        //Place l'élement au dessus du parent
        return '0px';
    }

    return (
        <Portal
            container={"#" + props.Bulle_Container}
            portalStyles={{transform: `translateY(${GetParentHeight()})`, overflow: 'hidden', padding: '4px'}}
        >
            <Wrapper className={props.Bulle_Show ? 'show' : ''} ref={bulleRef} {...props} onClick={e => e.stopPropagation()}>
                {props.children}
            </Wrapper>
        </Portal>
    );
};

Bulle.defaultProps = {
    Bulle_Height: '30',
    Bulle_Show: false
}

export default Bulle;
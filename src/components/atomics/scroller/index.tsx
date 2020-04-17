import React, {
    useRef, RefObject, FunctionComponent
} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import './index.less';
import styled from 'styled-components'
import {
    ScrollBarProps
} from 'react-perfect-scrollbar';
// import styles from 'react-perfect-scrollbar/dist/css/styles.css'
// styles.use();

export interface ScrollbarInterface extends ScrollBarProps {
    Scroller_Option?         :any;
    Scroller_className?      :string;
    Scroller_Width?          :string;
    Scroller_Height?         :string;
}

const Wrapper = styled.div`
position:relative;
width   : ${(props :ScrollbarInterface) =>  props.Scroller_Width  ? props.Scroller_Width   : '100%'};
height  : ${(props:ScrollbarInterface) =>  props.Scroller_Height ? props.Scroller_Height  : '100%'};
`
const Scrollbar :FunctionComponent<ScrollbarInterface> = (props) => {
    let ScrollerRef = useRef() as React.RefObject<PerfectScrollbar>;
    return (
        <Wrapper {...props}>
            <PerfectScrollbar
                ref={ScrollerRef}
                className={props.Scroller_className}
                option={props.Scroller_Option}
                onYReachStart={() => {
                    //ScrollerRef.current?._container.classList.remove("scrolled");
                    props.onYReachStart && props.onYReachStart()
                }}
                onYReachEnd={() => props.onYReachEnd}
                onScrollDown={() => {
                    //ScrollerRef.current?._container.classList.add("scrolled")
                    props.onScrollDown && props.onScrollDown()
                }}
                onScrollY={() => props.onScrollY}
            >
                {props.children}
            </PerfectScrollbar>
        </Wrapper>
    )
}

Scrollbar.defaultProps = {
    Scroller_Option: { suppressScrollX: true, wheelSpeed: 0.5 }
}

export default Scrollbar; 
import React, {
    useRef, RefObject
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
    scrollerOption?         :any;
    children?       :React.ReactElement;
    scrollerclassName?      :string;
    scrollerWidth?          :string;
    scrollerHeight?         :string;
}

const Wrapper = styled.div`
position:relative;
width : ${(props :ScrollbarInterface) =>  props.scrollerWidth  ? props.scrollerWidth   : '100%'};
height : ${(props:ScrollbarInterface) =>  props.scrollerHeight ? props.scrollerHeight  : '100%'};
`
const Scrollbar = (props :ScrollbarInterface) => {
    let ScrollerRef = useRef() as React.RefObject<PerfectScrollbar>;
    return (
        <Wrapper {...props}>
            <PerfectScrollbar
                ref={ScrollerRef}
                className={props.className}
                option={props.option}
                onYReachStart={() => {
                    ScrollerRef.current?.context.classList.remove("scrolled");
                    props.onYReachStart && props.onYReachStart()
                }}
                onYReachEnd={() => props.onYReachEnd}
                onScrollDown={() => {
                    ScrollerRef.current?.context.classList.add("scrolled")
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
    options: { suppressScrollX: true, wheelSpeed: 0.5 }
}

export default Scrollbar; 
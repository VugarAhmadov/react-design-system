import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import './index.less';
import styled from 'styled-components'
// import styles from 'react-perfect-scrollbar/dist/css/styles.css'
// styles.use();

export interface ScrollbarInterface {
    option :any;
    onYReachStart :(container: HTMLElement) => void
    onYReachEnd :(container: HTMLElement) => void
    onScrollDown :(container: HTMLElement) => void
    onScrollY :(container: HTMLElement) => void
    children :React.ReactElement;
    className :string;
    width :string;
    
    height :string;
}

const Wrapper = styled.div`
position:relative;
width : ${(props :React.CSSProperties) =>  props.width  ? props.width   : '100%'};
height : ${(props:React.CSSProperties) =>  props.height ? props.height  : '100%'};
`
const Scrollbar = (props :ScrollbarInterface) => {
    return (
        <Wrapper width={props.width} height={props.height} >
            <PerfectScrollbar
                className={props.className}
                option={props.option}
                onYReachStart={(container) => {
                    container.classList.remove("scrolled");
                    props.onYReachStart && props.onYReachStart(container)
                }}
                onYReachEnd={(container) => {
                    props.onYReachEnd && props.onYReachEnd(container)
                }}
                onScrollDown={(container) => {
                    container.classList.add("scrolled")
                    props.onScrollDown && props.onScrollDown(container)
                }}
                onScrollY={(container) => {
                    props.onScrollY && props.onScrollY(container)
                }}
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
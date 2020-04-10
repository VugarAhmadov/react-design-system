import styled from 'styled-components'
import {
    SkeletonProps
} from './interface'
import {
    LoadingAnim
} from './animations'



export default styled.div`
position: relative;
background-color: rgba(0, 0, 0, 0.12);
overflow: hidden;
width: ${(props :SkeletonProps) => props.width ? props.width : 80}px;
margin-top: 4px;
margin-bottom: 4px;
height: ${(props :SkeletonProps) => props.height ? props.height : '6'}px;
border-radius: ${(props :SkeletonProps) => (props.rounded && props.height) ? props.height/2 : (props.rounded) ? '3' : '0'}px;
&:after {
    content: '';
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${LoadingAnim} 1.5s infinite;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
}
`
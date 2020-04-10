import styled from 'styled-components'
import {
    SkeletonProps
} from './interface'
import {
    LoadingAnim
} from './animations'

export default styled.div`
width:  ${(props :SkeletonProps) => props.width ? props.width : '40'}px;
height: ${(props :SkeletonProps) => props.width ? props.width : '40'}px;
position: relative;
padding: 5px;
overflow: hidden;
border-radius: 100%;
background-color: rgba(0, 0, 0, 0.12);
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
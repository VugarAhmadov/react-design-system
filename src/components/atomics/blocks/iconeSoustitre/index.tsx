import React from 'react'
import Police from '../../polices'
import styled from 'styled-components'
import { ObjectIsNullOrUndefined } from '../../../../helpers/helpers'
import Skeleton from '../../skeleton'

const Wrapper = styled.div`
min-width: 40px;
display: flex;
justify-content: center;
flex-flow: column nowrap;
align-items: center;
svg {
    width: 40px;
}
`

export interface IconeSousTitreProps {
    icone :React.ReactElement|null;
    soustitre  :string|null|JSX.Element
    skeletonIconeWidth?:number;
    skeletonTextWidth?:number;
    onClickTitre? :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onClickSousTitre? :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    wrapperStyle? :React.CSSProperties;
}

const iconeSousTitre = (props :IconeSousTitreProps) => {
    return (
        <Wrapper style={{
            ...props.wrapperStyle
        }}>
            {props.icone ? props.icone : <Skeleton.Rond width={props.skeletonIconeWidth}/>}
            {(ObjectIsNullOrUndefined(props.soustitre)) ? 
                 <Skeleton.Rectangle width={props.skeletonTextWidth }/>
            :
                <Police.Objet.InformationSecondaire
                style={{textAlign: 'center'}}
                onClick={props.onClickSousTitre}>
                    {props.soustitre}
                </Police.Objet.InformationSecondaire>
            }
            
        </Wrapper>
    )
}

iconeSousTitre.defaultProps = {
    soustitre: '',
    skeletonIconeWidth: 40,
    skeletonTextWidth: 40
}

export default iconeSousTitre
import React from 'react'
import Police from '../../polices'
import styled from 'styled-components'
import { ObjectIsNullOrUndefined } from '../../../../helpers/helpers'
import Skeleton from '../../skeleton'

const Wrapper = styled.div`
display:flex;
flex-flow: column nowrap;
justify-content:center;
`

export interface TitreSousTitreProps {
    titre :string|null|Element;
    soustitre :string|null|JSX.Element;
    onClickTitre? :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onClickSousTitre? :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    wrapperStyle? :React.CSSProperties;
    titreStyle? :React.CSSProperties;
    soustitreStyle? :React.CSSProperties;
    skeletonTitreWidth :number;
    skeletonSousTitreWidth :number;
}

const titreSousTitre = (props :TitreSousTitreProps) => {
    return (
        <Wrapper style={{
            ...props.wrapperStyle
        }}>
            <Police.Objet.InformationPrincipale
            onClick={props.onClickTitre}
            style={props.titreStyle}
            >
            {(ObjectIsNullOrUndefined(props.titre)) ? 
                <Skeleton.Rectangle width={props.skeletonTitreWidth} />
            :
                props.titre
            }
            </Police.Objet.InformationPrincipale>
            <Police.Objet.InformationSecondaire
            onClick={props.onClickSousTitre}
            style={props.soustitreStyle}
            >
            {(ObjectIsNullOrUndefined(props.soustitre)) ? 
                <Skeleton.Rectangle width={props.skeletonSousTitreWidth} />
            :
                props.soustitre
            }
            </Police.Objet.InformationSecondaire>
        </Wrapper>
    )
}

titreSousTitre.defaultProps = {
    titre: '',
    soustitre: ''
}

export default titreSousTitre
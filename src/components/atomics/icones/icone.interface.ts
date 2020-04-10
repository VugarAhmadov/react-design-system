
export default interface IconProps{
    classe? :string;
    style? :React.CSSProperties,
    onClick? :(event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}
/// <reference types="react" />
declare const _default: {
    TitreSousTitre: {
        (props: import("./titreSoustitre").TitreSousTitreProps): JSX.Element;
        defaultProps: {
            titre: string;
            soustitre: string;
        };
    };
    IconeSousTitre: {
        (props: import("./iconeSoustitre").IconeSousTitreProps): JSX.Element;
        defaultProps: {
            soustitre: string;
            skeletonIconeWidth: number;
            skeletonTextWidth: number;
        };
    };
};
export default _default;

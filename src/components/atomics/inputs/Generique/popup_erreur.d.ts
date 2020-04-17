/// <reference types="react" />
interface ErrorPopUpProps {
    popUpHeight: number;
    container: string;
    message: string;
}
declare const MessageErreur: {
    (props: ErrorPopUpProps): JSX.Element;
    defaultProps: {
        popUpHeight: number;
    };
};
export default MessageErreur;

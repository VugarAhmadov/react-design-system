import React from 'react';

import Portal from '../../portal'

interface ErrorPopUpProps{
    popUpHeight: number;
    container: string;
    message: string;
}

const MessageErreur = (props :ErrorPopUpProps) => {
    return (
        <>
            <Portal
            container={"#" + props.container}
            portalStyles={{
                transform: `translateY(${props.popUpHeight + 2}px)`
            }}
            >
            <div
                className="InputError_PopUp"
                style={{                     
                    lineHeight: `${props.popUpHeight}px`
                }}
            >
                    {props.message}
                </div>
            </Portal>
        </>
    );
};

MessageErreur.defaultProps = {
    popUpHeight: 30
}

export default MessageErreur;
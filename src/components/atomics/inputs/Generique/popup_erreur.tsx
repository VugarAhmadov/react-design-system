import React from 'react';

import Portal from '../../portal'

interface ErrorPopUpProps{
    height: number;
    container: string;
    message: string;
}

const MessageErreur = (props :ErrorPopUpProps) => {
    return (
        <>
            <Portal
            container={"#" + props.container}
            fullsize={true}
            portalStyles={{
                transform: `translateY(${props.height + 2}px)`
            }}
            >
            <div
                className="InputError_PopUp"
                style={{                     
                    lineHeight: `${props.height}px`
                }}
            >
                    {props.message}
                </div>
            </Portal>
        </>
    );
};

MessageErreur.defaultProps = {
    height: 30
}

export default MessageErreur;
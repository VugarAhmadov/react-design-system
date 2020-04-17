import React, { ReactElement } from 'react';
import './style.less';
interface PortalProps {
    cb?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    container: string;
    fullscreen?: boolean | undefined;
    portalStyles: React.CSSProperties;
    children: ReactElement;
}
declare const Portal: {
    (props: PortalProps): React.ReactPortal;
    defaultProps: {
        fullscreen: boolean;
    };
};
export default Portal;

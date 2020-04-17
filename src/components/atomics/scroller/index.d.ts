import { FunctionComponent } from 'react';
import './index.less';
import { ScrollBarProps } from 'react-perfect-scrollbar';
export interface ScrollbarInterface extends ScrollBarProps {
    Scroller_Option?: any;
    Scroller_className?: string;
    Scroller_Width?: string;
    Scroller_Height?: string;
}
declare const Scrollbar: FunctionComponent<ScrollbarInterface>;
export default Scrollbar;

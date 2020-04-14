/// <reference types="react" />

import * as React from "react";

export interface ScrollBarProps {
  /**
   * class name on container
   */
  className?: string;

  /**
   * perfect-scrollbar init options
   */
  option?: object;

  /**
   * get the container ref
   */
  containerRef?: ((ref: any) => void);

  /**
   * fires when the y-axis is scrolled in either direction.
   */
  onScrollY?: (container :HTMLElement) => void);

  /**
   * fires when the x-axis is scrolled in either direction.
   */
  onScrollX?: ((container :HTMLElement) => void);

  /**
   * fires when scrolling upwards.
   */
  onScrollUp?: ((container :HTMLElement) => void);

  /**
   * fires when scrolling downwards.
   */
  onScrollDown?: ((container :HTMLElement) => void);

  /**
   * fires when scrolling to the left.
   */
  onScrollLeft?: ((container :HTMLElement) => void);

  /**
   * fires when scrolling to the right.
   */
  onScrollRight?: ((container :HTMLElement) => void);

  /**
   * fires when scrolling reaches the start of the y-axis.
   */
  onYReachStart?: ((container :HTMLElement) => void);

  /**
   * fires when scrolling reaches the end of the y-axis (useful for infinite scroll).
   */
  onYReachEnd?: ((container :HTMLElement) => void);

  /**
   * fires when scrolling reaches the start of the x-axis.
   */
  onXReachStart?: ((container :HTMLElement) => void);

  /**
   * fires when scrolling reaches the end of the x-axis.
   */
  onXReachEnd?: ((container :HTMLElement) => void);

  /**
   * component name
   */
  component?: string;
}

export default class ScrollBar extends React.Component<ScrollBarProps, any> { }

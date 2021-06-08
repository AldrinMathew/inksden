import React from "react";
import { Padding, PaddingZero } from './Padding';
import { Margin, MarginZero } from './Margin';
import { Color } from "./Color";
import { Colors } from "./Colors";

interface ContainerInterface {
    padding?: Padding,
    margin?: Margin,
    color?: Color,
    textColor?: Color,
    children?: JSX.Element,
}

export default class Container extends React.Component<ContainerInterface> {
    properties: ContainerInterface;
    constructor(props: ContainerInterface) {
        super(props);
        this.properties = props as ContainerInterface;
    }
    render(): JSX.Element {
        const zeroPadding: Padding = PaddingZero();
        const zeroMargin: Margin = MarginZero();
        const style = {
            backgroundColor: (this.properties.color ?? Colors.white).hex,
            color: (this.properties.textColor ?? Colors.black).hex,
            opacity: (this.properties.color ?? Colors.white).opacity,
            paddingTop: (this.properties.padding ?? zeroPadding).top,
            paddingBottom: (this.properties.padding ?? zeroPadding).bottom,
            paddingLeft: (this.properties.padding ?? zeroPadding).left,
            paddingRight: (this.properties.padding ?? zeroPadding).right,
            marginTop: (this.properties.margin ?? zeroMargin).top,
            marginBottom: (this.properties.margin ?? zeroMargin).bottom,
            marginLeft: (this.properties.margin ?? zeroMargin).left,
            marginRight: (this.properties.margin ?? zeroMargin).right,
        };
        return (
            <div style={style}>
                {this.properties.children}
            </div>
        );
    }
}
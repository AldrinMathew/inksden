/**
 * Copyright 2021 Aldrin Mathew

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

import Padding, { PaddingZero } from '../core/Padding';
import Margin, { MarginZero } from '../core/Margin';
import Color from "../core/Color";
import { Colors } from "../core/Colors";
import Widget from "./Widget";

interface ContainerInterface {
    padding?: Padding,
    margin?: Margin,
    color?: Color,
    textColor?: Color,
    opacityForMeAndChildren?: number,
    children?: Widget<any>,
}

export default class Container extends Widget<ContainerInterface> {
    properties: ContainerInterface;
    constructor(props: ContainerInterface) {
        super(props);
        this.properties = props as ContainerInterface;
    }
    build(): JSX.Element {
        const zeroPadding: Padding = PaddingZero();
        const zeroMargin: Margin = MarginZero();
        const style = {
            backgroundColor: (this.properties.color ?? Colors.white).hex,
            color: (this.properties.textColor ?? Colors.black).hex,
            opacity: this.properties.opacityForMeAndChildren,
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
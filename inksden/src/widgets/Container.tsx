/**
 *     Inksden : Copyright 2021 : Aldrin Mathew
 *     
 *     AAF DEPENDABLE LICENSE - 1.0
 *     
 *     This library is licensed under the AAF Dependable License 1.0.
 *     You are allowed to use this library as a dependency in your 
 *     project(s) WITHOUT having to release/make available your own 
 *     project(s) under the same license.
 *     
 *     Unless required by applicable law, this library is provided 
 *     "AS IS", WITHOUT ANY WARRANTIES OR CONDITIONS OF ANY KIND, 
 *     either express or implied. The author(s) of the project is 
 *     not liable for any harms, errors or troubles caused by using 
 *     this library, unless implied by law. By using this license, 
 *     you are acknowledging the complete terms and conditions of 
 *     licensing of this library as specified in AAF Dependable 
 *     License 1.0 available at this URL: 
 *     
 *     https://aldrinsartfactory.com/licenses/dependable/ 
 *     
 *     You are NOT ALLOWED to sell, or distribute this 
 *     library under commercial or non-commercial purposes, other than
 *     using it in your project. You are not allowed to revamp, build 
 *     upon, rebrand, refactor the contents of this library.
 *     Your project shall contain "original work", ideally, the 
 *     definition of which is agreed upon by the community. Using 
 *     this library to achieve that is not a violation of this license.
 *     You are NOT ALLOWED to use the name, branding and identity of 
 *     this library to identify or brand your own project. You ARE 
 *     however allowed to use the name and branding to pinpoint/show 
 *     the source of the contents/code/logic of your project. At no 
 *     point shall you use the identification of the Authors of this 
 *     library to associate them to your own projects, in a way that 
 *     is deceiving/misleading or gives out false information.
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
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
import Container from "./widgets/Container";
import Color, { ColorHex, ColorRGB, ColorRGBA, ColorRGBO } from "./core/Color";
import { Colors } from "./core/Colors";
import Margin from "./core/Margin";
import Padding from "./core/Padding";
import Widget from "./widgets/Widget";
import { RGBAInterface, RGBInterface, RGBOInterface } from "./interfaces/ColorComponents";
import { SideInterface, DiagonalInterface, SymmetryInterface } from "./interfaces/Dimensions";
declare const ColorFrom: {
    hex: typeof ColorHex;
    rgb: typeof ColorRGB;
    rgba: typeof ColorRGBA;
    rgbo: typeof ColorRGBO;
};
declare const Inksden: {
    Widget: typeof Widget;
    Container: typeof Container;
    Color: typeof Color;
    ColorFrom: {
        hex: typeof ColorHex;
        rgb: typeof ColorRGB;
        rgba: typeof ColorRGBA;
        rgbo: typeof ColorRGBO;
    };
    Colors: {
        black: Color;
        white: Color;
        red: Color;
        darkRed: Color;
        green: Color;
        lightGreen: Color;
        darkGreen: Color;
        blue: Color;
        lightBlue: Color;
        darkBlue: Color;
        transparent: Color;
        aliceBlue: Color;
        antiqueWhite: Color;
        aqua: Color;
        aquamarine: Color;
        azure: Color;
        beige: Color;
        bisque: Color;
        blanchedAlmond: Color;
        blueViolet: Color;
        brown: Color;
        burlyWood: Color;
        cadetBlue: Color;
        chartreuse: Color;
        chocolate: Color;
        coral: Color;
        cornflowerBlue: Color;
        cornsilk: Color;
        crimson: Color;
        cyan: Color;
        darkCyan: Color;
        darkGoldenRod: Color;
        darkGrey: Color;
        darkGray: Color;
        darkKhaki: Color;
        darkMagenta: Color;
        darkOliveGreen: Color;
        darkOrange: Color;
        darkOrchid: Color;
        darkSalmon: Color;
        darkSeaGreen: Color;
        darkSlateBlue: Color;
        darkSlateGray: Color;
        darkSlateGrey: Color;
        darkTurquoise: Color;
        darkViolet: Color;
        deepPink: Color;
        deepSkyBlue: Color;
        dimGray: Color;
        dimGrey: Color;
        dodgerBlue: Color;
        fireBrick: Color;
        floralWhite: Color;
        forestGreen: Color;
        fuchsia: Color;
        gainsboro: Color;
        ghostWhite: Color;
        gold: Color;
        goldenRod: Color;
        gray: Color;
        grey: Color;
        greenYellow: Color;
        honeyDew: Color;
        hotPink: Color;
        indianRed: Color;
        indigo: Color;
        ivory: Color;
        khaki: Color;
        lavender: Color;
        lavenderBlush: Color;
        lawnGreen: Color;
        lemonChiffon: Color;
        lightCoral: Color;
        lightCyan: Color;
        lightGoldenRodYellow: Color;
        lightGray: Color;
        lightGrey: Color;
        lightPink: Color;
        lightSalmon: Color;
        lightSeaGreen: Color;
        lightSkyBlue: Color;
        lightSlateGray: Color;
        lightSlateGrey: Color;
        lightSteelBlue: Color;
        lightYellow: Color;
        lime: Color;
        limeGreen: Color;
        linen: Color;
        magenta: Color;
        maroon: Color;
        mediumAquaMarine: Color;
        mediumBlue: Color;
        mediumOrchid: Color;
        mediumPurple: Color;
        mediumSeaGreen: Color;
        mediumSlateBlue: Color;
        mediumSpringGreen: Color;
        mediumTurquoise: Color;
        mediumVioletRed: Color;
        midnightBlue: Color;
        mintCream: Color;
        mistyRose: Color;
        moccasin: Color;
        navajoWhite: Color;
        navy: Color;
        oldLace: Color;
        olive: Color;
        oliveDrab: Color;
        orange: Color;
        orangeRed: Color;
        orchid: Color;
        paleGoldenRod: Color;
        paleGreen: Color;
        paleTurquoise: Color;
        paleVioletRed: Color;
        papayaWhip: Color;
        peachPuff: Color;
        peru: Color;
        pink: Color;
        plum: Color;
        powderBlue: Color;
        purple: Color;
        rebeccaPurple: Color;
        rosyBrown: Color;
        royalBlue: Color;
        saddleBrown: Color;
        salmon: Color;
        sandyBrown: Color;
        seaGreen: Color;
        seaShell: Color;
        sienna: Color;
        silver: Color;
        skyBlue: Color;
        slateBlue: Color;
        slateGray: Color;
        slateGrey: Color;
        snow: Color;
        springGreen: Color;
        steelBlue: Color;
        tan: Color;
        teal: Color;
        thistle: Color;
        tomato: Color;
        turquoise: Color;
        violet: Color;
        wheat: Color;
        whiteSmoke: Color;
        yellow: Color;
        yellowGreen: Color;
    };
    Margin: typeof Margin;
    Padding: typeof Padding;
};
export default Inksden;
export { Container };
export { Color };
export { ColorFrom };
export { Colors };
export { Margin };
export { Padding };
export { Widget };
export type { SideInterface };
export type { DiagonalInterface };
export type { SymmetryInterface };
export type { RGBInterface };
export type { RGBAInterface };
export type { RGBOInterface };

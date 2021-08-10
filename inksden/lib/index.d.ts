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
import { ColorHex, ColorRGB, ColorRGBA, ColorRGBO } from "./core/Color";
import { Colors } from "./core/Colors";
import Margin from "./core/Margin";
import Padding from "./core/Padding";
import Widget from "./widgets/Widget";
import { RGBAInterface, RGBInterface, RGBOInterface } from "./interfaces/ColorComponents";
import { SideInterface, DiagonalInterface, SymmetryInterface } from "./interfaces/Dimensions";
declare const Color: {
    Hex: typeof ColorHex;
    RGB: typeof ColorRGB;
    RGBA: typeof ColorRGBA;
    RGBO: typeof ColorRGBO;
};
declare const Inksden: {
    Widget: typeof Widget;
    Container: typeof Container;
    Color: {
        Hex: typeof ColorHex;
        RGB: typeof ColorRGB;
        RGBA: typeof ColorRGBA;
        RGBO: typeof ColorRGBO;
    };
    Colors: {
        black: import("./core/Color").default;
        white: import("./core/Color").default;
        red: import("./core/Color").default;
        darkRed: import("./core/Color").default;
        green: import("./core/Color").default;
        lightGreen: import("./core/Color").default;
        darkGreen: import("./core/Color").default;
        blue: import("./core/Color").default;
        lightBlue: import("./core/Color").default;
        darkBlue: import("./core/Color").default;
        transparent: import("./core/Color").default;
        aliceBlue: import("./core/Color").default;
        antiqueWhite: import("./core/Color").default;
        aqua: import("./core/Color").default;
        aquamarine: import("./core/Color").default;
        azure: import("./core/Color").default;
        beige: import("./core/Color").default;
        bisque: import("./core/Color").default;
        blanchedAlmond: import("./core/Color").default;
        blueViolet: import("./core/Color").default;
        brown: import("./core/Color").default;
        burlyWood: import("./core/Color").default;
        cadetBlue: import("./core/Color").default;
        chartreuse: import("./core/Color").default;
        chocolate: import("./core/Color").default;
        coral: import("./core/Color").default;
        cornflowerBlue: import("./core/Color").default;
        cornsilk: import("./core/Color").default;
        crimson: import("./core/Color").default;
        cyan: import("./core/Color").default;
        darkCyan: import("./core/Color").default;
        darkGoldenRod: import("./core/Color").default;
        darkGrey: import("./core/Color").default;
        darkGray: import("./core/Color").default;
        darkKhaki: import("./core/Color").default;
        darkMagenta: import("./core/Color").default;
        darkOliveGreen: import("./core/Color").default;
        darkOrange: import("./core/Color").default;
        darkOrchid: import("./core/Color").default;
        darkSalmon: import("./core/Color").default;
        darkSeaGreen: import("./core/Color").default;
        darkSlateBlue: import("./core/Color").default;
        darkSlateGray: import("./core/Color").default;
        darkSlateGrey: import("./core/Color").default;
        darkTurquoise: import("./core/Color").default;
        darkViolet: import("./core/Color").default;
        deepPink: import("./core/Color").default;
        deepSkyBlue: import("./core/Color").default;
        dimGray: import("./core/Color").default;
        dimGrey: import("./core/Color").default;
        dodgerBlue: import("./core/Color").default;
        fireBrick: import("./core/Color").default;
        floralWhite: import("./core/Color").default;
        forestGreen: import("./core/Color").default;
        fuchsia: import("./core/Color").default;
        gainsboro: import("./core/Color").default;
        ghostWhite: import("./core/Color").default;
        gold: import("./core/Color").default;
        goldenRod: import("./core/Color").default;
        gray: import("./core/Color").default;
        grey: import("./core/Color").default;
        greenYellow: import("./core/Color").default;
        honeyDew: import("./core/Color").default;
        hotPink: import("./core/Color").default;
        indianRed: import("./core/Color").default;
        indigo: import("./core/Color").default;
        ivory: import("./core/Color").default;
        khaki: import("./core/Color").default;
        lavender: import("./core/Color").default;
        lavenderBlush: import("./core/Color").default;
        lawnGreen: import("./core/Color").default;
        lemonChiffon: import("./core/Color").default;
        lightCoral: import("./core/Color").default;
        lightCyan: import("./core/Color").default;
        lightGoldenRodYellow: import("./core/Color").default;
        lightGray: import("./core/Color").default;
        lightGrey: import("./core/Color").default;
        lightPink: import("./core/Color").default;
        lightSalmon: import("./core/Color").default;
        lightSeaGreen: import("./core/Color").default;
        lightSkyBlue: import("./core/Color").default;
        lightSlateGray: import("./core/Color").default;
        lightSlateGrey: import("./core/Color").default;
        lightSteelBlue: import("./core/Color").default;
        lightYellow: import("./core/Color").default;
        lime: import("./core/Color").default;
        limeGreen: import("./core/Color").default;
        linen: import("./core/Color").default;
        magenta: import("./core/Color").default;
        maroon: import("./core/Color").default;
        mediumAquaMarine: import("./core/Color").default;
        mediumBlue: import("./core/Color").default;
        mediumOrchid: import("./core/Color").default;
        mediumPurple: import("./core/Color").default;
        mediumSeaGreen: import("./core/Color").default;
        mediumSlateBlue: import("./core/Color").default;
        mediumSpringGreen: import("./core/Color").default;
        mediumTurquoise: import("./core/Color").default;
        mediumVioletRed: import("./core/Color").default;
        midnightBlue: import("./core/Color").default;
        mintCream: import("./core/Color").default;
        mistyRose: import("./core/Color").default;
        moccasin: import("./core/Color").default;
        navajoWhite: import("./core/Color").default;
        navy: import("./core/Color").default;
        oldLace: import("./core/Color").default;
        olive: import("./core/Color").default;
        oliveDrab: import("./core/Color").default;
        orange: import("./core/Color").default;
        orangeRed: import("./core/Color").default;
        orchid: import("./core/Color").default;
        paleGoldenRod: import("./core/Color").default;
        paleGreen: import("./core/Color").default;
        paleTurquoise: import("./core/Color").default;
        paleVioletRed: import("./core/Color").default;
        papayaWhip: import("./core/Color").default;
        peachPuff: import("./core/Color").default;
        peru: import("./core/Color").default;
        pink: import("./core/Color").default;
        plum: import("./core/Color").default;
        powderBlue: import("./core/Color").default;
        purple: import("./core/Color").default;
        rebeccaPurple: import("./core/Color").default;
        rosyBrown: import("./core/Color").default;
        royalBlue: import("./core/Color").default;
        saddleBrown: import("./core/Color").default;
        salmon: import("./core/Color").default;
        sandyBrown: import("./core/Color").default;
        seaGreen: import("./core/Color").default;
        seaShell: import("./core/Color").default;
        sienna: import("./core/Color").default;
        silver: import("./core/Color").default;
        skyBlue: import("./core/Color").default;
        slateBlue: import("./core/Color").default;
        slateGray: import("./core/Color").default;
        slateGrey: import("./core/Color").default;
        snow: import("./core/Color").default;
        springGreen: import("./core/Color").default;
        steelBlue: import("./core/Color").default;
        tan: import("./core/Color").default;
        teal: import("./core/Color").default;
        thistle: import("./core/Color").default;
        tomato: import("./core/Color").default;
        turquoise: import("./core/Color").default;
        violet: import("./core/Color").default;
        wheat: import("./core/Color").default;
        whiteSmoke: import("./core/Color").default;
        yellow: import("./core/Color").default;
        yellowGreen: import("./core/Color").default;
    };
    Margin: typeof Margin;
    Padding: typeof Padding;
};
export default Inksden;
export { Container };
export { Color };
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

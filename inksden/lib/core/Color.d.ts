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
import { RGBAInterface, RGBInterface, RGBOInterface } from "../interfaces/ColorComponents";
export default class Color {
    hex: string;
    red: number;
    green: number;
    blue: number;
    opacity: number;
    alpha: number;
    constructor(red?: number, green?: number, blue?: number, opacity?: number, alpha?: number, hexValue?: string);
    /**
     * Changes the opacity of the corresponding colour instance and returns the value.
     * @param opacity The opacity for the new colour. It's value ranges from 0 to 1, inclusive of both ends.
     * @returns `Color` class instance with the only change in `opacity`, `alpha` and the `hex` value of the colour.
     */
    withOpacity(opacity: number): Color;
    /**
     *
     * @param alpha The alpha for the new colour. It's value ranges from 0 to 255, inclusive of both ends.
     * @returns `Color` class instance with the only change in `alpha`, `opacity` and the `hex` value of the colour.
     */
    withAlpha(alpha: number): Color;
    /**
     *
     * @param red The red component value for the new colour. It's value ranges from 0 to 255, inclusive of both ends.
     * @returns `Color` class instance with the only change in `red` and the `hex` value of the colour.
     */
    withRed(red: number): Color;
    /**
     *
     * @param green The green component value for the new colour. It's value ranges from 0 to 255, inclusive of both ends.
     * @returns `Color` class instance with the only change in `green` and the `hex` value of the colour.
     */
    withGreen(green: number): Color;
    /**
     *
     * @param blue The blue component value for the new colour. It's value ranges from 0 to 255, inclusive of both ends.
     * @returns `Color` class instance with the only change in `blue` and the `hex` value of the colour.
     */
    withBlue(blue: number): Color;
    /**
     * Gets the Red component of the Hex value of the `Color`.
     */
    get hexRed(): string;
    /**
     * Gets the Green component of the Hex value of the `Color`.
     */
    get hexGreen(): string;
    /**
     * Gets the Blue component of the Hex value of the `Color`.
     */
    get hexBlue(): string;
    /**
     * Gets the Alpha component of the Hex value of the `Color`.
     */
    get hexAlpha(): string;
}
/**
 * Creates a color from the Hex value provided. If the Hex value does not have an Alpha component, it is automatically added as `'FF'`.
 *
 * If any other color component is not provided, then it is automatically added as `'00'` or `'0'` depending on how much the hex is complete.
 *
 * @param hex The hex value of the color. It can be without the alpha component, in which case, it adds `FF` to the hex string.
 * @returns `Color` class instance
 */
export declare function ColorHex(hex: string): Color;
/**
 * The values gets automatically capped at 255. The alpha value is defaulted to 255 (FF in Hex format) which means no transparency and the color is completely opaque.
 * @param red The red component of the color to be returned. This translates to the first 2 characters of the Hex value of the color.
 * @param green The green component of the color to be returned. This translates to the 3rd and 4th characters of the Hex value of the color.
 * @param blue The blue component of the color to be returned. This translates to the 5th and 6th characters of the Hex value of the color.
 * @returns `Color` class instance
 */
export declare function ColorRGB(rgb: RGBInterface): Color;
/**
 *
 * @param red The red component of the color to be returned. This translates to the first 2 characters of the Hex value of the color.
 * @param green The green component of the color to be returned. This translates to the 3rd and 4th characters of the Hex value of the color.
 * @param blue The blue component of the color to be returned. This translates to the 5th and 6th characters of the Hex value of the color.
 * @param alpha The alpha component of the color to be returned. This translates to the 7th and 8th characters of the Hex value of the color.
 * @returns `Color` class instance
 */
export declare function ColorRGBA(rgba: RGBAInterface): Color;
/**
 *
 * @param red The red component of the color to be returned. This translates to the first 2 characters of the Hex value of the color.
 * @param green The green component of the color to be returned. This translates to the 3rd and 4th characters of the Hex value of the color.
 * @param blue The blue component of the color to be returned. This translates to the 5th and 6th characters of the Hex value of the color.
 * @param opacity The opacity of the color to be returned. This translates to the 7th and 8th characters of the Hex value of the color.
 * @returns `Color` class instance
 */
export declare function ColorRGBO(rgbo: RGBOInterface): Color;

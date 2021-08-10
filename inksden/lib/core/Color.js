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
var Color = /** @class */ (function () {
    function Color(red, green, blue, opacity, alpha, hexValue) {
        this.red = red !== null && red !== void 0 ? red : 0;
        this.green = green !== null && green !== void 0 ? green : 0;
        this.blue = blue !== null && blue !== void 0 ? blue : 0;
        this.opacity = opacity !== null && opacity !== void 0 ? opacity : 0;
        this.alpha = alpha !== null && alpha !== void 0 ? alpha : 0;
        if (hexValue === undefined) {
            red = (red > 255) ? 256 : red + 1;
            green = (green > 255) ? 256 : green + 1;
            blue = (blue > 255) ? 256 : blue + 1;
            var hex = '#';
            hex += hexMap[Math.trunc(red / 16)];
            hex += hexMap[red % 16];
            hex += hexMap[Math.trunc(green / 16)];
            hex += hexMap[green % 16];
            hex += hexMap[Math.trunc(blue / 16)];
            hex += hexMap[blue % 16];
            if (opacity !== undefined) {
                this.opacity = opacity;
                this.alpha = opacity * 255;
                opacity = (opacity > 1) ? 256 : opacity * 256;
                hex += hexMap[Math.trunc(opacity / 16)];
                hex += hexMap[opacity % 16];
            }
            else if (alpha !== undefined) {
                this.opacity = alpha / 255;
                this.alpha = alpha;
                alpha = (alpha > 255) ? 256 : alpha + 1;
                hex += hexMap[Math.trunc(alpha / 16)];
                hex += hexMap[alpha % 16];
            }
            this.hex = hex;
        }
        else {
            this.hex = hexValue;
            // Converting the Hex string to RGBA colour component values.
            var redString = hexValue.substring(1, 3);
            var redValue = hexMap.indexOf(redString.substring(0, 1)) * 16 + hexMap.indexOf(redString.substring(0, 2));
            this.red = redValue;
            var greenString = hexValue.substring(3, 5);
            var greenValue = hexMap.indexOf(greenString.substring(0, 1)) * 16 + hexMap.indexOf(greenString.substring(0, 2));
            this.green = greenValue;
            var blueString = hexValue.substring(5, 7);
            var blueValue = hexMap.indexOf(blueString.substring(0, 1)) * 16 + hexMap.indexOf(blueString.substring(0, 2));
            this.blue = blueValue;
            var alphaString = hexValue.substring(7, 9);
            var alphaValue = hexMap.indexOf(alphaString.substring(0, 1)) * 16 + hexMap.indexOf(alphaString.substring(0, 2));
            this.alpha = alphaValue;
            this.opacity = alphaValue / 255;
        }
    }
    /**
     * Changes the opacity of the corresponding colour instance and returns the value.
     * @param opacity The opacity for the new colour. It's value ranges from 0 to 1, inclusive of both ends.
     * @returns `Color` class instance with the only change in `opacity`, `alpha` and the `hex` value of the colour.
     */
    Color.prototype.withOpacity = function (opacity) {
        var newColor = this;
        opacity = (opacity <= 1) ? ((opacity < 0) ? 0 : opacity) : (1);
        var alpha = Math.trunc(opacity * 255);
        newColor.alpha = alpha;
        newColor.opacity = opacity;
        var processHex = newColor.hex;
        processHex = processHex.substring(0, 7);
        processHex += hexMap[Math.trunc(alpha / 16)];
        processHex += hexMap[alpha % 16];
        newColor.hex = processHex;
        return newColor;
    };
    /**
     *
     * @param alpha The alpha for the new colour. It's value ranges from 0 to 255, inclusive of both ends.
     * @returns `Color` class instance with the only change in `alpha`, `opacity` and the `hex` value of the colour.
     */
    Color.prototype.withAlpha = function (alpha) {
        var newColor = this;
        alpha = (alpha > 255) ? 255 : Math.trunc((alpha < 0) ? 0 : alpha);
        newColor.alpha = alpha;
        newColor.opacity = alpha / 255;
        var processHex = newColor.hex;
        processHex = processHex.substring(0, 7);
        processHex += hexMap[Math.trunc(alpha / 16)];
        processHex += hexMap[alpha % 16];
        newColor.hex = processHex;
        return newColor;
    };
    /**
     *
     * @param red The red component value for the new colour. It's value ranges from 0 to 255, inclusive of both ends.
     * @returns `Color` class instance with the only change in `red` and the `hex` value of the colour.
     */
    Color.prototype.withRed = function (red) {
        var newColor = this;
        red = (red > 255) ? 255 : Math.trunc(red);
        newColor.red = red;
        var processHex = newColor.hex;
        processHex = processHex.substring(3);
        var redHex = hexMap[Math.trunc(red / 16)];
        redHex += hexMap[red % 16];
        processHex = '#' + redHex + processHex;
        newColor.hex = processHex;
        return newColor;
    };
    /**
     *
     * @param green The green component value for the new colour. It's value ranges from 0 to 255, inclusive of both ends.
     * @returns `Color` class instance with the only change in `green` and the `hex` value of the colour.
     */
    Color.prototype.withGreen = function (green) {
        var newColor = this;
        green = (green > 255) ? 255 : Math.trunc(green);
        newColor.green = green;
        var processHex = newColor.hex;
        var redHex = processHex.substring(0, 3);
        var blueAlphaHex = processHex.substring(5);
        var greenHex = hexMap[Math.trunc(green / 16)];
        greenHex += hexMap[green % 16];
        processHex = redHex + greenHex + blueAlphaHex;
        newColor.hex = processHex;
        return newColor;
    };
    /**
     *
     * @param blue The blue component value for the new colour. It's value ranges from 0 to 255, inclusive of both ends.
     * @returns `Color` class instance with the only change in `blue` and the `hex` value of the colour.
     */
    Color.prototype.withBlue = function (blue) {
        var newColor = this;
        blue = (blue > 255) ? 255 : Math.trunc(blue);
        newColor.blue = blue;
        var processHex = newColor.hex;
        var redGreenHex = processHex.substring(0, 5);
        var alphaHex = processHex.substring(7);
        var blueHex = hexMap[Math.trunc(blue / 16)];
        blueHex += hexMap[blue % 16];
        processHex = redGreenHex + blueHex + alphaHex;
        newColor.hex = processHex;
        return newColor;
    };
    Object.defineProperty(Color.prototype, "hexRed", {
        /**
         * Gets the Red component of the Hex value of the `Color`.
         */
        get: function () {
            return this.hex.substring(1, 3);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hexGreen", {
        /**
         * Gets the Green component of the Hex value of the `Color`.
         */
        get: function () {
            return this.hex.substring(3, 5);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hexBlue", {
        /**
         * Gets the Blue component of the Hex value of the `Color`.
         */
        get: function () {
            return this.hex.substring(5, 7);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hexAlpha", {
        /**
         * Gets the Alpha component of the Hex value of the `Color`.
         */
        get: function () {
            return this.hex.substring(7);
        },
        enumerable: false,
        configurable: true
    });
    return Color;
}());
export default Color;
var hexMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
/**
 * Creates a color from the Hex value provided. If the Hex value does not have an Alpha component, it is automatically added as `'FF'`.
 *
 * If any other color component is not provided, then it is automatically added as `'00'` or `'0'` depending on how much the hex is complete.
 *
 * @param hex The hex value of the color. It can be without the alpha component, in which case, it adds `FF` to the hex string.
 * @returns `Color` class instance
 */
export function ColorHex(hex) {
    if (hex.substring(0, 1) !== '#') {
        hex = '#' + hex;
    }
    if (hex.length < 7) {
        for (var i = 0; i < (7 - hex.length); i++) {
            hex += '0';
        }
        hex += 'FF';
    }
    else if (hex.length < 9) {
        for (var i = 0; i < (9 - hex.length); i++) {
            hex += 'F';
        }
    }
    return new Color(undefined, undefined, undefined, undefined, undefined, hex);
}
/**
 * The values gets automatically capped at 255. The alpha value is defaulted to 255 (FF in Hex format) which means no transparency and the color is completely opaque.
 * @param red The red component of the color to be returned. This translates to the first 2 characters of the Hex value of the color.
 * @param green The green component of the color to be returned. This translates to the 3rd and 4th characters of the Hex value of the color.
 * @param blue The blue component of the color to be returned. This translates to the 5th and 6th characters of the Hex value of the color.
 * @returns `Color` class instance
 */
export function ColorRGB(rgb) {
    return new Color(rgb.red, rgb.green, rgb.blue, 1);
}
/**
 *
 * @param red The red component of the color to be returned. This translates to the first 2 characters of the Hex value of the color.
 * @param green The green component of the color to be returned. This translates to the 3rd and 4th characters of the Hex value of the color.
 * @param blue The blue component of the color to be returned. This translates to the 5th and 6th characters of the Hex value of the color.
 * @param alpha The alpha component of the color to be returned. This translates to the 7th and 8th characters of the Hex value of the color.
 * @returns `Color` class instance
 */
export function ColorRGBA(rgba) {
    return new Color(rgba.red, rgba.green, rgba.blue, undefined, rgba.alpha);
}
/**
 *
 * @param red The red component of the color to be returned. This translates to the first 2 characters of the Hex value of the color.
 * @param green The green component of the color to be returned. This translates to the 3rd and 4th characters of the Hex value of the color.
 * @param blue The blue component of the color to be returned. This translates to the 5th and 6th characters of the Hex value of the color.
 * @param opacity The opacity of the color to be returned. This translates to the 7th and 8th characters of the Hex value of the color.
 * @returns `Color` class instance
 */
export function ColorRGBO(rgbo) {
    return new Color(rgbo.red, rgbo.green, rgbo.blue, rgbo.opacity);
}

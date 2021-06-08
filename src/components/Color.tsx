import { RGBAInterface, RGBInterface, RGBOInterface } from "../interfaces/ColorComponents";

export class Color {

    hex: string;
    red: number;
    green: number;
    blue: number;
    opacity: number;
    alpha: number;

    constructor(red?: number, green?: number, blue?: number, opacity?: number, alpha?: number, hexValue?: string) {

        this.red = red ?? 0;
        this.green = green ?? 0;
        this.blue = blue ?? 0;
        this.opacity = opacity ?? 0;
        this.alpha = alpha ?? 0;

        if (hexValue === undefined) {

            red = (red! > 255) ? 256 : red! + 1;
            green = (green! > 255) ? 256 : green! + 1;
            blue = (blue! > 255) ? 256 : blue! + 1;

            let hex: string = '#';

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

            } else if (alpha !== undefined) {

                this.opacity = alpha / 255;
                this.alpha = alpha;
                alpha = (alpha > 255) ? 256 : alpha + 1;
                hex += hexMap[Math.trunc(alpha / 16)];
                hex += hexMap[alpha % 16];

            }

            this.hex = hex;
        } else {

            if (hexValue.length === 7) {

                hexValue += 'FF';
                this.opacity = 1;
            
            } else if (hexValue.length === 8) {
            
                hexValue += 'F';
            
            }

            this.hex = hexValue;

            // Converting the Hex string to RGBA colour component values.

            const redString: string = hexValue.substring(1, 3);
            const redValue: number = hexMap.indexOf(redString.substring(0, 1)) * 16 + hexMap.indexOf(redString.substring(0, 2));
            this.red = redValue;

            const greenString: string = hexValue.substring(3, 5);
            const greenValue: number = hexMap.indexOf(greenString.substring(0, 1)) * 16 + hexMap.indexOf(greenString.substring(0, 2));
            this.green = greenValue;

            const blueString: string = hexValue.substring(5, 7);
            const blueValue: number = hexMap.indexOf(blueString.substring(0, 1)) * 16 + hexMap.indexOf(blueString.substring(0, 2));
            this.blue = blueValue;
            
            const alphaString: string = hexValue.substring(7, 9);
            const alphaValue: number = hexMap.indexOf(alphaString.substring(0, 1)) * 16 + hexMap.indexOf(alphaString.substring(0, 2));
            this.alpha = alphaValue;
            this.opacity = alphaValue / 255;

        }
    }
}

const hexMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

/**
 * 
 * @param hex The hex value of the color. It can be without the alpha component, in which case, it adds `FF` to the hex string.
 * @returns `Color` class instance
 */
export function ColorHex(hex: string): Color {
    return new Color(undefined, undefined, undefined, undefined, undefined, hex);
}

/**
 * The alpha value is defaulted to 255 (FF in Hex format) which means no transparency and the color is completely opaque.
 * @param red The red component of the color to be returned. This translates to the first 2 characters of the Hex value of the color.
 * @param green The green component of the color to be returned. This translates to the 3rd and 4th characters of the Hex value of the color.
 * @param blue The blue component of the color to be returned. This translates to the 5th and 6th characters of the Hex value of the color.
 * @returns `Color` class instance
 */
export function ColorRGB(rgb: RGBInterface): Color {
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
export function ColorRGBA(rgba: RGBAInterface): Color {
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
export function ColorRGBO(rgbo: RGBOInterface): Color {
    return new Color(rgbo.red, rgbo.green, rgbo.blue, rgbo.opacity);
}
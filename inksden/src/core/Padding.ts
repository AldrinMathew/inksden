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

import { SideInterface, SymmetryInterface } from "../interfaces/Dimensions";

export default class Padding {
    top: number;
    left: number;
    right: number;
    bottom: number;
    constructor(top: number, left: number, right: number, bottom: number) {
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
    }
}

export function PaddingSymmetric(symmetry: SymmetryInterface): Padding {
    return new Padding(symmetry.vertical ?? 0, symmetry.horizontal ?? 0, symmetry.horizontal ?? 0, symmetry.vertical ?? 0);
}

export function PaddingAll(value: number): Padding {
    return new Padding(value, value, value, value);
}

export function PaddingVertical(value: number): Padding {
    return new Padding(value, 0, 0, value);
}

export function PaddingHorizontal(value: number): Padding {
    return new Padding(0, value, value, 0);
}

export function PaddingOnly(side: SideInterface): Padding {
    return new Padding(side.top ?? 0, side.left ?? 0, side.right ?? 0, side.bottom ?? 0);
}

export function PaddingZero(): Padding {
    return new Padding(0, 0, 0, 0);
}
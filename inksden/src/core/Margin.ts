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

export default class Margin {
    top: number;
    left: number;
    right: number;
    bottom: number;
    constructor(top: number, left: number, right: number, bottom: number) {
        this.top = top ?? 0;
        this.left = left ?? 0;
        this.right = right ?? 0;
        this.bottom = bottom ?? 0;
    }
}

export function MarginSymmetric(horizontal: number, vertical: number): Margin {
    return new Margin(vertical, horizontal, horizontal, vertical);
}

export function MarginAll(value: number): Margin {
    return new Margin(value, value, value, value);
}

export function MarginVertical(value: number): Margin {
    return new Margin(value, 0, 0, value);
}

export function MarginHorizontal(value: number): Margin {
    return new Margin(0, value, value, 0);
}

export function MarginOnly(top?: number, left?: number, right?: number, bottom?: number): Margin {
    return new Margin(top ?? 0, left ?? 0, right ?? 0, bottom ?? 0);
}

export function MarginZero(): Margin {
    return new Margin(0, 0, 0, 0);
}
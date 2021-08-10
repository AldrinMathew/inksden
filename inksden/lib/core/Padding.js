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
var Padding = /** @class */ (function () {
    function Padding(top, left, right, bottom) {
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
    }
    return Padding;
}());
export default Padding;
export function PaddingSymmetric(symmetry) {
    var _a, _b, _c, _d;
    return new Padding((_a = symmetry.vertical) !== null && _a !== void 0 ? _a : 0, (_b = symmetry.horizontal) !== null && _b !== void 0 ? _b : 0, (_c = symmetry.horizontal) !== null && _c !== void 0 ? _c : 0, (_d = symmetry.vertical) !== null && _d !== void 0 ? _d : 0);
}
export function PaddingAll(value) {
    return new Padding(value, value, value, value);
}
export function PaddingVertical(value) {
    return new Padding(value, 0, 0, value);
}
export function PaddingHorizontal(value) {
    return new Padding(0, value, value, 0);
}
export function PaddingOnly(side) {
    var _a, _b, _c, _d;
    return new Padding((_a = side.top) !== null && _a !== void 0 ? _a : 0, (_b = side.left) !== null && _b !== void 0 ? _b : 0, (_c = side.right) !== null && _c !== void 0 ? _c : 0, (_d = side.bottom) !== null && _d !== void 0 ? _d : 0);
}
export function PaddingZero() {
    return new Padding(0, 0, 0, 0);
}

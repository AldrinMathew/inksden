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

 import { jsx as _jsx } from "react/jsx-runtime";
 
 import { PaddingZero } from '../core/Padding';
 import { MarginZero } from '../core/Margin';
 import { Colors } from "../core/Colors";
 import Widget from "./Widget";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container(props) {
        var _this = _super.call(this, props) || this;
        _this.properties = props;
        return _this;
    }
    Container.prototype.build = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var zeroPadding = PaddingZero();
        var zeroMargin = MarginZero();
        var style = {
            backgroundColor: ((_a = this.properties.color) !== null && _a !== void 0 ? _a : Colors.white).hex,
            color: ((_b = this.properties.textColor) !== null && _b !== void 0 ? _b : Colors.black).hex,
            opacity: this.properties.opacityForMeAndChildren,
            paddingTop: ((_c = this.properties.padding) !== null && _c !== void 0 ? _c : zeroPadding).top,
            paddingBottom: ((_d = this.properties.padding) !== null && _d !== void 0 ? _d : zeroPadding).bottom,
            paddingLeft: ((_e = this.properties.padding) !== null && _e !== void 0 ? _e : zeroPadding).left,
            paddingRight: ((_f = this.properties.padding) !== null && _f !== void 0 ? _f : zeroPadding).right,
            marginTop: ((_g = this.properties.margin) !== null && _g !== void 0 ? _g : zeroMargin).top,
            marginBottom: ((_h = this.properties.margin) !== null && _h !== void 0 ? _h : zeroMargin).bottom,
            marginLeft: ((_j = this.properties.margin) !== null && _j !== void 0 ? _j : zeroMargin).left,
            marginRight: ((_k = this.properties.margin) !== null && _k !== void 0 ? _k : zeroMargin).right,
        };
        return (_jsx("div", __assign({ style: style }, { children: this.properties.children }), void 0));
    };
    return Container;
}(Widget));
export default Container;

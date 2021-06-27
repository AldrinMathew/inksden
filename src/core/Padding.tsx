/**
 * Copyright 2021 Aldrin Mathew

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

import { SideInterface, SymmetryInterface } from "../interfaces/Dimensions";

export class Padding {
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
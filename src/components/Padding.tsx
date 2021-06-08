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
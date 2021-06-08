export class Margin {
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
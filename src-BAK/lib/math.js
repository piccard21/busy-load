export const sqrt = Math.sqrt;
 
export const square = x => x * x; 

export function cube(x) {
    return x * x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}
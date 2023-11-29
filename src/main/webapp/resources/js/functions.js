export function functions_RandomStartEndSize(x, y, z) {
    let a = Math.random()
    let b = Math.floor(a * z);
    let c = true;
    while (c) {
        if (b >= x && b <= y) {
            c = false;
        }
        else {
            a = Math.random()
            b = Math.floor(a * z);
        }
    }
    return b;
}
export function assert(a, b) {
    const check = a === b;
    if (!check) {
        throw new Error();
    }

}
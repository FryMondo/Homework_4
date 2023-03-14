export function assertForArray(a, b){
    if (Array.isArray(a) && Array.isArray(b)) {
        const ArrEqual = a.length === b.length && a.every((value, index) => value === b[index]);
        if (!ArrEqual) {
            throw new Error();
        }
    }
}
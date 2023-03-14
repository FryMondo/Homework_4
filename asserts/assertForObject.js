export function assertForObjects(obj1, obj2) {
    if (JSON.stringify(obj1) !== JSON.stringify(obj2)) {
        throw new Error();
    }
}
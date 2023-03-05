export function taskOne(symbolKey, stringKey) {
    if (!symbolKey) {
        symbolKey = Symbol('empty');
    }
    if (!stringKey) {
        stringKey = 'empty';
    }
    const object = {
        [symbolKey]: 'value',
        [stringKey]: 'value'
    };
    return object[symbolKey] === object[stringKey];
}
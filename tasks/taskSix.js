import {temp} from "../tests/sixTest.js";

export let cityTemperaturesObject = {
    object: {},
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            this.object = temp;
            for (let key of Object.keys(this.object)) {
                if (typeof key !== 'string' || !isNaN(+key)) {
                    return "Invalid city!";
                }
            }
            for (let values of Object.values(this.object)) {
                if (isNaN(+values) || values === null || values === undefined) {
                    return "Invalid city!";
                }
            }
            let result = '';
            for (const [city, temperature] of Object.entries(this.object)) {
                result += `${city}: ${temperature};\n`;
            }
            result = result.slice(0, -2) + '.';
            return result;
        } else if (hint === 'number') {
            this.object = temp;
            const temperatures = Object.values(this.object);
            if (temperatures.every(temperature => !isNaN(+temperature) && temperature !== null
                && temperature !== undefined)) {
                const sum = temperatures.reduce((total, temperature) => total + (+temperature));
                return (sum / temperatures.length).toFixed(2);
            } else {
                return 0;
            }
        }
    },
};
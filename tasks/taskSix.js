export const cityTemperaturesObject = {
    Kyiv: 12,
    Lviv: 10,
    Odesa: 15,
    Kharkiv: 8,
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            let result = '';
            for (const [city, temperature] of Object.entries(this)) {
                result += `${city}: ${temperature};\n`;
            }
            result = result.slice(0, -2) + '.';
            return result;
        } else if (hint === 'number') {
            const temperatures = Object.values(this);
            const sum = temperatures.reduce((total, temperature) => total + temperature, 0);
            return sum / temperatures.length;
        }
    },
};
const everyOtherLetterIterator = {
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: function () {
                if (index >= taskThree.myString.length) {
                    return {done: true};
                }
                const value = taskThree.myString[index];
                index += 2;
                return {value: value, done: false};
            }
        };
    }
};

const wordIterator = {
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: function () {
                if (index >= taskThree.myString.length) {
                    return {done: true};
                }
                let word = '';
                while (index < taskThree.myString.length && taskThree.myString[index] !== ' '){
                    if (taskThree.myString[index] !== '.' && taskThree.myString[index] !== '!' &&
                        taskThree.myString[index] !== '?'){
                        word += taskThree.myString[index];
                    }
                    index++;
                }
                while (index < taskThree.myString.length && taskThree.myString[index] === ' ') {
                    index++;
                }
                return {value: word, done: false};
            }
        }
    }
};

const sentenceIterator = {
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: function () {
                if (index >= taskThree.myString.length) {
                    return {done: true};
                }
                let startIndex = index;
                while (index < taskThree.myString.length &&
                taskThree.myString[index] !== "." &&
                (taskThree.myString[index] + taskThree[index + 1] + taskThree[index + 2]) !== "..." &&
                taskThree.myString[index] !== "!" &&
                taskThree.myString[index] !== "?") {
                    index++;
                }
                let value = "";
                for (let i = startIndex; i < index; i++) {
                    value += taskThree.myString[i];
                }
                index++;
                return {value: value, done: false};
            }
        };
    }
};

const vowelIterator = {
    [Symbol.iterator]() {
        let index = 0;
        const vowels = ['a', 'e', 'i', 'o', 'u',
            'A', 'E', 'I', 'O', 'U',
            'а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я',
            'А', 'Е', 'Є', 'И', 'І', 'Ї', 'О', 'У', 'Ю', 'Я'];
        return {
            next: function () {
                while (index < taskThree.myString.length &&
                vowels.indexOf(taskThree.myString[index]) === -1) {
                    index++;
                }
                if (index >= taskThree.myString.length) {
                    return {done: true};
                }
                const value = taskThree.myString[index];
                index++;
                return {value: value, done: false};
            }
        };
    }
};

function isBlank(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            return false;
        }
    }
    return true;
}

export const taskThree = {
    myString: function (string) {
        this.myString = string;
    },
    everySecondLetter() {
        if (typeof taskThree.myString === 'string' && !isBlank(taskThree.myString)) {
            let result = '';
            for (const letter of everyOtherLetterIterator) {
                result += '[' + letter + '] ';
            }
            return result;
        } else {
            return undefined;
        }
    },
    words() {
        if (typeof taskThree.myString === 'string' && !isBlank(taskThree.myString)) {
            let result = '';
            for (const word of wordIterator) {
                result += '[' + word + '] ';
            }
            return result;
        } else {
            return undefined;
        }
    },
    sentences() {
        if (typeof taskThree.myString === 'string' && !isBlank(taskThree.myString)) {
            let result = '';
            for (const sentence of sentenceIterator) {
                result += '[' + sentence + '] ';
            }
            return result;
        } else {
            return undefined;
        }
    },
    vowels() {
        if (typeof taskThree.myString === 'string' && !isBlank(taskThree.myString)) {
            let result = '';
            for (const vowel of vowelIterator) {
                result += '[' + vowel + '] ';
            }
            return result;
        } else {
            return undefined;
        }
    }
};
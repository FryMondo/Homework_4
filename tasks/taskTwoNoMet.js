export const newZoo = {
    animals: [],

    getAnimalCount(name) {
        let totalCount = 0;
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].name === name) {
                totalCount += this.animals[i].count;
            }
        }
        return totalCount;
    },

    getTotalAnimalCount() {
        let totalCount = 0;
        for (let i = 0; i < this.animals.length; i++) {
            totalCount += (+this.animals[i].count);
        }
        return totalCount;
    },

    getAnimalsByCount(count) {
        if ((+count) > 0) {
            const foundAnimals = [];
            for (let i = 0; i < this.animals.length; i++) {
                if (this.animals[i].count === (+count)) {
                    foundAnimals[foundAnimals.length] = this.animals[i].name;
                }
            }
            return foundAnimals;
        } else {
            return undefined;
        }
    },

    getAnimalsSortedByCount() {
        const sortedAnimals = [];
        for (let i = 0; i < this.animals.length; i++) {
            sortedAnimals[i] = this.animals[i];
        }
        for (let i = 0; i < sortedAnimals.length; i++) {
            for (let j = 0; j < i; j++) {
                if (sortedAnimals[i].count < sortedAnimals[j].count) {
                    const temp = sortedAnimals[i];
                    sortedAnimals[i] = sortedAnimals[j];
                    sortedAnimals[j] = temp;
                }
            }
        }
        const animalNames = [];
        for (let i = 0; i < sortedAnimals.length; i++) {
            animalNames[i] = sortedAnimals[i].name;
        }
        return animalNames;
    },

    addAnimal(name, count) {
        if (typeof Number(count) === 'number' && count > 0 && typeof name === 'string' && name.trim() !== '') {
            this.animals[this.animals.length] = {name: name, count: count};
            return undefined;
        } else {
            return undefined;
        }
    },

    showAllAnimals() {
        let result = '';
        for (let i = 0; i < this.animals.length; i++) {
            result += `${this.animals[i].name}: ${this.animals[i].count}\n`
        }
        return result;
    },

    removeAnimal(name) {
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].name === name) {
                for (let j = i; j < this.animals.length - 1; j++) {
                    this.animals[j] = this.animals[j + 1];
                }
                this.animals.length--;
                return true;
            }
        }
        return false;
    },

    hasAnimal(name) {
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].name === name) {
                return true;
            }
        }
        return false;
    }
};
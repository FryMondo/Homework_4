export const zoo = {
    animals: [],

    getAnimalCount(name) {
        if (typeof name !== "string" || name.trim() === "") {
            return 0;
        }
        const animalExists = this.animals.some(animal => animal.name === name);
        return animalExists ? this.animals.find(animal => animal.name === name).count : 0;
    },

    getTotalAnimalCount() {
        return this.animals.reduce((total, animal) => total + (+animal.count), 0);
    },

    getAnimalsByCount(count) {
        if ((+count) > 0) {
            return this.animals.filter(animal => animal.count === count).map(animal => animal.name);
        } else {
            return undefined;
        }
    },

    getAnimalsSortedByCount() {
        return this.animals.slice()
            .sort((a, b) => a.count - b.count)
            .map(animal => animal.name);
    },

    addAnimal(name, count) {
        if (typeof Number(count) === 'number' && count > 0 && typeof name === 'string' && name.trim() !== '') {
            this.animals.push({name, count});
            return undefined;
        } else {
            return undefined;
        }
    },

    showAllAnimals() {
        let result = "";
        this.animals.forEach(animal => result += `${animal.name}: ${animal.count}\n`);
        return result;
    },

    removeAnimal(name) {
        const index = this.animals.findIndex(animal => animal.name === name);
        if (index !== -1) {
            this.animals.splice(index, 1);
            return true;
        }
        return false;
    },

    hasAnimal(name) {
        return this.animals.some(animal => animal.name === name);
    }
};
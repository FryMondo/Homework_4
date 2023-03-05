import {zoo} from "../tasks/taskTwoMet.js";
import {newZoo} from "../tasks/taskTwoNoMet.js";
import {assert} from "../asserts/assert.js";
import {assertForArray} from "../asserts/assertForArray.js";

//Using normal values with methods
function test1Var1() {
    assert(zoo.addAnimal('Bear', 5), undefined);
    assert(zoo.addAnimal('Snake', 3), undefined);
    assert(zoo.addAnimal('Giraffe', 2), undefined);
    assert(zoo.addAnimal('Lion', 3), undefined);
    assert(zoo.getAnimalCount('Bear'), 5);
    assert(zoo.getTotalAnimalCount(), 13);
    assertForArray(zoo.getAnimalsByCount(3), ['Snake', 'Lion']);
    assertForArray(zoo.getAnimalsSortedByCount(), ['Giraffe', 'Snake', 'Lion', 'Bear']);
    assert(zoo.showAllAnimals(), 'Bear: 5\n' +
        'Snake: 3\n' +
        'Giraffe: 2\n' +
        'Lion: 3\n');
    assert(zoo.removeAnimal('Lion'), true);
    assert(zoo.hasAnimal('Snake'), true);
}

//Using "wrong" values with methods
function test2Var1() {
    assert(zoo.addAnimal('Zebra', 6), undefined);
    assert(zoo.addAnimal('Crocodile', '2'), undefined);
    assert(zoo.addAnimal('Flamingo', -7), undefined);
    assert(zoo.addAnimal('   ', 3), undefined);
    assert(zoo.addAnimal(undefined, 7), undefined);
    assert(zoo.getAnimalCount(null), 0);
    assert(zoo.getTotalAnimalCount(), 8);
    assert(zoo.getAnimalsByCount(-7), undefined);
    assertForArray(zoo.getAnimalsSortedByCount(), ['Crocodile', 'Zebra']);
    assert(zoo.showAllAnimals(), 'Zebra: 6\n' +
        'Crocodile: 2\n');
    assert(zoo.removeAnimal(null), false)
    assert(zoo.hasAnimal('Gorilla'), false)
}

//Using normal values without methods
function test1Var2() {
    assert(newZoo.addAnimal('Lion', 4), undefined);
    assert(newZoo.addAnimal('Panda', 2), undefined);
    assert(newZoo.addAnimal('Bear', 5), undefined);
    assert(newZoo.addAnimal('Tiger', 3), undefined);
    assert(newZoo.getAnimalCount('Panda'), 2);
    assert(newZoo.getTotalAnimalCount(), 14);
    assertForArray(newZoo.getAnimalsByCount(5), ['Bear']);
    assertForArray(newZoo.getAnimalsSortedByCount(), ['Panda', 'Tiger', 'Lion', 'Bear']);
    assert(newZoo.showAllAnimals(), 'Lion: 4\n' +
        'Panda: 2\n' +
        'Bear: 5\n' +
        'Tiger: 3\n');
    assert(newZoo.removeAnimal('Bear'), true);
    assert(newZoo.hasAnimal('Bear'), false);
}

//Using 'wrong' values without methods
function test2Var2() {
    assert(newZoo.addAnimal('Monkey', 10), undefined);
    assert(newZoo.addAnimal('Giraffe', '6'), undefined);
    assert(newZoo.addAnimal('Snake', -1), undefined);
    assert(newZoo.addAnimal('   ', 9), undefined);
    assert(newZoo.getAnimalCount('Lion'), 0);
    assert(newZoo.getTotalAnimalCount(), 16);
    assert(newZoo.getAnimalsByCount('-7'), undefined);
    assertForArray(newZoo.getAnimalsSortedByCount(), ['Giraffe', 'Monkey']);
    assert(newZoo.showAllAnimals(), 'Monkey: 10\n' +
        'Giraffe: 6\n');
    assert(newZoo.removeAnimal('Panda'), false);
    assert(newZoo.hasAnimal('Snake'), false);
}

export function twoTests() {    //Use only 1 normal or "wrong" test
    console.log('Task #2');
    //tests with methods and normal values
    try {
        test1Var1();
        console.log('Test #1 with methods has passed successfully');
    } catch (error) {
        console.log('Something went wrong in test #1 with methods');
    }

    //tests with methods and 'wrong' values
    // try {
    //     test2Var1();
    //     console.log('Test #2 with methods has passed successfully');
    // } catch (error) {
    //     console.log('Something went wrong in test #2 with methods');
    // }

    //tests without methods and normal values
    // try {
    //     test1Var2();
    //     console.log('Test #1 without methods has passed successfully');
    // } catch (error) {
    //     console.log('Something went wrong in test #2 without methods');
    // }

    //tests without methods and 'wrong' values
    try {
        test2Var2();
        console.log('Test #2 without methods has passed successfully');
    } catch (error) {
        console.log('Something went wrong in test #2 without methods');
    }
    console.log();
}
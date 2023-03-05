import {assert} from "../asserts/assert.js";
import {assertForObjects} from "../asserts/assertForObject.js";
import {cityTemperaturesObject} from "../tasks/taskSix.js";

//Num check
function test1() {
    assert(+cityTemperaturesObject, 11.25);
}

//String
function test2() {
    assert(`${cityTemperaturesObject}`, 'Kyiv: 12;\n' +
        'Lviv: 10;\n' +
        'Odesa: 15;\n' +
        'Kharkiv: 8.');
}

//none
function test3() {
    assertForObjects(cityTemperaturesObject, {
        Kyiv: 12,
        Lviv: 10,
        Odesa: 15,
        Kharkiv: 8,
    });
}

export function sixTest() {
    console.log('Task #6');
    try {
        test1();
        console.log('Test #1 has passed successfully');
    } catch (error) {
        console.log('Something wrong in test #1');
    }
    try {
        test2();
        console.log('Test #2 has passed successfully');
    } catch (error) {
        console.log('Something wrong in test #2');
    }
    try {
        test3();
        console.log('Test #3 has passed successfully');
    } catch (error) {
        console.log('Something wrong in test #3');
    }
}
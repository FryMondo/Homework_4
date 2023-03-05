import {taskOne} from "../tasks/taskOne.js";
import {assert} from "../asserts/assert.js";

//Comparing a character and a string with the same values
function test1() {
    assert(taskOne(Symbol('key'), 'key'), true);
}

//Comparing a character and a string with different values
function test2() {
    assert(taskOne(Symbol('key'), 'not key'), true);
}

//Comparison of character and string when null or undefined
function test3() {
    assert(taskOne(null, 'key'), true);
}

export function oneTest() {
    console.log('Task #1');
    try {
        test1();
        console.log('Test #1 was passed successfully');
    } catch (error) {
        console.log('Something went wrong in test #1');
    }
    try {
        test2();
        console.log('Test #2 was passed successfully');
    } catch (error) {
        console.log('Something went wrong in test #2');
    }
    try {
        test3();
        console.log('Test #3 was passed successfully');
    } catch (error) {
        console.log('Something went wrong in test #3');
    }
    console.log();
}
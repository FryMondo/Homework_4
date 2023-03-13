import {taskThree} from "../tasks/taskThree.js";
import {assert} from "../asserts/assert.js";

//Using normal values
function test1() {
    taskThree.myString = 'I can`t believe! It works!';
    assert(taskThree.everySecondLetter(), '[I] [c] [n] [t] [b] [l] [e] [e] [ ] [t] [w] [r] [s] ');
    assert(taskThree.words(), '[I] [can`t] [believe] [It] [works] ');
    assert(taskThree.sentences(), '[I can`t believe] [ It works] ');
    assert(taskThree.vowels(), '[I] [a] [e] [i] [e] [e] [I] [o] ');
}

//Using normal values
function test2() {
    taskThree.myString = 'Oh gosh... I can`t believe! Are you serious?';
    assert(taskThree.everySecondLetter(), '[O] [ ] [o] [h] [.] [ ] [ ] [a] [`] [ ] [e] [i] [v] [!] [A] [e] ' +
        '[y] [u] [s] [r] [o] [s] ');
    assert(taskThree.words(), '[Oh] [gosh] [I] [can`t] [believe] [Are] [you] [serious] ');
    assert(taskThree.sentences(), '[Oh gosh] [ I can`t believe] [ Are you serious] ');
    assert(taskThree.vowels(), '[O] [o] [I] [a] [e] [i] [e] [e] [A] [e] [o] [u] [e] [i] [o] [u] ');
}

//Using 'wrong' values
function test3() {
    taskThree.myString = '      ';
    assert(taskThree.everySecondLetter(), undefined);
    assert(taskThree.words(), undefined);
    assert(taskThree.sentences(), undefined);
    assert(taskThree.vowels(), undefined);
}

export function threeTest() {
    console.log('Task #3');
    try {
        test1();
        console.log('Test #1 has passed successfully');
    } catch (error) {
        console.log('Something went wrong in test #1');
    }
    try {
        test2();
        console.log('Test #2 has passed successfully');
    } catch (error) {
        console.log('Something went wrong in test #2');
    }
    try {
        test3();
        console.log('Test #3 has passed successfully');
    } catch (error) {
        console.log('Something went wrong in test #3');
    }
    console.log();
}
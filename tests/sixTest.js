import {assert} from "../asserts/assert.js";
import {cityTemperaturesObject} from "../tasks/taskSix.js";
import {assertForObjects} from "../asserts/assertForObject.js";

export let temp;

//Normal numbers
function test1() {
    temp = {
        Kyiv: 12,
        Lviv: '13',
        Odesa: 9,
        Kharkiv: 13,
        Zhytomyr: 12,
        Rivne: 11
    };
    assert(+cityTemperaturesObject, 11.67);
}

//"Wrong" numbers
function test2() {
    temp = {
        Lutsk: null,
        Cherkasy: 13,
        Mariupol: 'ten',
        Mykolaiv: 8,
        Poltava: 10
    };
    assert(+cityTemperaturesObject, 0);
}

//Normal string and normal numbers
function test3() {
    temp = {
        Kyiv: 12,
        Lviv: '13',
        Poltava: 10,
        Cherkasy: 13,
        Rivne: 11
    };
    assert(`${cityTemperaturesObject}`, 'Kyiv: 12;\n' +
        'Lviv: 13;\n' +
        'Poltava: 10;\n' +
        'Cherkasy: 13;\n' +
        'Rivne: 11.');
}

//Normal string and "wrong" numbers
function test4() {
    temp = {
        Lutsk: null,
        Odesa: 9,
        Mariupol: 'ten',
        Mykolaiv: 8,
        Zhytomyr: 12
    };
    assert(`${cityTemperaturesObject}`, 'Invalid city!');
}

//"Wrong" string and normal numbers
function test5() {
    temp = {
        Kyiv: 12,
        Lviv: 13,
        '1': 9,
        Zhytomyr: 12,
        undefined: 11
    };
    assert(`${cityTemperaturesObject}`, 'Invalid city!');
}

//Using nothing
function test6() {
    assertForObjects(cityTemperaturesObject, {
        object: {'1': 9, Kyiv: 12, Lviv: 13, Zhytomyr: 12, undefined: 11}
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
    try {
        test4();
        console.log('Test #4 has passed successfully');
    } catch (error) {
        console.log('Something wrong in test #4');
    }
    try {
        test5();
        console.log('Test #5 has passed successfully');
    } catch (error) {
        console.log('Something wrong in test #5');
    }
    try {
        test6();
        console.log('Test #6 has passed successfully');
    } catch (error) {
        console.log('Something wrong in test #6');
    }
}
import {mapMethods} from "../tasks/taskFour.js";
import {map} from "../tasks/taskFour.js";
import {assert} from "../asserts/assert.js";

//Using normal values
function test1() {
    mapMethods.mapSet('name', 'Steve');
    map.set('name', 'Steve');
    assert(mapMethods.mapGet('name'), map.get('name'));
    assert(mapMethods.mapHas('mission'), map.has('mission'));
    assert(mapMethods.mapSize(), map.size);
    assert(mapMethods.mapDelete('gamemode'), map.delete('gamemode'));
    mapMethods.mapClear();
    map.clear();
    assert(mapMethods.mapSize(), map.size);
}

//Using 'wrong' values
function test2() {
    mapMethods.mapSet('question', 'What?');
    map.set('question', 'What?');
    assert(mapMethods.mapGet('question'), map.get('question'));
    assert(mapMethods.mapHas(null), map.has(undefined));
    assert(mapMethods.mapSize(), map.size);
    mapMethods.mapClear();
    map.clear();
    assert(mapMethods.mapDelete('name'), map.delete('gamemode'));
    assert(mapMethods.mapSize(), map.size);
}

export function fourTest() {
    console.log('Task #4');
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
    console.log();
}
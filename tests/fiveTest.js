import {taskFive} from "../tasks/taskFive.js";
import {assert} from "../asserts/assert.js";
import {assertForObjects} from "../asserts/assertForObject.js";

export let student;

//Using normal values
function test1() {
    student = {
        firstName: 'John',
        lastName: 'Doe',
        course: 1,
        faculty: 'Information systems and technologies',
        security: {
            email: 'john.doe@example.com',
            password: 'password123'
        },
        math: 90,
        english: 85,
        history: 75,
        programming: 82,
        dm: 91,
        physics: 73
    };
    assertForObjects(taskFive.createStudent(student), {
            username: 'john.doe',
            email: 'john.doe@example.com',
            averageGrade: 82.67,
            grades: {
                math: 90,
                english: 85,
                history: 75,
                programming: 82,
                dm: 91,
                physics: 73
            }
        }
    );
    assert(taskFive.getAverageGrade('john.doe', 'password123'), 82.67);
}

//Using wrong password
function test2() {
    student = {
        firstName: 'John',
        lastName: 'Doe',
        course: 1,
        faculty: 'Information systems and technologies',
        security: {
            email: 'john.doe@example.com',
            password: 'password123'
        },
        math: 90,
        english: 85,
        history: 75,
        programming: 82,
        dm: 91,
        physics: 73
    };
    assertForObjects(taskFive.createStudent(student), {
            username: 'john.doe',
            email: 'john.doe@example.com',
            averageGrade: 82.67,
            grades: {
                math: 90,
                english: 85,
                history: 75,
                programming: 82,
                dm: 91,
                physics: 73
            }
        }
    );
    assert(taskFive.getAverageGrade('john.doe', 'IDontKnow'), 82.67);
}
//Using wrong username
function test3() {
    student = {
        firstName: 'John',
        lastName: 'Doe',
        course: 1,
        faculty: 'Information systems and technologies',
        security: {
            email: 'john.doe@example.com',
            password: 'password123'
        },
        math: 90,
        english: 85,
        history: 75,
        programming: 82,
        dm: 91,
        physics: 73
    };
    assertForObjects(taskFive.createStudent(student), {
            username: 'john.doe',
            email: 'john.doe@example.com',
            averageGrade: 82.67,
            grades: {
                math: 90,
                english: 85,
                history: 75,
                programming: 82,
                dm: 91,
                physics: 73
            }
        }
    );
    assert(taskFive.getAverageGrade('no.name', 'password123'), 82.67);
}
//Using "wrong" values
function test4() {
    student = {
        firstName: null,
        lastName: undefined,
        course: 1,
        faculty: 'Information systems and technologies',
        security: {
            email: 'john.doe@example.com',
            password: 'password123'
        },
        math: '9n0',
        english: '85',
        history: 75,
        programming: 82,
        dm: undefined,
        physics: 73
    };
    assertForObjects(taskFive.createStudent(student), {
            username: undefined,
            email: 'john.doe@example.com',
            averageGrade: 78.75,
            grades: {english: 85, history: 75, programming: 82, physics: 73}
        }
    );
    assert(taskFive.getAverageGrade(undefined, 'saga3tsa5q'), undefined);
}
//Using wrong course
function test5() {
    student = {
        firstName: 'John',
        lastName: 'Doe',
        course: 7,
        faculty: 'Information systems and technologies',
        security: {
            email: 'john.doe@example.com',
            password: 'password123'
        },
        math: 90,
        english: 85,
        history: 75,
        programming: 82,
        dm: 91,
        physics: 73
    };
    assertForObjects(taskFive.createStudent(student), {
            username: 'john.doe',
            email: 'john.doe@example.com',
            averageGrade: 82.67,
            grades: {
                math: 90,
                english: 85,
                history: 75,
                programming: 82,
                dm: 91,
                physics: 73
            }
        }
    );
    assert(taskFive.getAverageGrade('john.doe', 'password123'), 82.67);
}
//Using wrong faculty
function test6() {
    student = {
        firstName: 'John',
        lastName: 'Doe',
        course: 3,
        faculty: null,
        security: {
            email: 'john.doe@example.com',
            password: 'password123'
        },
        math: 90,
        english: 85,
        history: 75,
        programming: 82,
        dm: 91,
        physics: 73
    };
    assertForObjects(taskFive.createStudent(student), {
            username: 'john.doe',
            email: 'john.doe@example.com',
            averageGrade: 82.67,
            grades: {
                math: 90,
                english: 85,
                history: 75,
                programming: 82,
                dm: 91,
                physics: 73
            }
        }
    );
    assert(taskFive.getAverageGrade('john.doe', 'password123'), 82.67);
}
//Using wrong email
function test7() {
    student = {
        firstName: 'John',
        lastName: 'Doe',
        course: 3,
        faculty: 'Information systems and technologies',
        security: {
            email: 'john doe@example.com',
            password: 'password123'
        },
        math: 90,
        english: 85,
        history: 75,
        programming: 82,
        dm: 91,
        physics: 73
    };
    assertForObjects(taskFive.createStudent(student), {
            username: 'john.doe',
            email: 'john.doe@example.com',
            averageGrade: 82.67,
            grades: {
                math: 90,
                english: 85,
                history: 75,
                programming: 82,
                dm: 91,
                physics: 73
            }
        }
    );
    assert(taskFive.getAverageGrade('john.doe', 'password123'), 82.67);
}
export function fiveTest() {
    console.log('Task #5');
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
        console.log('Something went wrong in test #2: ' + error);
    }
    try {
        test3();
        console.log('Test #3 has passed successfully');
    } catch (error) {
        console.log('Something went wrong in test #3: ' + error);
    }
    try {
        test4();
        console.log('Test #4 has passed successfully');
    } catch (error) {
        console.log('Something went wrong in test #4');
    }
    try {
        test5();
        console.log('Test #5 has passed successfully');
    } catch (error) {
        console.log('Something went wrong in test #5: ' + error);
    }
    try {
        test6();
        console.log('Test #6 has passed successfully');
    } catch (error) {
        console.log('Something went wrong in test #6: ' + error);
    }
    try {
        test7();
        console.log('Test #7 has passed successfully');
    } catch (error) {
        console.log('Something went wrong in test #7: ' + error);
    }
    console.log();
}
fiveTest()
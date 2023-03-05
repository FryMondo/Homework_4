import {student} from "../tests/fiveTest.js";

function generateUsername(name, surname) {
    if (!name || name.trim().length === 0 || !surname || surname.trim().length === 0) {
        return undefined;
    } else {
        return `${name.toLowerCase()}.${surname.toLowerCase()}`;
    }
}

function calculateAverageGrade(grades) {
    if (grades.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let mark of grades) {
        if (!mark) {
            sum += 0;
        } else {
            sum += (+mark);
        }
    }
    return sum / grades.length;
}

const studentsMap = new Map();

export const taskFive = {
    createStudent({firstName, lastName, security, faculty, course, ...grades}) {
        const username = generateUsername(firstName, lastName);
        const {email} = security;
        const validGrades = {};
        for (const [subject, grade] of Object.entries(grades)) {
            if (grade !== null && grade !== undefined && !isNaN(+grade)) {
                validGrades[subject] = +grade;
            }
        }
        const averageGrade = (+calculateAverageGrade(Object.values(validGrades)).toFixed(2));
        const student = {
            username,
            email,
            averageGrade,
            grades: validGrades,
        };

        studentsMap.set(username, {...student});

        return student;
    },
    getAverageGrade(username, password) {
        if (!username || !password) {
            return undefined;
        } else {
            const stud = studentsMap.get(username);
            if (!stud || student.security.password !== password) {
                throw new Error('Invalid username or password');
            }
            return stud.averageGrade;
        }
    }
}
import {student} from "../tests/fiveTest.js";

function generateUsername(name, surname) {
    if (typeof name === "number" || typeof surname === "number" || !name || name.trim().length === 0 || !surname
        || surname.trim().length === 0) {
        return undefined;
    } else {
        return `${name.toLowerCase()}.${surname.toLowerCase()}`;
    }
}

function calculateAverageGrade(grades) {
    const sum = grades.reduce((total, grade) => total + (+grade || 0));
    return grades.length ? sum / grades.length : 0;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const studentsMap = new Map();

export const taskFive = {
    createStudent({firstName, lastName, security, faculty, course, ...grades}) {
        const username = generateUsername(firstName, lastName);
        if (course !== null && course !== undefined && !isNaN(+course) && course >= 1 && course <= 5) {
        } else {
            throw new Error("Invalid course!");
        }
        if (typeof faculty !== 'string') {
            throw new Error("Invalid faculty!");
        }
        const {email} = security;
        if (!isValidEmail(email)) {
            throw new Error("Invalid email!");
        }
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
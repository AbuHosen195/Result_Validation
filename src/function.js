
const createAlert = (msg, type = 'danger') => {
    return`<p class="alert alert-${type} d-flex justify-content-between">${msg}<button class="btn-close" data-bs-dismiss="alert"></button></p>`;
}

// result check function

const getResult = (marks) => {
    let gpa;
    let grade;
    if (marks > 0 && marks < 32) {
        gpa = 0;
        grade = "F"
    } else if (marks >= 33 && marks <= 39) {
        gpa = 1;
        grade = "D";
    } else if (marks >= 40 && marks <= 49) {
        gpa = 2;
        grade = "C";
    } else if (marks >= 50 && marks <= 59) {
        gpa = 3;
        grade = "B";
    } else if (marks >= 60 && marks <= 69) {
        gpa = 4;
        grade = "A-";
    } else if (marks >= 70 && marks <= 79) {
        gpa = 4.5;
        grade = "A";
    } else if (marks >= 80 && marks <= 100) {
        gpa = 5;
        grade = "A+";
    } else {
        gpa = "Invalid";
        grade = "Invalid";
    }
    return {
        gpa: gpa,
        grade: grade,
    }
};
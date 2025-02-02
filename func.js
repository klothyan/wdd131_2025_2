function getGrades(inputSelector) {
    const grades = document.querySelector(inputSelector).value;
    const gradesArray = grades.split(",");
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    console.log(cleanGrades);
    return cleanGrades;
}

function lookupGrade(grade) {
    let points = 0;
    switch (grade) {
        case "A":
            points = 4;
            break;
        case "B":
            points = 3;
            break;
        case "C":
            points = 2;
            break;
        case "D":
            points = 1;
            break;
        default:
            points = 0;
            break;
    }
    return points;
}

function calculateGpa(grades) {
    const validGrades = grades.filter(grade => grade !== "");
    if (validGrades.length === 0) {
        return "Invalid grades";
    }
    
    const gradePoints = validGrades.map((grade) => lookupGrade(grade));
    
    const gpa =
        gradePoints.reduce((total, num) => total + num) / gradePoints.length;

    return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
    const outputElement = document.querySelector(selector);
    outputElement.innerText = gpa;
}

function clickHandler() {
    const grades = getGrades("#grades");
    
    const gpa = calculateGpa(grades);

    outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);

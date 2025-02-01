const steps = ["one", "two", "three"];
const listTemplate = (step) => {
    return `<li>${step}</li>`;
};  
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

const grades = ["A", "B", "C"];

function convertGrade(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    } else if (grade === "C") {
        points = 2;
    }
    return points;
}

const gpaPoints = grades.map(convertGrade);

const pointsTotal = gpaPoints.reduce((total, item) => total + item, 0);
const gpa = pointsTotal / gpaPoints.length;

console.log("GPA:", gpa);


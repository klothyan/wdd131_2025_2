const steps = ["one", "two", "three"];
const listTemplate = (step) => {
    return `<li>${step}</li>`;
};  
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
    if (grade === "A") return 4;
    if (grade === "B") return 3;
    return 0;
}

const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce((total, item) => total + item, 0);
const gpa = pointsTotal / gpaPoints.length;

console.log("GPA:", gpa);

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);
console.log("Short Words:", shortWords);

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);

console.log("Lucky Number Index:", luckyIndex);

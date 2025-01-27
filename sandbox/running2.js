const myApples = 4;
const friendApples = 2;
let total = myApples + friendApples;

document.getElementById("myAppleElement").textContent = myApples;
document.getElementById("friendAppleElement").textContent = friendApples;
document.getElementById("totalApplesElement").textContent = total;

const myArray = [12, 34, 21, 54];
const luckyNumber = [21];
let luckyIndex = -1;
myArray.forEach(function (item, index) {
    if (item === luckyNumber) {
        luckyIndex = index;
    }
});

function isLucky(item) {
    return item === luckyNumber;
}
const index = myArray.findIndex(isLucky);
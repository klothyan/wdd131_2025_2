const newParagraph = document.createElement('p');
newParagraph.innerText = 'Added with Javascript!';


const newImage = document.createElement('img');
newImage.src = 'https://picsum.photos/200';
newImage.setAttribute('alt', 'Random image from picsum.');


const newDiv = document.createElement('div');
newDiv.innerHTML = '<ul><li>One</li><li>Two</li><li>Three</li></ul>';


const ingredientsData = ["Pinto beans", "Korn", "Spices", "Tortillas"];
const portionData = ["1 15oz can", "1 15oz can", "1Tbsp", "8"];


function ingredientTemplate(index) {
    return `<li>${portionData[index]}  ${ingredientsData[index]}</li>`
}

const newList = document.createElement("ul");
ingredientsData.forEach(function (item, index) {
    newList.innerHTML += ingredientTemplate(index);
})



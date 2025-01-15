const newParagraph = document.createElement('p');
newParagraph.innerText = 'Added with Javascript!';
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.src = 'https://picsum.photos/200';
newImage.setAttribute('alt', 'Random image from picsum.');
document.body.appendChild(newImage);

const newDiv = document.createElement('div');
newDiv.innerHTML = '<ul><li>One</li><li>Two</li><li>Three</li></ul>';
document.body.appendChild(newDiv);

const newSection = document.createElement('section');
newSection.innerHTML = ``
<h2>${title}</h2>
<h3>${subtitle}}</h3>
<p>${Content}<p/>
document.body.append(newSection);
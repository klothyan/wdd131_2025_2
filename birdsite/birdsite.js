function searchBirds() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let birdCards = document.getElementsByClassName('card');
    
    for (let i = 0; i < birdCards.length; i++) {
        let card = birdCards[i];
        let text = card.innerText.toLowerCase();
        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}
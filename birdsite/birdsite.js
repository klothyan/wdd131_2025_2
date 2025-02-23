document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchBar");
    const searchForm = document.getElementById("searchForm");

    if (searchInput) {
        searchInput.addEventListener("input", function() {
            showSuggestions(searchInput);
        });
    }

    if (searchForm) {
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
            searchBirds();
        });
    }
});

const birdData = [
    "American Robin", "American Goldfinch", "Black-Capped Chickadee", 
    "Red-Winged Blackbird", "European Starling", "House Sparrow", 
    "Mourning Dove", "House Finch", "Black-Billed Magpie"
];

function showSuggestions(inputElement) {
    let input = inputElement.value.trim().toLowerCase();
    let suggestionBox = document.getElementById("suggestions");

    if (!suggestionBox) {
        suggestionBox = document.createElement("ul");
        suggestionBox.id = "suggestions";
        inputElement.parentNode.appendChild(suggestionBox);
    }

    suggestionBox.innerHTML = "";
    suggestionBox.style.position = "absolute";
    suggestionBox.style.background = "white";
    suggestionBox.style.border = "1px solid black";
    suggestionBox.style.listStyleType = "none";
    suggestionBox.style.padding = "5px";
    suggestionBox.style.width = inputElement.offsetWidth + "px";
    suggestionBox.style.left = inputElement.offsetLeft + "px";
    suggestionBox.style.top = inputElement.offsetTop + inputElement.offsetHeight + "px";
    suggestionBox.style.zIndex = "1000";
    suggestionBox.style.display = "none";

    if (input.length === 0) {
        return;
    }

    const filteredBirds = birdData.filter(bird => 
        bird.toLowerCase().startsWith(input)
    );

    if (filteredBirds.length > 0) {
        suggestionBox.style.display = "block";
        suggestionBox.innerHTML = filteredBirds.map(bird => 
            `<li style="cursor: pointer; padding: 5px;" onclick="selectSuggestion('${bird}')">${bird}</li>`
        ).join("");
    } else {
        suggestionBox.style.display = "none";
    }
}

function selectSuggestion(bird) {
    document.getElementById("searchBar").value = bird;
    document.getElementById("suggestions").style.display = "none";
}

function searchBirds() {
    let input = document.getElementById("searchBar").value.trim().toLowerCase();

    const foundBird = birdData.find(bird => bird.toLowerCase() === input);

    if (foundBird) {
        window.location.href = "page2.html?search=" + encodeURIComponent(foundBird.toLowerCase());
    }
}

window.onload = function() {
    let params = new URLSearchParams(window.location.search);
    let searchQuery = params.get("search");
    
    if (searchQuery) {
        let birdCards = document.querySelectorAll(".bird-card");
        let found = false;
        
        birdCards.forEach(card => {
            let birdName = card.querySelector("p").innerText.toLowerCase();
            if (birdName.includes(searchQuery)) {
                card.style.border = "3px solid red";
                found = true;
            }
        });

        if (found) {
            document.querySelector(".bird-card[style]").scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }
};

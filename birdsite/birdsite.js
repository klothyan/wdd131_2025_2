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

    displayBirds();
});

const birds = [
    {
        name: "American Robin",
        description: "A migratory songbird with a bright orange belly.",
        image: "images/american_robin.jpg",
        sound: "audio/american_robin.mp3"
    },
    {
        name: "American Goldfinch",
        description: "A small yellow bird with black wings, commonly seen at feeders.",
        image: "images/american_goldfinch.jpg",
        sound: "audio/american_goldfinch.mp3"
    },
    {
        name: "Black-Capped Chickadee",
        description: "A tiny bird known for its 'chick-a-dee' call.",
        image: "images/black_capped_chickadee.jpg",
        sound: "audio/black_capped_chickadee.mp3"
    },
    {
        name: "Red-Winged Blackbird",
        description: "A black bird with striking red and yellow shoulder patches.",
        image: "images/red_winged_blackbird.jpg",
        sound: "audio/red_winged_blackbird.mp3"
    },
    {
        name: "European Starling",
        description: "A speckled black bird known for mimicking sounds.",
        image: "images/european_starling.jpg",
        sound: "audio/european_starling.mp3"
    },
    {
        name: "House Sparrow",
        description: "A small brown bird commonly found in urban areas.",
        image: "images/house_sparrow.jpg",
        sound: "audio/house_sparrow.mp3"
    },
    {
        name: "Mourning Dove",
        description: "A gentle, gray-brown bird known for its mournful cooing.",
        image: "images/mourning_dove.jpg",
        sound: "audio/mourning_dove.mp3"
    },
    {
        name: "House Finch",
        description: "A red-headed finch often seen at backyard feeders.",
        image: "images/house_finch.jpg",
        sound: "audio/house_finch.mp3"
    },
    {
        name: "Black-Billed Magpie",
        description: "A striking black-and-white bird with a long tail.",
        image: "images/black_billed_magpie.jpg",
        sound: "audio/black_billed_magpie.mp3"
    }
];

const birdNames = birds.map(bird => bird.name);

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

    const filteredBirds = birdNames.filter(bird => 
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

    const foundBird = birds.find(bird => bird.name.toLowerCase() === input);

    if (foundBird) {
        window.location.href = "page2.html?search=" + encodeURIComponent(foundBird.name.toLowerCase());
    }
}

function displayBirds() {
    const birdContainer = document.getElementById("birdContainer");
    if (!birdContainer) return;

    birdContainer.innerHTML = "";

    birds.forEach(bird => {
        const birdCard = document.createElement("div");
        birdCard.classList.add("bird-card");

        birdCard.innerHTML = `
            <img src="${bird.image}" alt="${bird.name}" style="width:100px; height:100px;">
            <p><strong>${bird.name}</strong></p>
            <p>${bird.description}</p>
            <button onclick="playSound('${bird.name.replace(/\s/g, '_')}')">Play Sound</button>
            <button onclick="stopSound('${bird.name.replace(/\s/g, '_')}')">Stop Sound</button>
            <audio id="${bird.name.replace(/\s/g, '_')}" src="${bird.sound}"></audio>
        `;

        birdContainer.appendChild(birdCard);
    });
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

function playSound(birdId) {
    let sound = document.getElementById(birdId);
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
}

function stopSound(birdId) {
    let sound = document.getElementById(birdId);
    if (sound) {
        sound.pause();
        sound.currentTime = 0;
    }
}

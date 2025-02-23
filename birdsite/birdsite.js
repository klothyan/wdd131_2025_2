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

const birdData = [
    {
        name: "American Robin",
        image: "American_Robin.jpg",
        description: "A familiar songbird with a bright orange-red breast. Robins are known for their cheerful songs, often heard at dawn. They primarily feed on worms, insects, and berries.",
        audio: "Robin.mp3"
    },
    {
        name: "American Goldfinch",
        image: "American_Goldfinch.jpg",
        description: "A small, bright yellow bird often seen fluttering through open fields. They have a distinctive, bouncy flight pattern and love to eat sunflower and thistle seeds.",
        audio: "Goldfinch.mp3"
    },
    {
        name: "Black-Capped Chickadee",
        image: "Black-Capped_Chikadee.jpg",
        description: "A tiny, curious bird with a black cap and bib. They are highly intelligent and can store food for later. Their 'chick-a-dee-dee-dee' call is iconic.",
        audio: "Chickadee.mp3"
    },
    {
        name: "Red-Winged Blackbird",
        image: "Red-Winged_Blackbird.webp",
        description: "Males have striking red and yellow shoulder patches. They are commonly found in wetlands, where they make loud, melodic calls.",
        audio: "Blackbird.mp3"
    },
    {
        name: "European Starling",
        image: "European_Starling.jpg",
        description: "Introduced from Europe, starlings are highly adaptable and can mimic human speech. Their glossy, iridescent feathers shimmer in the sunlight.",
        audio: "Starling.mp3"
    },
    {
        name: "House Sparrow",
        image: "House_Sparrow.jpg",
        description: "A small, social bird often found around human dwellings. Originally from Europe, they have successfully adapted to cities and towns worldwide.",
        audio: "Sparrow.mp3"
    },
    {
        name: "Mourning Dove",
        image: "Mourning_Dove.jpg",
        description: "Known for their soft, mournful cooing. They are graceful, fast flyers that often feed on the ground in open fields.",
        audio: "Dove.mp3"
    },
    {
        name: "House Finch",
        image: "House_Finch.jpg",
        description: "Males have a reddish-orange hue on their head and chest. They are known for their sweet, warbling songs.",
        audio: "Finch.mp3"
    },
    {
        name: "Black-Billed Magpie",
        image: "Black-Billed_Magpie.avif",
        description: "Intelligent and social birds often seen in groups. They are part of the crow family and can recognize themselves in mirrors.",
        audio: "Magpie.mp3"
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

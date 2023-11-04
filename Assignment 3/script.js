const addPigButton = document.querySelector("button");
const addPigTable = document.querySelector("#addPigTable");
const newPigCategory = document.querySelector("#newPigCategory");
const saveButton = document.querySelector("#saveButton");
/*Save button functionality*/
const newPigForm = document.querySelector("#newPigForm");
newPigForm.addEventListener("submit", function (e) {
    let pigNameInput = document.querySelector("#newPigName");
    let newPigName = pigNameInput.value;
    let pigHeightInput = document.querySelector("#newPigHeight");
    let newPigHeight = parseInt(pigHeightInput.value);
    let pigWeightInput = document.querySelector("#newPigWeight");
    let newPigWeight = parseInt(pigWeightInput.value);
    let pigPersonalityInput = document.querySelector("#newPigPersonality");
    let newPigPersonality = pigPersonalityInput.value;
    let pigCategorySelection = document.querySelector("#newPigCategory");
    let newPigCategory = pigCategorySelection.value;
    if (newPigCategory == "grey") {
        let pigBreedInput = document.querySelector("#greyPigBreed");
        let newPigBreed = pigBreedInput.value;
        let pigSwimmingInput = document.querySelector("#greyPigInput");
        let newPigSwimmingScore = parseInt(pigSwimmingInput.value);
        let newGreyPig = new GreyPig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigSwimmingScore);
        localStorage.setItem("greyPig", JSON.stringify(newGreyPig));
    }
    else if (newPigCategory == "chestnut") {
        let pigBreedInput = document.querySelector("#chestnutPigBreed");
        let newPigBreed = pigBreedInput.value;
        let pigLanguageInput = document.querySelector("#chestnutPigInput");
        let newPigLanguage = pigLanguageInput.value;
        let newChestnutPig = new ChestnutPig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigLanguage);
        localStorage.setItem("chestnutPig", JSON.stringify(newChestnutPig));
    }
    else if (newPigCategory == "white") {
        let pigBreedInput = document.querySelector("#whitePigBreed");
        let newPigBreed = pigBreedInput.value;
        let pigRunningInput = document.querySelector("#whitePigInput");
        let newPigRunningScore = parseInt(pigRunningInput.value);
        let newWhitePig = new GreyPig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigRunningScore);
        localStorage.setItem("whitePig", JSON.stringify(newWhitePig));
    }
    else {
        let pigBreedInput = document.querySelector("#blackPigBreed");
        let newPigBreed = pigBreedInput.value;
        let pigStrengthInput = document.querySelector("#blackPigInput");
        let newPigStrengthScore = parseInt(pigStrengthInput.value);
        let newBlackPig = new GreyPig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigStrengthScore);
        localStorage.setItem("blackPig", JSON.stringify(newBlackPig));
    }
});
/*Show the add pig table and hide it on addPigButton press*/
let tableShowing = false;
addPigButton.addEventListener('click', function (e) {
    if (tableShowing) {
        addPigTable.style.display = 'none';
    }
    else {
        addPigTable.style.display = 'table';
    }
    tableShowing = !tableShowing;
});
/*Show dynamic pig attributes depending on the pig category*/
newPigCategory.addEventListener("change", function (e) {
    const category = newPigCategory.value;
    if (category == "Select a category") {
        hideAllDynamicPig();
        if (!saveButton.classList.contains("hidden")) {
            saveButton.classList.add("hidden");
        }
    }
    else {
        hideAllDynamicPig();
        if (!saveButton.classList.contains("hidden")) {
            saveButton.classList.add("hidden");
        }
        const dynamicPigRow1 = document.querySelector(`#${category}PigDynamic1`);
        const dynamicPigRow2 = document.querySelector(`#${category}PigDynamic2`);
        const dynamicPigInput = document.querySelector(`#${category}PigInput`);
        dynamicPigInput.toggleAttribute("required");
        dynamicPigRow1.classList.toggle("hidden");
        dynamicPigRow2.classList.toggle("hidden");
        saveButton.classList.remove('hidden');
    }
});
/*Hides all of the dynamic pig attributes*/
function hideAllDynamicPig() {
    const dynamicElements = document.querySelectorAll(".dynamic");
    for (let i = 0; i < dynamicElements.length; i++) {
        const currentElement = dynamicElements[i];
        if (!currentElement.classList.contains("hidden")) {
            currentElement.classList.add("hidden");
        }
        const dynamicPigInput = document.querySelector(`#${currentElement.id.slice(0, -11)}PigInput`);
        dynamicPigInput.removeAttribute("required");
    }
}
;
/*Used by pigs to capitalize string attributes*/
function capitalize(string) {
    let returnString = string.toLowerCase();
    returnString = returnString.charAt(0).toUpperCase() + returnString.slice(1);
    return returnString;
}
;
;
/*Specialized pig classes*/
class GeneralPig {
    constructor(name, category, breed, height, weight, personality) {
        this.name = capitalize(name);
        this.category = capitalize(category);
        this.breed = capitalize(breed);
        this.height = height;
        this.weight = weight;
        this.personality = capitalize(personality);
    }
}
class GreyPig extends GeneralPig {
    constructor(name, category, breed, height, weight, personality, swimmingScore) {
        super(name, category, breed, height, weight, personality);
        this.swimmingScore = Math.floor(swimmingScore);
    }
}
class ChestnutPig extends GeneralPig {
    constructor(name, category, breed, height, weight, personality, language) {
        super(name, category, breed, height, weight, personality);
        this.language = capitalize(language);
    }
}
class WhitePig extends GeneralPig {
    constructor(name, category, breed, height, weight, personality, runningScore) {
        super(name, category, breed, height, weight, personality);
        this.runningScore = Math.floor(runningScore);
    }
}
class BlackPig extends GeneralPig {
    constructor(name, category, breed, height, weight, personality, strengthScore) {
        super(name, category, breed, height, weight, personality);
        this.strengthScore = Math.floor(strengthScore);
    }
}

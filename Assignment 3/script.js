const addPigButton = document.querySelector("button");
const addPigTable = document.querySelector("#addPigTable");
const newPigCategory = document.querySelector("#newPigCategory");
const saveButton = document.querySelector("#saveButton");
const displayTableBody = document.querySelector("#displayTableBody");
/*Pull data from local storage*/
let whitePigListJSON = localStorage.getItem("whitePigArray");
let blackPigListJSON = localStorage.getItem("blackPigArray");
let greyPigListJSON = localStorage.getItem("greyPigArray");
let chestnutPigListJSON = localStorage.getItem("chestnutPigArray");
let whitePigList;
let blackPigList;
let greyPigList;
let chestnutPigList;
if (whitePigListJSON == null) {
    whitePigList = new Array;
}
else {
    whitePigList = JSON.parse(whitePigListJSON);
}
if (blackPigListJSON == null) {
    blackPigList = new Array;
}
else {
    blackPigList = JSON.parse(blackPigListJSON);
}
if (greyPigListJSON == null) {
    greyPigList = new Array;
}
else {
    greyPigList = JSON.parse(greyPigListJSON);
}
if (chestnutPigListJSON == null) {
    chestnutPigList = new Array;
}
else {
    chestnutPigList = JSON.parse(chestnutPigListJSON);
}
updateDisplay();
updateLocalStorage();
/*Function to update local storage*/
function updateLocalStorage() {
    localStorage.setItem("whitePigArray", JSON.stringify(whitePigList));
    localStorage.setItem("blackPigArray", JSON.stringify(blackPigList));
    localStorage.setItem("greyPigArray", JSON.stringify(greyPigList));
    localStorage.setItem("chestnutPigArray", JSON.stringify(chestnutPigList));
}
/*Function to update the display table*/
function updateDisplay() {
    for (let i = 0; i < whitePigList.length; i++) {
        let currentPig = whitePigList[i];
        const newRow = document.createElement("tr");
        const newNameCol = document.createElement("td");
        const newCategoryCol = document.createElement("td");
        const newMoreInfoCol = document.createElement("td");
        const moreInfoLink = document.createElement("a");
        const newDeleteCol = document.createElement("td");
        const deleteLink = document.createElement("a");
        deleteLink.textContent = "Delete Pig";
        deleteLink.classList.add("delete");
        moreInfoLink.classList.add("moreInfo");
        moreInfoLink.textContent = "More Info";
        moreInfoLink.setAttribute("href", "");
        deleteLink.setAttribute("href", "");
        newNameCol.textContent = currentPig.name;
        newCategoryCol.textContent = "White";
        newDeleteCol.appendChild(deleteLink);
        newMoreInfoCol.appendChild(moreInfoLink);
        newRow.appendChild(newNameCol);
        newRow.appendChild(newCategoryCol);
        newRow.appendChild(newMoreInfoCol);
        newRow.appendChild(newDeleteCol);
        displayTableBody.appendChild(newRow);
    }
    for (let i = 0; i < blackPigList.length; i++) {
        let currentPig = blackPigList[i];
        const newRow = document.createElement("tr");
        const newNameCol = document.createElement("td");
        const newCategoryCol = document.createElement("td");
        const newMoreInfoCol = document.createElement("td");
        const moreInfoLink = document.createElement("a");
        const newDeleteCol = document.createElement("td");
        const deleteLink = document.createElement("a");
        deleteLink.textContent = "Delete Pig";
        deleteLink.classList.add("delete");
        moreInfoLink.classList.add("moreInfo");
        moreInfoLink.textContent = "More Info";
        moreInfoLink.setAttribute("href", "");
        deleteLink.setAttribute("href", "");
        newNameCol.textContent = currentPig.name;
        newCategoryCol.textContent = "Black";
        newDeleteCol.appendChild(deleteLink);
        newMoreInfoCol.appendChild(moreInfoLink);
        newRow.appendChild(newNameCol);
        newRow.appendChild(newCategoryCol);
        newRow.appendChild(newMoreInfoCol);
        newRow.appendChild(newDeleteCol);
        displayTableBody.appendChild(newRow);
    }
    for (let i = 0; i < greyPigList.length; i++) {
        let currentPig = greyPigList[i];
        const newRow = document.createElement("tr");
        const newNameCol = document.createElement("td");
        const newCategoryCol = document.createElement("td");
        const newMoreInfoCol = document.createElement("td");
        const moreInfoLink = document.createElement("a");
        const newDeleteCol = document.createElement("td");
        const deleteLink = document.createElement("a");
        deleteLink.textContent = "Delete Pig";
        deleteLink.classList.add("delete");
        moreInfoLink.classList.add("moreInfo");
        moreInfoLink.textContent = "More Info";
        moreInfoLink.setAttribute("href", "");
        deleteLink.setAttribute("href", "");
        newNameCol.textContent = currentPig.name;
        newCategoryCol.textContent = "Grey";
        newDeleteCol.appendChild(deleteLink);
        newMoreInfoCol.appendChild(moreInfoLink);
        newRow.appendChild(newNameCol);
        newRow.appendChild(newCategoryCol);
        newRow.appendChild(newMoreInfoCol);
        newRow.appendChild(newDeleteCol);
        displayTableBody.appendChild(newRow);
    }
    for (let i = 0; i < chestnutPigList.length; i++) {
        let currentPig = chestnutPigList[i];
        const newRow = document.createElement("tr");
        const newNameCol = document.createElement("td");
        const newCategoryCol = document.createElement("td");
        const newMoreInfoCol = document.createElement("td");
        const moreInfoLink = document.createElement("a");
        const newDeleteCol = document.createElement("td");
        const deleteLink = document.createElement("a");
        deleteLink.textContent = "Delete Pig";
        deleteLink.classList.add("delete");
        moreInfoLink.classList.add("moreInfo");
        moreInfoLink.textContent = "More Info";
        moreInfoLink.setAttribute("href", "");
        deleteLink.setAttribute("href", "");
        newNameCol.textContent = currentPig.name;
        newCategoryCol.textContent = "Chestnut";
        newDeleteCol.appendChild(deleteLink);
        newMoreInfoCol.appendChild(moreInfoLink);
        newRow.appendChild(newNameCol);
        newRow.appendChild(newCategoryCol);
        newRow.appendChild(newMoreInfoCol);
        newRow.appendChild(newDeleteCol);
        displayTableBody.appendChild(newRow);
    }
}
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
        greyPigList.push(newGreyPig);
    }
    else if (newPigCategory == "chestnut") {
        let pigBreedInput = document.querySelector("#chestnutPigBreed");
        let newPigBreed = pigBreedInput.value;
        let pigLanguageInput = document.querySelector("#chestnutPigInput");
        let newPigLanguage = pigLanguageInput.value;
        let newChestNutPig = new ChestnutPig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigLanguage);
        chestnutPigList.push(newChestNutPig);
    }
    else if (newPigCategory == "white") {
        let pigBreedInput = document.querySelector("#whitePigBreed");
        let newPigBreed = pigBreedInput.value;
        let pigRunningInput = document.querySelector("#whitePigInput");
        let newPigRunningScore = parseInt(pigRunningInput.value);
        let newWhitePig = new WhitePig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigRunningScore);
        whitePigList.push(newWhitePig);
    }
    else {
        let pigBreedInput = document.querySelector("#blackPigBreed");
        let newPigBreed = pigBreedInput.value;
        let pigStrengthInput = document.querySelector("#blackPigInput");
        let newPigStrengthScore = parseInt(pigStrengthInput.value);
        let newBlackPig = new BlackPig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigStrengthScore);
        blackPigList.push(newBlackPig);
    }
    updateLocalStorage();
    updateDisplay();
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

const addPigButton: HTMLButtonElement = document.querySelector("button");
const addPigTable: HTMLTableElement = document.querySelector("#addPigTable");
const newPigCategory: HTMLSelectElement = document.querySelector("#newPigCategory");
const saveButton: HTMLButtonElement = document.querySelector("#saveButton");
let displayTableBody: HTMLTableSectionElement = document.querySelector("#displayTableBody");
const informationTables: HTMLDivElement = document.querySelector("#informationTables");
const displayTable: HTMLTableElement = document.querySelector("#displayTable");

/*Pull data from local storage*/
let whitePigListJSON: string = localStorage.getItem("whitePigArray");
let blackPigListJSON: string = localStorage.getItem("blackPigArray");
let greyPigListJSON: string = localStorage.getItem("greyPigArray");
let chestnutPigListJSON: string = localStorage.getItem("chestnutPigArray");
let whitePigList: Array<WhitePig>;
let blackPigList: Array<BlackPig>;
let greyPigList: Array<GreyPig>;
let chestnutPigList: Array<ChestnutPig>;
if(whitePigListJSON == null){
    whitePigList = new Array<WhitePig>;
}
else{
    whitePigList = JSON.parse(whitePigListJSON);
}
if(blackPigListJSON == null){
    blackPigList = new Array<BlackPig>;
}
else{
    blackPigList = JSON.parse(blackPigListJSON);
}
if(greyPigListJSON == null){
    greyPigList = new Array<GreyPig>;
}
else{
    greyPigList = JSON.parse(greyPigListJSON);
}
if(chestnutPigListJSON == null){
    chestnutPigList = new Array<ChestnutPig>;
}
else{
    chestnutPigList = JSON.parse(chestnutPigListJSON);
}

updateDisplay();
updateLocalStorage();

/*Function to update local storage*/
function updateLocalStorage(){
    localStorage.setItem("whitePigArray", JSON.stringify(whitePigList));
    localStorage.setItem("blackPigArray", JSON.stringify(blackPigList));
    localStorage.setItem("greyPigArray", JSON.stringify(greyPigList));
    localStorage.setItem("chestnutPigArray", JSON.stringify(chestnutPigList));
}

/*Function to update the display table*/
function updateDisplay(){   
    /*Delete the table*/
    displayTableBody.remove();
    displayTableBody = document.createElement("tbody");
    displayTableBody.id = "displayTableBody";
    displayTable.appendChild(displayTableBody);

    /*Recreate it with the new info*/
    for(let i: number = 0; i<whitePigList.length; i++){
        let currentPig: Pig = whitePigList[i];
        const newRow: HTMLTableRowElement = document.createElement("tr");
        const newNameCol: HTMLTableCellElement = document.createElement("td");
        const newCategoryCol: HTMLTableCellElement = document.createElement("td");
        const newMoreInfoCol: HTMLTableCellElement = document.createElement("td");
        const moreInfoLink: HTMLAnchorElement = document.createElement("a");
        const newDeleteCol: HTMLTableCellElement = document.createElement("td");
        const deleteLink: HTMLAnchorElement = document.createElement("a");
        deleteLink.textContent = "Delete Pig"
        deleteLink.classList.add("delete");
        moreInfoLink.classList.add("moreInfo");
        moreInfoLink.textContent = "More Info";
        newNameCol.textContent = currentPig.name;
        newCategoryCol.textContent = "White";
        newDeleteCol.appendChild(deleteLink);
        newMoreInfoCol.appendChild(moreInfoLink);
        newRow.appendChild(newNameCol);
        newRow.appendChild(newCategoryCol);
        newRow.appendChild(newMoreInfoCol);
        newRow.appendChild(newDeleteCol);
        deleteLink.id = i.toString() + "whitePigList";
        moreInfoLink.id = i.toString() + "whitePigList";
        displayTableBody.appendChild(newRow);
    }
    for(let i: number = 0; i<blackPigList.length; i++){
        let currentPig: Pig = blackPigList[i];
        const newRow: HTMLTableRowElement = document.createElement("tr");
        const newNameCol: HTMLTableCellElement = document.createElement("td");
        const newCategoryCol: HTMLTableCellElement = document.createElement("td");
        const newMoreInfoCol: HTMLTableCellElement = document.createElement("td");
        const moreInfoLink: HTMLAnchorElement = document.createElement("a");
        const newDeleteCol: HTMLTableCellElement = document.createElement("td");
        const deleteLink: HTMLAnchorElement = document.createElement("a");
        deleteLink.textContent = "Delete Pig"
        deleteLink.classList.add("delete");
        moreInfoLink.classList.add("moreInfo");
        moreInfoLink.textContent = "More Info";
        newNameCol.textContent = currentPig.name;
        newCategoryCol.textContent = "Black";
        newDeleteCol.appendChild(deleteLink);
        newMoreInfoCol.appendChild(moreInfoLink);
        newRow.appendChild(newNameCol);
        newRow.appendChild(newCategoryCol);
        newRow.appendChild(newMoreInfoCol);
        newRow.appendChild(newDeleteCol);
        deleteLink.id = i.toString() + "blackPigList";
        moreInfoLink.id = i.toString() + "blackPigList";
        displayTableBody.appendChild(newRow);
    }
    for(let i: number = 0; i<greyPigList.length; i++){
        let currentPig: Pig = greyPigList[i];
        const newRow: HTMLTableRowElement = document.createElement("tr");
        const newNameCol: HTMLTableCellElement = document.createElement("td");
        const newCategoryCol: HTMLTableCellElement = document.createElement("td");
        const newMoreInfoCol: HTMLTableCellElement = document.createElement("td");
        const moreInfoLink: HTMLAnchorElement = document.createElement("a");
        const newDeleteCol: HTMLTableCellElement = document.createElement("td");
        const deleteLink: HTMLAnchorElement = document.createElement("a");
        deleteLink.textContent = "Delete Pig"
        deleteLink.classList.add("delete");
        moreInfoLink.classList.add("moreInfo");
        moreInfoLink.textContent = "More Info";
        newNameCol.textContent = currentPig.name;
        newCategoryCol.textContent = "Grey";
        newDeleteCol.appendChild(deleteLink);
        newMoreInfoCol.appendChild(moreInfoLink);
        newRow.appendChild(newNameCol);
        newRow.appendChild(newCategoryCol);
        newRow.appendChild(newMoreInfoCol);
        newRow.appendChild(newDeleteCol);
        deleteLink.id = i.toString() + "greyPigList";
        moreInfoLink.id = i.toString() + "greyPigList";
        displayTableBody.appendChild(newRow);
    }
    for(let i: number = 0; i<chestnutPigList.length; i++){
        let currentPig: Pig = chestnutPigList[i];
        const newRow: HTMLTableRowElement = document.createElement("tr");
        const newNameCol: HTMLTableCellElement = document.createElement("td");
        const newCategoryCol: HTMLTableCellElement = document.createElement("td");
        const newMoreInfoCol: HTMLTableCellElement = document.createElement("td");
        const moreInfoLink: HTMLAnchorElement = document.createElement("a");
        const newDeleteCol: HTMLTableCellElement = document.createElement("td");
        const deleteLink: HTMLAnchorElement = document.createElement("a");
        deleteLink.textContent = "Delete Pig"
        deleteLink.classList.add("delete");
        moreInfoLink.classList.add("moreInfo");
        moreInfoLink.textContent = "More Info";
        newNameCol.textContent = currentPig.name;
        newCategoryCol.textContent = "Chestnut";
        newDeleteCol.appendChild(deleteLink);
        newMoreInfoCol.appendChild(moreInfoLink);
        newRow.appendChild(newNameCol);
        newRow.appendChild(newCategoryCol);
        newRow.appendChild(newMoreInfoCol);
        newRow.appendChild(newDeleteCol);
        deleteLink.id = i.toString() + "chestnutPigList";
        moreInfoLink.id = i.toString() + "chestnutPigList";
        displayTableBody.appendChild(newRow);
    }

    /*Add functionality to the delete pig link*/
    const deleteLinks: NodeList = document.querySelectorAll(".delete");
    deleteLinks.forEach(function(link: HTMLAnchorElement){
        link.addEventListener("click", function(e){
            let currentList: string = link.id.slice(1);
            let index: number = parseInt(link.id.charAt(0));
            console.log(currentList);
            if(currentList == "whitePigList"){
                let firstHalf = whitePigList.slice(0, index);
                let secondHalf = whitePigList.slice(index+1);
                whitePigList = firstHalf.concat(secondHalf);
            }
            else if(currentList == "blackPigList"){
                let firstHalf = blackPigList.slice(0, index);
                let secondHalf = blackPigList.slice(index+1);
                blackPigList = firstHalf.concat(secondHalf);
            }
            else if(currentList == "greyPigList"){
                let firstHalf = greyPigList.slice(0, index);
                let secondHalf = greyPigList.slice(index+1);
                greyPigList = firstHalf.concat(secondHalf);
            }
            else{
                let firstHalf = chestnutPigList.slice(0, index);
                let secondHalf = chestnutPigList.slice(index+1);
                chestnutPigList = firstHalf.concat(secondHalf);
            }
            updateDisplay();
            updateLocalStorage();
        });
    });

    /*Add functionality to the more info link*/
    const moreInfoLinks: NodeList = document.querySelectorAll(".moreInfo");
    moreInfoLinks.forEach(function(currentLink: HTMLAnchorElement){
        currentLink.addEventListener("click", function(e){
            let currentListName: string = currentLink.id.slice(1);
            let moreInfoTable: HTMLTableElement = document.querySelector("#moreInfoTable");
            let currentIndex: number = parseInt(currentLink.id.charAt(0));
            if(moreInfoTable != null){
                if(moreInfoTable.classList.contains(currentLink.id)){
                    informationTables.removeChild(moreInfoTable);
                    return;
                }
                informationTables.removeChild(moreInfoTable);
            }
            
            moreInfoTable = document.createElement("table");
            informationTables.appendChild(moreInfoTable);
            moreInfoTable.id = "moreInfoTable";
            moreInfoTable.classList.add(currentLink.id);
            if(currentListName == "whitePigList"){
                const nameRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(nameRow);
                const nameCol1: HTMLTableCellElement = document.createElement("td");
                nameCol1.textContent = "Name"
                nameCol1.classList.add("leftCol");
                nameRow.appendChild(nameCol1);
                const nameCol2: HTMLTableCellElement = document.createElement("td");
                nameCol2.textContent = whitePigList[currentIndex].name;
                nameRow.appendChild(nameCol2);

                const breedRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(breedRow);
                const breedCol1: HTMLTableCellElement = document.createElement("td");
                breedCol1.textContent = "Breed"
                breedRow.appendChild(breedCol1);
                breedCol1.classList.add("leftCol");
                const breedCol2: HTMLTableCellElement = document.createElement("td");
                breedCol2.textContent = whitePigList[currentIndex].breed;
                breedRow.appendChild(breedCol2);
                
                const heightRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(heightRow);
                const heightCol1: HTMLTableCellElement = document.createElement("td");
                heightCol1.textContent = "Height"
                heightRow.appendChild(heightCol1);
                heightCol1.classList.add("leftCol");
                const heightCol2: HTMLTableCellElement = document.createElement("td");
                heightCol2.textContent = whitePigList[currentIndex].height.toString();
                heightRow.appendChild(heightCol2);

                const weightRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(weightRow);
                const weightCol1: HTMLTableCellElement = document.createElement("td");
                weightCol1.textContent = "Weight"
                weightRow.appendChild(weightCol1);
                weightCol1.classList.add("leftCol");
                const weightCol2: HTMLTableCellElement = document.createElement("td");
                weightCol2.textContent = whitePigList[currentIndex].weight.toString();
                weightRow.appendChild(weightCol2);

                const personalityRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(personalityRow);
                const personalityCol1: HTMLTableCellElement = document.createElement("td");
                personalityCol1.textContent = "Personality"
                personalityRow.appendChild(personalityCol1);
                personalityCol1.classList.add("leftCol");
                const personalityCol2: HTMLTableCellElement = document.createElement("td");
                personalityCol2.textContent = whitePigList[currentIndex].personality;
                personalityRow.appendChild(personalityCol2);

                const runningRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(runningRow);
                const runningCol1: HTMLTableCellElement = document.createElement("td");
                runningCol1.textContent = "Running Score"
                runningCol1.classList.add("leftCol");
                runningRow.appendChild(runningCol1);
                const runningCol2: HTMLTableCellElement = document.createElement("td");
                runningCol2.textContent = whitePigList[currentIndex].runningScore.toString();
                runningRow.appendChild(runningCol2);
            }
            else if(currentListName == "blackPigList"){ 
                const nameRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(nameRow);
                const nameCol1: HTMLTableCellElement = document.createElement("td");
                nameCol1.textContent = "Name"
                nameRow.appendChild(nameCol1);
                nameCol1.classList.add("leftCol");
                const nameCol2: HTMLTableCellElement = document.createElement("td");
                nameCol2.textContent = blackPigList[currentIndex].name;
                nameRow.appendChild(nameCol2);

                const breedRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(breedRow);
                const breedCol1: HTMLTableCellElement = document.createElement("td");
                breedCol1.textContent = "Breed"
                breedRow.appendChild(breedCol1);
                breedCol1.classList.add("leftCol");
                const breedCol2: HTMLTableCellElement = document.createElement("td");
                breedCol2.textContent = blackPigList[currentIndex].breed;
                breedRow.appendChild(breedCol2);
                
                const heightRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(heightRow);
                const heightCol1: HTMLTableCellElement = document.createElement("td");
                heightCol1.textContent = "Height"
                heightRow.appendChild(heightCol1);
                heightCol1.classList.add("leftCol");
                const heightCol2: HTMLTableCellElement = document.createElement("td");
                heightCol2.textContent = blackPigList[currentIndex].height.toString();
                heightRow.appendChild(heightCol2);

                const weightRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(weightRow);
                const weightCol1: HTMLTableCellElement = document.createElement("td");
                weightCol1.textContent = "Weight"
                weightRow.appendChild(weightCol1);
                weightCol1.classList.add("leftCol");
                const weightCol2: HTMLTableCellElement = document.createElement("td");
                weightCol2.textContent = blackPigList[currentIndex].weight.toString();
                weightRow.appendChild(weightCol2);

                const personalityRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(personalityRow);
                const personalityCol1: HTMLTableCellElement = document.createElement("td");
                personalityCol1.textContent = "Personality"
                personalityRow.appendChild(personalityCol1);
                personalityCol1.classList.add("leftCol");
                const personalityCol2: HTMLTableCellElement = document.createElement("td");
                personalityCol2.textContent = blackPigList[currentIndex].personality;
                personalityRow.appendChild(personalityCol2);

                const strengthRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(strengthRow);
                const strengthCol1: HTMLTableCellElement = document.createElement("td");
                strengthCol1.textContent = "Strength Score"
                strengthCol1.classList.add("leftCol");
                strengthRow.appendChild(strengthCol1);
                const strengthCol2: HTMLTableCellElement = document.createElement("td");
                strengthCol2.textContent = blackPigList[currentIndex].strengthScore.toString();
                strengthRow.appendChild(strengthCol2);
            }
            else if(currentListName == "greyPigList"){
                const nameRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(nameRow);
                const nameCol1: HTMLTableCellElement = document.createElement("td");
                nameCol1.textContent = "Name"
                nameRow.appendChild(nameCol1);
                nameCol1.classList.add("leftCol");
                const nameCol2: HTMLTableCellElement = document.createElement("td");
                nameCol2.textContent = greyPigList[currentIndex].name;
                nameRow.appendChild(nameCol2);

                const breedRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(breedRow);
                const breedCol1: HTMLTableCellElement = document.createElement("td");
                breedCol1.textContent = "Breed"
                breedRow.appendChild(breedCol1);
                breedCol1.classList.add("leftCol");
                const breedCol2: HTMLTableCellElement = document.createElement("td");
                breedCol2.textContent = greyPigList[currentIndex].breed;
                breedRow.appendChild(breedCol2);
                
                const heightRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(heightRow);
                const heightCol1: HTMLTableCellElement = document.createElement("td");
                heightCol1.textContent = "Height"
                heightRow.appendChild(heightCol1);
                heightCol1.classList.add("leftCol");
                const heightCol2: HTMLTableCellElement = document.createElement("td");
                heightCol2.textContent = greyPigList[currentIndex].height.toString();
                heightRow.appendChild(heightCol2);

                const weightRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(weightRow);
                const weightCol1: HTMLTableCellElement = document.createElement("td");
                weightCol1.textContent = "Weight"
                weightRow.appendChild(weightCol1);
                weightCol1.classList.add("leftCol");
                const weightCol2: HTMLTableCellElement = document.createElement("td");
                weightCol2.textContent = greyPigList[currentIndex].weight.toString();
                weightRow.appendChild(weightCol2);

                const personalityRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(personalityRow);
                const personalityCol1: HTMLTableCellElement = document.createElement("td");
                personalityCol1.textContent = "Personality"
                personalityRow.appendChild(personalityCol1);
                personalityCol1.classList.add("leftCol");
                const personalityCol2: HTMLTableCellElement = document.createElement("td");
                personalityCol2.textContent = greyPigList[currentIndex].personality;
                personalityRow.appendChild(personalityCol2);

                const swimmingRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(swimmingRow);
                const swimmingCol1: HTMLTableCellElement = document.createElement("td");
                swimmingCol1.textContent = "Swimming Score"
                swimmingCol1.classList.add("leftCol");
                swimmingRow.appendChild(swimmingCol1);
                const swimmingCol2: HTMLTableCellElement = document.createElement("td");
                swimmingCol2.textContent = greyPigList[currentIndex].swimmingScore.toString();
                swimmingRow.appendChild(swimmingCol2);
            }
            else if(currentListName == "chestnutPigList"){
                const nameRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(nameRow);
                const nameCol1: HTMLTableCellElement = document.createElement("td");
                nameCol1.textContent = "Name"
                nameRow.appendChild(nameCol1);
                nameCol1.classList.add("leftCol");
                const nameCol2: HTMLTableCellElement = document.createElement("td");
                nameCol2.textContent = chestnutPigList[currentIndex].name;
                nameRow.appendChild(nameCol2);

                const breedRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(breedRow);
                const breedCol1: HTMLTableCellElement = document.createElement("td");
                breedCol1.textContent = "Breed"
                breedRow.appendChild(breedCol1);
                breedCol1.classList.add("leftCol");
                const breedCol2: HTMLTableCellElement = document.createElement("td");
                breedCol2.textContent = chestnutPigList[currentIndex].breed;
                breedRow.appendChild(breedCol2);
                
                const heightRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(heightRow);
                const heightCol1: HTMLTableCellElement = document.createElement("td");
                heightCol1.textContent = "Height"
                heightRow.appendChild(heightCol1);
                heightCol1.classList.add("leftCol");
                const heightCol2: HTMLTableCellElement = document.createElement("td");
                heightCol2.textContent = chestnutPigList[currentIndex].height.toString();
                heightRow.appendChild(heightCol2);

                const weightRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(weightRow);
                const weightCol1: HTMLTableCellElement = document.createElement("td");
                weightCol1.textContent = "Weight"
                weightRow.appendChild(weightCol1);
                weightCol1.classList.add("leftCol");
                const weightCol2: HTMLTableCellElement = document.createElement("td");
                weightCol2.textContent = chestnutPigList[currentIndex].weight.toString();
                weightRow.appendChild(weightCol2);

                const personalityRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(personalityRow);
                const personalityCol1: HTMLTableCellElement = document.createElement("td");
                personalityCol1.textContent = "Personality"
                personalityRow.appendChild(personalityCol1);
                personalityCol1.classList.add("leftCol");
                const personalityCol2: HTMLTableCellElement = document.createElement("td");
                personalityCol2.textContent = chestnutPigList[currentIndex].personality;
                personalityRow.appendChild(personalityCol2);

                const languageRow: HTMLTableRowElement = document.createElement("tr");
                moreInfoTable.appendChild(languageRow);
                const languageCol1: HTMLTableCellElement = document.createElement("td");
                languageCol1.textContent = "Language"
                languageCol1.classList.add("leftCol");
                languageRow.appendChild(languageCol1);
                const languageCol2: HTMLTableCellElement = document.createElement("td");
                languageCol2.textContent = chestnutPigList[currentIndex].language;
                languageRow.appendChild(languageCol2);
            }
        });
        
    });
}

/*Save button functionality*/
const newPigForm: HTMLFormElement = document.querySelector("#newPigForm");
newPigForm.addEventListener("submit", function(e){
    let pigNameInput: HTMLInputElement = document.querySelector("#newPigName");
    let newPigName: string = pigNameInput.value;
    let pigHeightInput: HTMLInputElement = document.querySelector("#newPigHeight");
    let newPigHeight: number = parseInt(pigHeightInput.value);
    let pigWeightInput: HTMLInputElement = document.querySelector("#newPigWeight");
    let newPigWeight: number = parseInt(pigWeightInput.value);
    let pigPersonalityInput: HTMLInputElement = document.querySelector("#newPigPersonality");
    let newPigPersonality: string = pigPersonalityInput.value;
    let pigCategorySelection: HTMLSelectElement = document.querySelector("#newPigCategory");
    let newPigCategory: string = pigCategorySelection.value;
    if(newPigCategory == "grey"){
        let pigBreedInput: HTMLSelectElement = document.querySelector("#greyPigBreed");
        let newPigBreed: string = pigBreedInput.value;
        let pigSwimmingInput: HTMLInputElement = document.querySelector("#greyPigInput");
        let newPigSwimmingScore: number = parseInt(pigSwimmingInput.value);
        let newGreyPig: GreyPig = new GreyPig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigSwimmingScore);
        greyPigList.push(newGreyPig);
    }    
    else if(newPigCategory == "chestnut"){
        let pigBreedInput: HTMLSelectElement = document.querySelector("#chestnutPigBreed");
        let newPigBreed: string = pigBreedInput.value;
        let pigLanguageInput: HTMLInputElement = document.querySelector("#chestnutPigInput");
        let newPigLanguage: string = pigLanguageInput.value;
        let newChestNutPig: ChestnutPig = new ChestnutPig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigLanguage);
        chestnutPigList.push(newChestNutPig);
    }
    else if(newPigCategory == "white"){
        let pigBreedInput: HTMLSelectElement = document.querySelector("#whitePigBreed");
        let newPigBreed: string = pigBreedInput.value;
        let pigRunningInput: HTMLInputElement = document.querySelector("#whitePigInput");
        let newPigRunningScore: number = parseInt(pigRunningInput.value);
        let newWhitePig: WhitePig = new WhitePig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigRunningScore);
        whitePigList.push(newWhitePig);
    } 
    else{
        let pigBreedInput: HTMLSelectElement = document.querySelector("#blackPigBreed");
        let newPigBreed: string = pigBreedInput.value;
        let pigStrengthInput: HTMLInputElement = document.querySelector("#blackPigInput");
        let newPigStrengthScore: number = parseInt(pigStrengthInput.value);
        let newBlackPig: BlackPig = new BlackPig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigStrengthScore);
        blackPigList.push(newBlackPig);
    }
    updateLocalStorage();
    updateDisplay();
});

/*Show the add pig table and hide it on addPigButton press*/
let tableShowing: boolean = false;
addPigButton.addEventListener('click', function(e){
    if(tableShowing){
        addPigTable.style.display =  'none';
    }
    else{
        addPigTable.style.display = 'table';
    }
    tableShowing = !tableShowing;
});

/*Show dynamic pig attributes depending on the pig category*/
newPigCategory.addEventListener("change", function(e){
    const category: string = newPigCategory.value;
    if(category == "Select a category"){
        hideAllDynamicPig();
        if(!saveButton.classList.contains("hidden")){
            saveButton.classList.add("hidden");
        }
    }
    else{
        hideAllDynamicPig();
        if(!saveButton.classList.contains("hidden")){
            saveButton.classList.add("hidden");
        }
        const dynamicPigRow1: HTMLTableRowElement = document.querySelector(`#${category}PigDynamic1`);
        const dynamicPigRow2: HTMLTableRowElement = document.querySelector(`#${category}PigDynamic2`);
        const dynamicPigInput: HTMLInputElement = document.querySelector(`#${category}PigInput`);
        dynamicPigInput.toggleAttribute("required");
        dynamicPigRow1.classList.toggle("hidden");
        dynamicPigRow2.classList.toggle("hidden");
        saveButton.classList.remove('hidden');
    }
});

/*Hides all of the dynamic pig attributes*/
function hideAllDynamicPig(){
    const dynamicElements: NodeListOf<HTMLTableRowElement> = document.querySelectorAll(".dynamic");
    for(let i: number = 0; i<dynamicElements.length; i++){
        const currentElement: HTMLTableRowElement = dynamicElements[i] as HTMLTableRowElement;
        if(!currentElement.classList.contains("hidden")){
            currentElement.classList.add("hidden");
        }
        const dynamicPigInput: HTMLInputElement = document.querySelector(`#${currentElement.id.slice(0, -11)}PigInput`);
        dynamicPigInput.removeAttribute("required");
    }
}; 

/*Used by pigs to capitalize string attributes*/
function capitalize(string:string):string{
    let returnString:string = string.toLowerCase();
    returnString = returnString.charAt(0).toUpperCase()+returnString.slice(1);
    return returnString;
};

/*Interface for a general pig*/
interface Pig{
    name: string;
    category: string;
    breed: string;
    height: number;
    weight: number;
    personality: string;
};

/*Specialized pig classes*/
abstract class GeneralPig implements Pig{
    name: string;
    category: string;
    breed: string;
    height: number;
    weight: number;
    personality: string;
    constructor(name:string, category:string, breed:string, height:number, weight:number, personality:string){
        this.name=capitalize(name);
        this.category=capitalize(category);
        this.breed=capitalize(breed);
        this.height=height;
        this.weight=weight;
        this.personality=capitalize(personality);
    }

}
class GreyPig extends GeneralPig{
    swimmingScore: number;
    constructor(name:string, category:string, breed:string, height:number, weight:number, personality:string, swimmingScore:number){
        super(name, category, breed, height, weight, personality);
        this.swimmingScore=Math.floor(swimmingScore);
    }
}
class ChestnutPig extends GeneralPig{
    language: string;
    constructor(name:string, category:string, breed:string, height:number, weight:number, personality:string, language:string){
        super(name, category, breed, height, weight, personality);
        this.language=capitalize(language);
    }
}
class WhitePig extends GeneralPig{
    runningScore: number;
    constructor(name:string, category:string, breed:string, height:number, weight:number, personality:string, runningScore:number){
        super(name, category, breed, height, weight, personality);
        this.runningScore=Math.floor(runningScore);
    }
}
class BlackPig extends GeneralPig{
    strengthScore: number;
    constructor(name:string, category:string, breed:string, height:number, weight:number, personality:string, strengthScore:number){
        super(name, category, breed, height, weight, personality);
        this.strengthScore=Math.floor(strengthScore);
    }
}

/*Issues:
1. Save button stays when the add pig form is minimized*/
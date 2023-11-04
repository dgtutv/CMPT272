const addPigButton: HTMLButtonElement = document.querySelector("button");
const addPigTable: HTMLTableElement = document.querySelector("#addPigTable");
const newPigCategory: HTMLSelectElement = document.querySelector("#newPigCategory");
const saveButton: HTMLButtonElement = document.querySelector("#saveButton");

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
        let newGreyPig: Object = new GreyPig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigSwimmingScore);
        localStorage.setItem("greyPig", JSON.stringify(newGreyPig));
    }    
    else if(newPigCategory == "chestnut"){
        let pigBreedInput: HTMLSelectElement = document.querySelector("#chestnutPigBreed");
        let newPigBreed: string = pigBreedInput.value;
        let pigLanguageInput: HTMLInputElement = document.querySelector("#chestnutPigInput");
        let newPigLanguage: string = pigLanguageInput.value;
        let newChestnutPig: Object = new ChestnutPig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigLanguage);
        localStorage.setItem("chestnutPig", JSON.stringify(newChestnutPig));
    }
    else if(newPigCategory == "white"){
        let pigBreedInput: HTMLSelectElement = document.querySelector("#whitePigBreed");
        let newPigBreed: string = pigBreedInput.value;
        let pigRunningInput: HTMLInputElement = document.querySelector("#whitePigInput");
        let newPigRunningScore: number = parseInt(pigRunningInput.value);
        let newWhitePig: Object = new GreyPig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigRunningScore);
        localStorage.setItem("whitePig", JSON.stringify(newWhitePig));
    } 
    else{
        let pigBreedInput: HTMLSelectElement = document.querySelector("#blackPigBreed");
        let newPigBreed: string = pigBreedInput.value;
        let pigStrengthInput: HTMLInputElement = document.querySelector("#blackPigInput");
        let newPigStrengthScore: number = parseInt(pigStrengthInput.value);
        let newBlackPig: Object = new GreyPig(newPigName, newPigCategory, newPigBreed, newPigHeight, newPigWeight, newPigPersonality, newPigStrengthScore);
        localStorage.setItem("blackPig", JSON.stringify(newBlackPig));
    }
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

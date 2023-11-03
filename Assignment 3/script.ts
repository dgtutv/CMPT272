const addPigButton: HTMLButtonElement = document.querySelector("button");
const addPigTable: HTMLTableElement = document.querySelector("#addPigTable");
const newPigCategory: HTMLSelectElement = document.querySelector("#newPigCategory");

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
    }
    else{
        hideAllDynamicPig();
        const dynamicPigAttribute1: HTMLTableRowElement = document.querySelector(`#${category}PigDynamic1`);
        const dynamicPigAttribute2: HTMLTableRowElement = document.querySelector(`#${category}PigDynamic2`);
        dynamicPigAttribute1.classList.toggle("hidden");
        dynamicPigAttribute2.classList.toggle("hidden");
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

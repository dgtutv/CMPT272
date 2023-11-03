const addPigButton: HTMLButtonElement = document.querySelector("button");
const addPigTable: HTMLTableElement = document.querySelector("#addPigTable");
const newPigCategory: HTMLSelectElement = document.querySelector("#newPigCategory");

const exactPinkPigColor: HTMLSelectElement = document.querySelector("#pinkColors");
const pinkColorDisplay: HTMLDivElement = document.querySelector("#selectedPinkColor");
exactPinkPigColor.addEventListener('change', function(e){
    let selectedColor: string = exactPinkPigColor.value;
    pinkColorDisplay.style.backgroundColor = selectedColor.toLowerCase();

});

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

newPigCategory.addEventListener("change", function(e){
    const category: string = newPigCategory.value;
    if(category == "Select a category"){
        hideAllDynamicPig();
    }
    else if(category == "black"){
        hideAllDynamicPig();
        const blackPigDynamic1: HTMLTableRowElement = document.querySelector("#blackPigDynamic1");
        const blackPigDynamic2: HTMLTableRowElement = document.querySelector("#blackPigDynamic2");
        blackPigDynamic1.classList.toggle("hidden");
        blackPigDynamic2.classList.toggle("hidden");
    }
    else if(category == "white"){
        hideAllDynamicPig();
        const whitePigDynamic1: HTMLTableRowElement = document.querySelector("#whitePigDynamic1");
        const whitePigDynamic2: HTMLTableRowElement = document.querySelector("#whitePigDynamic2");
        whitePigDynamic1.classList.toggle("hidden");
        whitePigDynamic2.classList.toggle("hidden");
    }
    else if(category == "pink"){
        hideAllDynamicPig();
        const pinkPigDynamic1: HTMLTableRowElement = document.querySelector("#pinkPigDynamic1");
        const pinkPigDynamic2: HTMLTableRowElement = document.querySelector("#pinkPigDynamic2");
        pinkPigDynamic1.classList.toggle("hidden");
        pinkPigDynamic2.classList.toggle("hidden");
    }
    else{
        hideAllDynamicPig();
        const rainbowPigDynamic1: HTMLTableRowElement = document.querySelector("#rainbowPigDynamic1");
        const rainbowPigDynamic2: HTMLTableRowElement = document.querySelector("#rainbowPigDynamic2");
        rainbowPigDynamic1.classList.toggle("hidden");
        rainbowPigDynamic2.classList.toggle("hidden");
    }
});

function hideAllDynamicPig(){
    const dynamicElements: NodeListOf<HTMLTableRowElement> = document.querySelectorAll(".dynamic");
    for(let i: number = 0; i<dynamicElements.length; i++){
        const currentElement: HTMLTableRowElement = dynamicElements[i] as HTMLTableRowElement;
        if(!currentElement.classList.contains("hidden")){
            currentElement.classList.add("hidden");
        }
    }
}; 
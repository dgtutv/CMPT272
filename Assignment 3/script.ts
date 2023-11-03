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
    else{
        hideAllDynamicPig();
        const dynamicPigAttribute1: HTMLTableRowElement = document.querySelector(`#${category}PigDynamic1`);
        const dynamicPigAttribute2: HTMLTableRowElement = document.querySelector(`#${category}PigDynamic2`);
        dynamicPigAttribute1.classList.toggle("hidden");
        dynamicPigAttribute2.classList.toggle("hidden");
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
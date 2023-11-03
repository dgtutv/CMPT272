const addPigButton: HTMLButtonElement = document.querySelector("button");
const addPigTable: HTMLTableElement = document.querySelector("#addPigTable");
const newPigCategory: HTMLSelectElement = document.querySelector("#newPigCategory");

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
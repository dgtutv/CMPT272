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
        const dynamicElements: NodeListOf<HTMLTableRowElement> = document.querySelectorAll(".dynamic");
        for(const element of dynamicElements){
            const currentElement: HTMLTableRowElement = element as HTMLTableRowElement;
            if(!currentElement.classList.contains("hidden")){
                currentElement.classList.add("hidden");
            }
        }
    }
    else if(category == "black"){
        const blackPigDynamic1: HTMLTableRowElement = document.querySelector("#blackPigDynamic1");
        const blackPigDynamic2: HTMLTableRowElement = document.querySelector("#blackPigDynamic2");
        blackPigDynamic1.classList.toggle("hidden");
        blackPigDynamic2.classList.toggle("hidden");
    }
});
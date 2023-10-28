const addPigButton = document.querySelector("button");
const addPigTable = document.querySelector("#addPigTable");
const newPigCategory = document.querySelector("#newPigCategory");
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
newPigCategory.addEventListener("change", function (e) {
    const category = newPigCategory.value;
    if (category == "Select a category") {
        const dynamicElements = document.querySelectorAll(".dynamic");
        for (const element of dynamicElements) {
            const currentElement = element;
            if (!currentElement.classList.contains("hidden")) {
                currentElement.classList.add("hidden");
            }
        }
    }
    else if (category == "black") {
        const blackPigDynamic1 = document.querySelector("#blackPigDynamic1");
        const blackPigDynamic2 = document.querySelector("#blackPigDynamic2");
        blackPigDynamic1.classList.toggle("hidden");
        blackPigDynamic2.classList.toggle("hidden");
    }
});

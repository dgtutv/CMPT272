var addPigButton = document.querySelector("button");
var addPigTable = document.querySelector("#addPigTable");
var newPigCategory = document.querySelector("#newPigCategory");
var exactPinkPigColor = document.querySelector("#pinkColors");
var pinkColorDisplay = document.querySelector("#selectedPinkColor");
exactPinkPigColor.addEventListener('change', function (e) {
    var selectedColor = exactPinkPigColor.value;
    pinkColorDisplay.style.backgroundColor = selectedColor.toLowerCase();
});
var tableShowing = false;
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
    var category = newPigCategory.value;
    if (category == "Select a category") {
        hideAllDynamicPig();
    }
    else if (category == "black") {
        hideAllDynamicPig();
        var blackPigDynamic1 = document.querySelector("#blackPigDynamic1");
        var blackPigDynamic2 = document.querySelector("#blackPigDynamic2");
        blackPigDynamic1.classList.toggle("hidden");
        blackPigDynamic2.classList.toggle("hidden");
    }
    else if (category == "white") {
        hideAllDynamicPig();
        var whitePigDynamic1 = document.querySelector("#whitePigDynamic1");
        var whitePigDynamic2 = document.querySelector("#whitePigDynamic2");
        whitePigDynamic1.classList.toggle("hidden");
        whitePigDynamic2.classList.toggle("hidden");
    }
    else if (category == "pink") {
        hideAllDynamicPig();
        var pinkPigDynamic1 = document.querySelector("#pinkPigDynamic1");
        var pinkPigDynamic2 = document.querySelector("#pinkPigDynamic2");
        pinkPigDynamic1.classList.toggle("hidden");
        pinkPigDynamic2.classList.toggle("hidden");
    }
    else {
        hideAllDynamicPig();
        var rainbowPigDynamic1 = document.querySelector("#rainbowPigDynamic1");
        var rainbowPigDynamic2 = document.querySelector("#rainbowPigDynamic2");
        rainbowPigDynamic1.classList.toggle("hidden");
        rainbowPigDynamic2.classList.toggle("hidden");
    }
});
function hideAllDynamicPig() {
    var dynamicElements = document.querySelectorAll(".dynamic");
    for (var i = 0; i < dynamicElements.length; i++) {
        var currentElement = dynamicElements[i];
        if (!currentElement.classList.contains("hidden")) {
            currentElement.classList.add("hidden");
        }
    }
}
;

var addPigButton = document.querySelector("button");
var addPigTable = document.querySelector("#addPigTable");
var newPigCategory = document.querySelector("#newPigCategory");
/*Sets the background and display colors for the exact color attribute for pink pigs*/
var exactPinkPigColor = document.querySelector("#pinkColors");
var pinkColorDisplay = document.querySelector("#selectedPinkColor");
exactPinkPigColor.addEventListener('change', function (e) {
    var selectedColor = exactPinkPigColor.value;
    pinkColorDisplay.style.backgroundColor = selectedColor.toLowerCase();
});
/*Show the add pig table and hide it on addPigButton press*/
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
/*Show dynamic pig attributes depending on the pig category*/
newPigCategory.addEventListener("change", function (e) {
    var category = newPigCategory.value;
    if (category == "Select a category") {
        hideAllDynamicPig();
    }
    else {
        hideAllDynamicPig();
        var dynamicPigAttribute1 = document.querySelector("#".concat(category, "PigDynamic1"));
        var dynamicPigAttribute2 = document.querySelector("#".concat(category, "PigDynamic2"));
        dynamicPigAttribute1.classList.toggle("hidden");
        dynamicPigAttribute2.classList.toggle("hidden");
    }
});
/*Hides all of the dynamic pig attributes*/
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

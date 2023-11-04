var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var addPigButton = document.querySelector("button");
var addPigTable = document.querySelector("#addPigTable");
var newPigCategory = document.querySelector("#newPigCategory");
var saveButton = document.querySelector("#saveButton");
/*Save button functionality, get mad at user if field is unspecified*/
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
        if (!saveButton.classList.contains("hidden")) {
            saveButton.classList.add("hidden");
        }
    }
    else {
        hideAllDynamicPig();
        if (!saveButton.classList.contains("hidden")) {
            saveButton.classList.add("hidden");
        }
        var dynamicPigAttribute1 = document.querySelector("#".concat(category, "PigDynamic1"));
        var dynamicPigAttribute2 = document.querySelector("#".concat(category, "PigDynamic2"));
        dynamicPigAttribute1.classList.toggle("hidden");
        dynamicPigAttribute2.classList.toggle("hidden");
        saveButton.classList.remove('hidden');
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
/*Used by pigs to capitalize string attributes*/
function capitalize(string) {
    var returnString = string.toLowerCase();
    returnString = returnString.charAt(0).toUpperCase() + returnString.slice(1);
    return returnString;
}
;
;
/*Specialized pig classes*/
var GeneralPig = /** @class */ (function () {
    function GeneralPig(name, category, breed, height, weight, personality) {
        this.name = capitalize(name);
        this.category = capitalize(category);
        this.breed = capitalize(breed);
        this.height = height;
        this.weight = weight;
        this.personality = capitalize(personality);
    }
    return GeneralPig;
}());
var GreyPig = /** @class */ (function (_super) {
    __extends(GreyPig, _super);
    function GreyPig(name, category, breed, height, weight, personality, swimmingScore) {
        var _this = _super.call(this, name, category, breed, height, weight, personality) || this;
        _this.swimmingScore = Math.floor(swimmingScore);
        return _this;
    }
    return GreyPig;
}(GeneralPig));
var ChestnutPig = /** @class */ (function (_super) {
    __extends(ChestnutPig, _super);
    function ChestnutPig(name, category, breed, height, weight, personality, language) {
        var _this = _super.call(this, name, category, breed, height, weight, personality) || this;
        _this.language = capitalize(language);
        return _this;
    }
    return ChestnutPig;
}(GeneralPig));
var WhitePig = /** @class */ (function (_super) {
    __extends(WhitePig, _super);
    function WhitePig(name, category, breed, height, weight, personality, runningScore) {
        var _this = _super.call(this, name, category, breed, height, weight, personality) || this;
        _this.runningScore = Math.floor(runningScore);
        return _this;
    }
    return WhitePig;
}(GeneralPig));
var BlackPig = /** @class */ (function (_super) {
    __extends(BlackPig, _super);
    function BlackPig(name, category, breed, height, weight, personality, strengthScore) {
        var _this = _super.call(this, name, category, breed, height, weight, personality) || this;
        _this.strengthScore = Math.floor(strengthScore);
        return _this;
    }
    return BlackPig;
}(GeneralPig));

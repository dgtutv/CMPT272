const button = document.querySelector("#fileInput");
const sliders = document.querySelectorAll(".sliders");
const sliderValueLabels = document.querySelectorAll(".sliderValue");
const bars = document.querySelectorAll(".bar");
let APlusList = [];
let AList = [];
let AMinusList = [];
let BPlusList = [];
let BList = [];
let BMinusList = [];
let CPlusList = [];
let CList = [];
let CMinusList = [];
let DList = [];
let FList = [];
let grades = [];

sliders.forEach(function(slider){
    slider.addEventListener('input', function(){
        gradeSorter();

        //Find and update the associated label
        const label = document.querySelector('label[for="'+slider.id+'Label"]');
        label.textContent = slider.value+"%";

        updateHistogram();
    })
});

button.addEventListener("change", function(event) {
    gradeReader(event, function() {
        gradeSorter();
        updateHistogram();
    });
});

function gradeReader(event, callback) {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function(event){
            const contents = event.target.result;

            //Take the data from the right column, after the first column
            const rows = contents.split('\r');
            for (let i = 1; i < rows.length; i++) {
                const columns = rows[i].split(",");
                //If the data file contains more than one column, get the second column
                if (columns.length >= 2) {
                    grades.push(columns[1]);
                }
            }
            callback(grades);
        }
        reader.readAsText(file); 
    }
}

function gradeSorter(){
    APlusList.length=0;
    AList.length=0;
    AMinusList.length=0;
    BPlusList.length=0;
    BList.length=0;
    BMinusList.length=0;
    CPlusList.length=0;
    CList.length=0;
    CMinusList.length=0;
    DList.length=0;
    FList.length=0;
    for(let i=0; i<grades.length; i++){
        let currentGrade = grades[i];
        if(sliders[1].value <= Number(currentGrade)){
            APlusList.push(currentGrade);
        }
        else if(sliders[2].value <= Number(currentGrade)){
            AList.push(currentGrade);
        }
        else if(sliders[3].value <= Number(currentGrade)){
            AMinusList.push(currentGrade);
        }
        else if(sliders[4].value <= Number(currentGrade)){
            BPlusList.push(currentGrade);
        }
        else if(sliders[5].value <= Number(currentGrade)){
            BList.push(currentGrade);
        }
        else if(sliders[6].value <= Number(currentGrade)){
            BMinusList.push(currentGrade);
        }
        else if(sliders[7].value <= Number(currentGrade)){
            CPlusList.push(currentGrade);
        }
        else if(sliders[8].value <= Number(currentGrade)){
            CList.push(currentGrade);
        }
        else if(sliders[9].value <= Number(currentGrade)){
            CMinusList.push(currentGrade);
        }
        else if(sliders[10].value <= Number(currentGrade)){
            DList.push(currentGrade);
        }
        else if(sliders[11].value <= Number(currentGrade)){
            FList.push(currentGrade);
        }
    }
}

function updateHistogram(){
    //Find the amount of values in the list with the most values
    let lists=[APlusList, AList, AMinusList, BPlusList, BList, BMinusList, CPlusList, CList, CMinusList, DList, FList]
    let mostValues=0;
    for(let i=0; i<lists.length; i++){
        let currentList = lists[i];
        if(currentList.length > mostValues){
            mostValues = currentList.length;
        }
    }

    let maxPercent = mostValues/grades.length + .05;
    //Update the width of the bars
    bars[0].style.width = ((APlusList.length/grades.length)*sliders[0].value)/maxPercent+1+"%";
    bars[1].style.width = ((AList.length/grades.length)*sliders[0].value)/maxPercent+1+"%";
    bars[2].style.width = ((AMinusList.length/grades.length)*sliders[0].value)/maxPercent+1+"%";
    bars[3].style.width = ((BPlusList.length/grades.length)*sliders[0].value)/maxPercent+1+"%";
    bars[4].style.width = ((BList.length/grades.length)*sliders[0].value)/maxPercent+1+"%";
    bars[5].style.width = ((BMinusList.length/grades.length)*sliders[0].value)/maxPercent+1+"%";
    bars[6].style.width = ((CPlusList.length/grades.length)*sliders[0].value)/maxPercent+1+"%";
    bars[7].style.width = ((CList.length/grades.length)*sliders[0].value)/maxPercent+1+"%";
    bars[8].style.width = ((CMinusList.length/grades.length)*sliders[0].value)/maxPercent+1+"%";
    bars[9].style.width = ((DList.length/grades.length)*sliders[0].value)/maxPercent+1+"%";
    bars[10].style.width = ((FList.length/grades.length)*sliders[0].value)/maxPercent+1+"%";
}
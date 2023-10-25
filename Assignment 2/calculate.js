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
            const grades = [];
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
    for(let i=0; i<grades.length; i++){
        let currentGrade = grades[i];
        if(sliders[1].value < Number(currentGrade)){
            APlusList.push(currentGrade);
        }
        else if(sliders[2].value < Number(currentGrade)){
            AList.push(currentGrade);
        }
        else if(sliders[3].value < Number(currentGrade)){
            APlusList.push(currentGrade);
        }
        else if(sliders[4].value < Number(currentGrade)){
            AMinusList.push(currentGrade);
        }
        else if(sliders[5].value < Number(currentGrade)){
            BPlusList.push(currentGrade);
        }
        else if(sliders[6].value < Number(currentGrade)){
            BList.push(currentGrade);
        }
        else if(sliders[7].value < Number(currentGrade)){
            BMinusList.push(currentGrade);
        }
        else if(sliders[8].value < Number(currentGrade)){
            CPlusList.push(currentGrade);
        }
        else if(sliders[9].value < Number(currentGrade)){
            CList.push(currentGrade);
        }
        else if(sliders[10].value < Number(currentGrade)){
            CMinusList.push(currentGrade);
        }
        else if(sliders[11].value < Number(currentGrade)){
            DList.push(currentGrade);
        }
        else{
            FList.push(currentGrade);
        }
    }
}

function updateHistogram(){
    bars[0].style.width = ((APlusList.length/grades.length)*100)+1+"%";
    console.log(((APlusList.length/grades.length)*100)+1+"%")

}
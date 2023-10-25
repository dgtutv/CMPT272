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

const button = document.querySelector("#fileInput");
const sliders = document.querySelectorAll(".slider");
button.addEventListener("change", function(event) {
    gradeReader(event, function(grades) {
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
        for(let i=0; i<grades.length; i++){
            let currentGrade = grades[i];
            if(sliders[1].value )
        }
    });
});
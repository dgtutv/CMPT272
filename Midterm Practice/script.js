let button = document.querySelector("button");
let card = document.querySelector("main");
let img = document.querySelector("img");
let additionalInfo = document.querySelector(".additionalInfo");
let sizeLarge = false;
button.addEventListener('click', function(e){
    if(sizeLarge){
        card.style.height="400px";
        img.classList.toggle("enlarged");
        additionalInfo.style.display="none";
    }
    else{
        card.style.height="500px";
        img.classList.toggle("enlarged");
        additionalInfo.style.display="block";
    }
    sizeLarge = !sizeLarge;
});


//Implementing the slider
let slides = document.querySelectorAll(".landing-slide-moja");
let current = 0;

let showSlide = ()=>{
    for(let i = 0; i < slides.length; i++){
          slides[i].style.display =  "none";
    }
    
    current++;
    if(current > slides.length){
          current = 1;
    }
    
    slides[current-1].style.display = "flex";

    setTimeout(showSlide,6000);
}
showSlide();

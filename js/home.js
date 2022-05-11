//dropdown implementation
let dropdown_trigger_btn = document.querySelector(".dropdown-trigger-btn");
let dropdown_box = document.querySelector(".dropdown");
dropdown_trigger_btn.addEventListener("mouseover", ()=>{
       dropdown_box.style.display = 'block';
})
dropdown_trigger_btn.addEventListener("mouseout", ()=>{
      dropdown_box.style.display = "none";
})

let mobile_btn = document.querySelector(".navTrigger");
let mobile_menu = document.querySelector("header nav");

mobile_btn.addEventListener("click", ()=>{
      mobile_btn.classList.toggle("active");
      mobile_menu.classList.toggle("show");
})





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

$(document).ready(function(){
      $(".partners-container").slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed: 3000,
          arrows: false,
          responsive: [
              {
                  breakpoint: 1000,
                  settings:{
                        slidesToShow: 4
                  }
              },
              {
                  breakpoint: 769,
                  settings: {
                      slidesToShow: 3
                  }
              },
              {
                  breakpoint: 480,
                  settings:{
                      slidesToShow: 2
                  }
              }
          ]
      })
  })
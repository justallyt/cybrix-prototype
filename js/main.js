const preloader = document.getElementById("preloader")

window.addEventListener("load", ()=>{
    setTimeout(()=>{
        preloader.classList.add("rollOut")
    }, 3000)
})

let mobile_btn = document.querySelector(".navTrigger");
let mobile_menu = document.querySelector("header nav");

mobile_btn.addEventListener("click", ()=>{
      mobile_btn.classList.toggle("active");
      mobile_menu.classList.toggle("show");
})

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



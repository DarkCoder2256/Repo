const Btn = document.querySelector(".card-body")
const learnMore = document.querySelector(".learnmore")

function show(){
 
    Btn.style.display = "block"
    learnMore.style.display = "none"

}
const AnotherNavbar = document.querySelector(".show")
const Menu = document.querySelector(".hamburger-menu")

Menu.addEventListener("click",function(){
   console.log("click")
    AnotherNavbar.classList.toggle("another-navbar")
      
})


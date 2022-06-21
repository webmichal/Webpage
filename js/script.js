const mainMenu = document.querySelector(".mainMenu");
const navArr = document.querySelector(".navArr");  
let slideNumber = 0;

mainMenu.addEventListener("click", (e) => {
    let el = e.target || window.event.target;

    if(el.tagName.toLowerCase() !== 'a') {
        mainMenu.classList.toggle("showMenu");
    }
});

navArr.addEventListener("click", (e) => {
    let el = e.target || window.event.target;
    const slides = document.querySelectorAll(".slide");

    el.classList.contains("arrRight")? slideNumber++: slideNumber--;
    
    slideNumber < 0? slideNumber = slides.length - 1: (slideNumber >= slides.length? slideNumber = 0: false);

    [...slides].map((el, index, arr) => {
        slideNumber === index? el.classList.add("active"): arr[index].classList.remove("active");
    });
});
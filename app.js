let btns = document.querySelectorAll(".circle button");
let circle =document.querySelector(".circle");
let main = document.querySelector(".main");
let nav = document.querySelector(".navbar");

btns[0].addEventListener("click", ()=>{
    circle.classList.add("rotate3");
    circle.classList.remove("rotate2");
    main.id="anti-rotate" ;
    nav.classList.remove("show");

})
btns[1].addEventListener("click", ()=>{
    circle.classList.add("rotate2");
    circle.classList.remove("rotate3");
    main.id="rotate" ;
    nav.classList.add("show");
})
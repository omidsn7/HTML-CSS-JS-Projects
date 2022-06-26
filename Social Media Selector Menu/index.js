const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListEl = document.querySelector(".social-lists");
const liEls = document.querySelectorAll(".social-lists li");

menuEl.addEventListener("click",()=>{
    HideAndRotate();
});

liEls.forEach((liel) =>{
    liel.addEventListener("click" , ()=>{
        menuTextEl.innerHTML = liel.innerHTML;
        HideAndRotate();
    });
});

function HideAndRotate(){
    socialListEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
}
const Hamburger = document.querySelector(".hamburger");
const Navlist = document.querySelector(".navinfo-class");

Hamburger.addEventListener("click" , ()=>
{
    Hamburger.classList.toggle("active")
    Navlist.classList.toggle("active")
})
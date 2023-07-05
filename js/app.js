const menuIcone = document.querySelector(".mobile-menu>svg")

menuIcone.addEventListener("click", function(){
    const nav = document.querySelector("header nav");
   nav.classList.add("active");
   nav.classList.add("full-opacity");
   document.querySelector(".mobile-menu-overflow").classList.add('d-block');
});



const closeIcone = document.querySelector("header .close .icon");

function closeMenu(){

    const nav = document.querySelector("header nav");
    nav.classList.remove("active");
    nav.classList.remove("full-opacity");
    document.querySelector(".mobile-menu-overflow").classList.remove('d-block');
};

closeIcone.addEventListener("click", closeMenu)

document
.querySelector(".mobile-menu-overflow")
.addEventListener('click', closeMenu)


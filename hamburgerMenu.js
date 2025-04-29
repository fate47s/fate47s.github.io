
document.addEventListener("DOMContentLoaded", function () {
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

// kollar så att båda elementen hamburger och navMenu är hittade, om den blir klickad, aktiveras tillståndet för hur menyn ser ut när active är toggled.
if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    });

// kollar om användaren fortfarande har aktiverat hamburger menyn, om inte sluta visa active delen av menyn
document.querySelectorAll(".navLink").forEach(n => 
        n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        })
    );
} 
});

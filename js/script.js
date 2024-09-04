const navBar = document.querySelector(".ri-menu-fill");
const respnsiveSideNav = document.querySelector(".navigation-responsive");
const cancelBtn = document.querySelector(".ri-close-large-fill")
const navLinks = document.querySelectorAll('a') ;
const active = document.querySelector('.active');

console.log(navLinks);

const currentPage = window.location.pathname.split("/").pop();
console.log(currentPage);

navLinks.forEach(link => {
    if(link.getAttribute("href") === currentPage) {
        link.classList.add("active")
    }
});


navBar.addEventListener("click", function() {
    respnsiveSideNav.style.display = "flex";
});

cancelBtn.addEventListener("click", function() {
    respnsiveSideNav.style.display = "none";
})
const toggleButon = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("main-nav")[0];

toggleButon.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  toggleButon.classList.toggle("active");
});

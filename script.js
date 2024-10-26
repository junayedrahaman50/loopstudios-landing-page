const mobileMenu = document.getElementById("icon_menu");
const navBar = document.getElementById("navbar");
const maskBg = document.getElementById("mask");

mobileMenu.addEventListener("click", () => {
  anime({
    targets: ".header-navbar",
    translateX: [-300, 0],
    easing: "easeInOutExpo",
  });

  mobileMenu.classList.toggle("icon_close");
  navBar.classList.toggle("show_menu");
  maskBg.classList.toggle("show_mask");
});

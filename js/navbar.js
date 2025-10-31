const navbar = () => {
  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".aliance_logo use");
  const mMenuToggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".mobile-menu");

  const lightModeOn = (event) => {
    navbar.classList.add("navbar-light");
    logo.href.baseVal = "images/sprite.svg#aliance_logo_main";
  };

  const lightModeOff = (event) => {
    navbar.classList.remove("navbar-light");
    logo.href.baseVal = "images/sprite.svg#aliance_logo_light";
  };

  const openMenu = (event) => {
    //openning the mobile menu
    menu.classList.add("is-open");
    mMenuToggle.classList.add("close-menu");
    document.body.style.overflow = "hidden"; //turning off rolling of the page
    lightModeOn();
  };

  const closeMenu = (event) => {
    //closing the mobile menu
    menu.classList.remove("is-open");
    mMenuToggle.classList.remove("close-menu");
    document.body.style.overflow = ""; //turning on rolling of the page
    lightModeOff();
  };

  window.addEventListener("scroll", () => {
    this.scrollY > 1 ? lightModeOn() : lightModeOff();
  });

  mMenuToggle.addEventListener("click", (event) => {
    event.preventDefault();
    menu.classList.contains("is-open") ? closeMenu() : openMenu();
  });
};

navbar();

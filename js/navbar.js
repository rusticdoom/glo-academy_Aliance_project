const navbar = () => {
  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".aliance_logo use");
  const mMenuToggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".mobile-menu");

  window.addEventListener("scroll", () => {
    if (this.scrollY > 1) {
      navbar.classList.add("navbar-light");
      logo.href.baseVal = "images/sprite.svg#aliance_logo_main";
    } else {
      navbar.classList.remove("navbar-light");
      logo.href.baseVal = "images/sprite.svg#aliance_logo_light";
    }
  });

  mMenuToggle.addEventListener("click", (event) => {
    event.preventDefault();
    menu.classList.toggle("is-open");
  });
};

navbar();

const navbar = () => {
  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".aliance_logo use");

  window.addEventListener("scroll", () => {
    if (this.scrollY > 1) {
      navbar.classList.add("navbar-light");
      logo.href.baseVal = "images/sprite.svg#aliance_logo_main";
    } else {
      navbar.classList.remove("navbar-light");
      logo.href.baseVal = "images/sprite.svg#aliance_logo_light";
    }
  });
};

navbar();

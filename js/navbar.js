const navbar = () => {
  const navbar = document.querySelector(".navbar");
  const logo_light = navbar.querySelector(".navbar .header-logo .logo-light");
  const logo_main = navbar.querySelector(".navbar .header-logo .logo-main");

  window.addEventListener("scroll", () => {
    if (this.scrollY > 1) {
      navbar.classList.add("navbar-light");
      logo_light.style.display = "none";
      logo_main.style.display = "inline";
    } else {
      navbar.classList.remove("navbar-light");
      logo_light.style.display = "inline";
      logo_main.style.display = "none";
    }
  });
};

navbar();

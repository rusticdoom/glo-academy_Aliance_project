const swiperFeatures = new Swiper(".header-features-slider", {
  // Optional parameters
  direction: "horizontal",
  speed: 400,
  autoHeight: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".header-features-button-next",
    prevEl: ".header-features-button-prev",
  },

  breakpoints: {
    310: {
      slidesPerView: 2,
      // centeredSlides: true,
      // slidesOffsetBefore: -100,
    },
    460: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

const swiperSteps = new Swiper(".steps-slider", {
  // Optional parameters
  direction: "horizontal",
  speed: 400,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".steps-button-next",
    prevEl: ".steps-button-prev",
  },

  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
  },
});

const swiperBlog = new Swiper(".blog-slider", {
  // Optional parameters
  direction: "horizontal",
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: ".blog-button-next",
    prevEl: ".blog-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});

//modal
const modal = document.querySelector(".modal");
const modalDialog = document.querySelector(".modal-dialog");
document.addEventListener("click", (event) => {
  if (
    event.target.dataset.toggle == "modal" ||
    event.target.parentNode.dataset.toggle == "modal" ||
    (!event.composedPath().includes(modalDialog) &&
      modal.classList.contains("is-open"))
  ) {
    event.preventDefault();
    modal.classList.toggle("is-open");
  }
});
document.addEventListener("keyup", (event) => {
  if (event.key == "Escape" && modal.classList.contains("is-open")) {
    modal.classList.toggle("is-open");
  }
});

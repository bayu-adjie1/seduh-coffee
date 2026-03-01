// Gallery Efek

let card = document.querySelectorAll(".card");

for (let n = 0; n < card.length; n++) {
  card[n].addEventListener("mouseenter", function (e) {
    const info = e.currentTarget.querySelector(".info-gallery");
    const gambar = e.currentTarget.querySelector(".gallery-img");
    info.classList.add("g-card-active");
    gambar.classList.add("img-scale");
  });
  card[n].addEventListener("mouseleave", function (e) {
    const info = e.currentTarget.querySelector(".info-gallery");
    const gambar = e.currentTarget.querySelector(".gallery-img");
    info.classList.remove("g-card-active");
    gambar.classList.remove("img-scale");
  });
}

// Testimoni Slider

new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Navbar Responsive

const up = document.querySelector(".up");
const bottom = document.querySelector(".bottom");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navigation")

burger.addEventListener("click", function () {
  up.classList.toggle("up-rotate")
  bottom.classList.toggle("bottom-rotate")
  nav.classList.toggle("show")
});

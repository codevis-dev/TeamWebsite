// variable to keep track of current tile
let slideIndex = 1;

// toggle navbar on mobile style
const openNav = () => {
  document.getElementById("navbar").classList.toggle("navbar-toggle");
  document.getElementById("navigation").classList.toggle("visibility");
};

// method to change between different tiles for mobile
/* function showSlides(n, kind) {
  let i;
  let slides = document.getElementsByClassName(`${kind}-slide`);
  let dots = document.getElementsByClassName(`${kind}-dot`);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n, kind) {
  showSlides((slideIndex = n), kind);
} */

// method to detect small screen in js with media query
/* const x = window.matchMedia("(max-width: 780px)");
if (x.matches) {
  showSlides(slideIndex, "project");
  showSlides(slideIndex, "benefit");
}
x.onchange = (e) => {
  if (e.matches) {
    showSlides(slideIndex, "project");
    showSlides(slideIndex, "benefit");
  } else {
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "flex";
    }
  }
};
 */

const toggleDots = (n, kind) => {
  const dots = document.getElementsByClassName(`${kind}-dot`);
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[n].className += " active";
};

const scrollHandler = (e) => {
  if (e.target.id == "project-carousel") {
    toggleDots(Math.floor(e.target.scrollLeft / 200), "project");
  } else {
    toggleDots(Math.floor(e.target.scrollLeft / 240), "benefit");
  }
};
const projectCarousel = document.getElementById("project-carousel");
const benefitCarousel = document.getElementById("benefit-carousel");

projectCarousel.addEventListener("scroll", scrollHandler);
benefitCarousel.addEventListener("scroll", scrollHandler);

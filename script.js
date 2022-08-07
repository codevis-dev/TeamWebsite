// variable to keep track of current tile
let slideIndex = 1;

// toggle navbar on mobile style
const openNav = () => {
  document.getElementById("navbar").classList.toggle("navbar-toggle");
  document.getElementById("navigation").classList.toggle("visibility");
};

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

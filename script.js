// variable to keep track of current tile
let slideIndex = 1;

// toggle navbar on mobile style
const openNav = () => {
  document.getElementById("navbar").classList.toggle("navbar-toggle");
  document.getElementById("navigation").classList.toggle("visibility");
};

// method to change between different tiles for mobile
function showSlides(n, kind) {
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
}

// method to detect small screen in js with media query
const x = window.matchMedia("(max-width: 780px)");
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
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor =
      "hsla(214, 17%, 8%, 0.8)";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
  if (currentScrollPos == 0) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor =
      "hsla(214, 17%, 8%, 0)";
  }
};

let loader = document.getElementById("preloader");
let gifloader = document.getElementById("preloadergif");

window.addEventListener("load", function () {
  loader.classList.add("loaded");
  gifloader.classList.add("gifloaded");
});

const kachel = document.querySelectorAll(".kachel");
for (let i = 0; i < kachel.length; i++) {
  kachel[i].classList.remove("kachel-transition");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      for (let i = 0; i < kachel.length; i++) {
        kachel[i].classList.add("kachel-transition");
      }
      return;
    }
    for (let i = 0; i < kachel.length; i++) {
      kachel[i].classList.remove("kachel-transition");
    }
  });
});

observer.observe(document.querySelector(".kachel-col1"));
observer.observe(document.querySelector(".kachel-col2"));

const catch1phrase = document.querySelector(".catch1");
catch1phrase.classList.remove("catch-transition");

const catch1observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const catch1phrase = entry.target.querySelector(".catch1");
    if (entry.isIntersecting) {
      catch1phrase.classList.add("catch-transition");
      return;
    }
    catch1phrase.classList.remove("catch-transition");
  });
});

catch1observer.observe(document.querySelector(".kachel-col1-catch1"));
const catch2phrase = document.querySelector(".catch2");
catch2phrase.classList.remove("catch-transition");

const catch2observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const catch2phrase = entry.target.querySelector(".catch2");
    if (entry.isIntersecting) {
      catch2phrase.classList.add("catch-transition");
      return;
    }
    catch2phrase.classList.remove("catch-transition");
  });
});

catch2observer.observe(document.querySelector(".kachel-col1-catch2"));

const catch3phrase = document.querySelector(".catch3");
catch3phrase.classList.remove("catch-transition");

const catch3observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const catch3phrase = entry.target.querySelector(".catch3");
    if (entry.isIntersecting) {
      catch3phrase.classList.add("catch-transition");
      return;
    }
    catch3phrase.classList.remove("catch-transition");
  });
});

catch3observer.observe(document.querySelector(".kachel-col1-catch3"));

const button = document.querySelector(".button-scta");
button.classList.remove("button-transition");

const buttonObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      button.classList.add("button-transition");
      return;
    }
    button.classList.remove("button-transition");
  });
});

buttonObserver.observe(document.querySelector(".button-container"));

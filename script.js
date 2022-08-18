// variable to keep track of current tile
let slideIndex = 1;

// toggle navbar on mobile style
const navigation = document.querySelector(".navigation");
const openNav = () => {
  let visible;
  const navigation = document.getElementById("navigation");
  visible = document.getElementById("navbar").classList.toggle("navbar-toggle");
  if (visible) {
    navigation.style.animation = "navanimation 1s forwards";
    document.querySelector("body").classList.add("overflow");
  }
  if (!visible) {
    navigation.style.animation = "backanimation 1.6s forwards";
    document.querySelector("body").classList.remove("overflow");
  }
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
    toggleDots(Math.floor(e.target.scrollLeft / 210), "project");
  } else {
    toggleDots(Math.floor(e.target.scrollLeft / 260), "benefit");
  }
};

let menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

let prevScrollpos = window.pageYOffset;
let navbar = document.getElementById("navbar");

let width = window.innerWidth;
if (width < 780) {
  addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset;
    let width = window.innerWidth;
    if (width < 780) {
      return;
    }
    console.log(currentScrollPos, prevScrollpos);
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
      navbar.style.backgroundColor = "hsla(214, 17%, 8%, 0.8)";
    } else {
      navbar.style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
    if (currentScrollPos == 0) {
      navbar.style.backgroundColor = "hsla(214, 17%, 8%, 0)";
      navbar.style.top = "0";
    }
  });
}

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos, prevScrollpos);
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
    navbar.style.backgroundColor = "hsla(214, 17%, 8%, 0.8)";
  } else {
    navbar.style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
  if (currentScrollPos == 0) {
    navbar.style.backgroundColor = "hsla(214, 17%, 8%, 0)";
    navbar.style.top = "0";
  }
};

let loader = document.getElementById("preloader");
let gifloader = document.getElementById("preloadergif");

window.addEventListener("load", function () {
  loader?.classList.add("loaded");
  gifloader?.classList.add("gifloaded");
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

const headline = document.querySelector(".headline");
headline.classList.remove("headline-transition");

const headlineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const headline = entry.target.querySelector(".headline");
    if (entry.isIntersecting) {
      headline.classList.add("headline-transition");
      return;
    }
    headline.classList.remove("headline-transition");
  });
});

headlineObserver.observe(document.querySelector(".process"));

const step1 = document.querySelector(".right1");
step1.classList.remove("right-transition");

const step1Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const step1 = entry.target.querySelector(".right1");
    if (entry.isIntersecting) {
      step1.classList.add("right-transition");
      return;
    }
    step1.classList.remove("right-transition");
  });
});

step1Observer.observe(document.querySelector(".process-step1"));

const step2 = document.querySelector(".left1");
step2.classList.remove("left-transition");

const step2Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const step2 = entry.target.querySelector(".left1");
    if (entry.isIntersecting) {
      step2.classList.add("left-transition");
      return;
    }
    step2.classList.remove("left-transition");
  });
});

step2Observer.observe(document.querySelector(".process-step2"));

const step3 = document.querySelector(".right2");
step3.classList.remove("right-transition");

const step3Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const step3 = entry.target.querySelector(".right2");
    if (entry.isIntersecting) {
      step3.classList.add("right-transition");
      return;
    }
    step3.classList.remove("right-transition");
  });
});

step3Observer.observe(document.querySelector(".process-step3"));

const step4 = document.querySelector(".left2");
step4.classList.remove("left-transition");

const step4Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const step4 = entry.target.querySelector(".left2");
    if (entry.isIntersecting) {
      step4.classList.add("left-transition");
      return;
    }
    step4.classList.remove("left-transition");
  });
});

step4Observer.observe(document.querySelector(".process-step-last"));

const projectCarousel = document.getElementById("project-carousel");
const benefitCarousel = document.getElementById("benefit-carousel");

projectCarousel.addEventListener("scroll", scrollHandler);
benefitCarousel.addEventListener("scroll", scrollHandler);

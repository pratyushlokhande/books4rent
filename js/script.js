const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

window.addEventListener("load", function () {
  const loader = document.querySelector("#loader");
  const load_wrapper = document.querySelector(".load-wrapper");
  gsap.to(loader, { translateY: "-100%", duration: 1, ease: "power2.out" });
  gsap.to(load_wrapper, { translateY: "-100%", duration: 1, ease: "power2.out" }, "-=0.75");
  gsap.from(".sub-title", {
    translateX: "-100%",
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 1,
  });
  gsap.from(".main-title", {translateY: 100, opacity: 0, duration: 1, ease: "power2.out", delay: 1});
  gsap.from(".main-title span", {rotateY: 180, yoyo: true, duration: 1, ease: "power2.out"});
  gsap.from(".home-page-content .bar", {
    scale: 0,
    duration: 1,
    ease: "power2.out",
    delay: 2,
  });
  gsap.from(".button-container", {translateY: 100, opacity: 0, duration: 1, ease: "power2.out", delay: 1.5});
  gsap.from("nav", {translateY: "-100%", duration: 1, ease: "power2.out", delay: 1.5});
  gsap.from(".buy-sell", {translateY: 100, opacity: 0, duration: 1, ease: "power2.out", delay: 1.5});
  gsap.from(".form-group", {opacity: 0, duration: 1, ease: "power2.out", delay: 2});
  gsap.from(".address", {opacity: 0, duration: 1, ease: "power2.out", delay: 2});
})

// Smooth Scrolling
// Scrollbar.init(document.querySelector("#smooth-scroll"));

window.addEventListener('wheel', (e) => {
  if (e.deltaY < 0) {
    gsap.to("nav", { translateY: "0%", duration: 0.5, ease: "power2.out" });
  } else {
    gsap.to("nav", { translateY: "-100%", duration: 1, ease: "power2.out"});
  }
})

const hamburger = document.querySelector(".hamburger");

let navActive = false;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  
  if(!navActive) {
    let tl = gsap.timeline();
    tl.to(".nav-wrap", { translateY: "0%", duration: 1, ease: "power2.out" })
      .to(
        "#secondary-nav-links",
        { translateY: "0%", duration: 1, ease: "power2.out" },
        "-=0.75"
      )
      .from("#secondary-nav-links ul li a", {
        translateX: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
      });
    navActive = true;
  } else {
    let tl = gsap.timeline();
    tl
      .to("#secondary-nav-links", {
        translateY: "-100%",
        duration: 1,
        ease: "power2.out",
      })
      .to(
        ".nav-wrap",
        { translateY: "-100%", duration: 1, ease: "power2.out" },
        "-=0.75"
      );
    navActive = false;
  }
})

// smooth scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});


const submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let tl = gsap.timeline();

  tl
    .to(".modal", { translateY: "0%", duration: 1, ease: "Expo.easeInOut" })
    .to(".modal-container", { translateY: "0%", opacity: 1, duration: 1, ease: "Expo.easeInOut" })
})

const close = document.querySelector("#close");

close.addEventListener("click", (e) => {
  document.getElementById("main-form").reset();
  e.preventDefault();
  let tl = gsap.timeline();
  tl
    .to(".modal-container", { translateY: "100%", opacity: 0, duration: 1, ease: "Expo.easeInOut" })
    .to(".modal", { translateY: "-100%", duration: 1, ease: "Expo.easeInOut" });
})
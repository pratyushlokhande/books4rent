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

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
      const firebaseConfig = {
        apiKey: "AIzaSyDqhQEVd4tgYFguNN5Abnmu978EdOoBh4w",
        authDomain: "sell-books-data.firebaseapp.com",
        projectId: "sell-books-data",
        storageBucket: "sell-books-data.appspot.com",
        messagingSenderId: "731001906314",
        appId: "1:731001906314:web:6122b07efbdf009a427973"
      };
      firebase.initializeApp(firebaseConfig);
      const db = firebase.firestore();
      console.log(db)
  
  console.log( "ready!" );


    var buy = document.getElementById('buy');
    var sell = document.getElementById('sell');
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var house_no = document.getElementById('house-no');
    var address = document.getElementById('address');
    var landmark = document.getElementById('landmark');
    var city = document.getElementById('city');
    var standard = document.getElementById('standard');
    var board = document.getElementById('board');


    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        db.collection("books-data").doc().set({
            buy: buy.value,
            sell: sell.value,
            name: name.value,
            phone: phone.value,
            house_no: house_no.value,
            address: address.value,
            landmark: landmark.value,
            city: city.value,
            standard: standard.value,
            board: board.value,
            books: ""
        });
    });
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
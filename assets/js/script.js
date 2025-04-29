'use strict';

/* navbar toggle */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/* toggle the navbar when click any navbar link */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

/* back to top & header */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/* Portfolio cardsContainer */

let currentIndex = 0;
const cardsContainer = document.querySelector(".cards");
const totalCards = document.querySelectorAll(".card").length;

function moveCard(direction) {
    currentIndex += direction;

    // 🔄 Infinite Looping Logic
    if (currentIndex < 0) {
        currentIndex = totalCards - 1; // Jump to last item when clicking '<' on first item
    } else if (currentIndex >= totalCards) {
        currentIndex = 0; // Jump to first item when clicking '>' on last item
    }

    cardsContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// skills.js

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }

  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

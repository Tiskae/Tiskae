"use strict";

/////////////////////////////////////////////////////////////////////////////
//////// Variables
const introPageSkillBoxes = document.querySelectorAll(".header__skill-box");
const maxIntroPageCounter = introPageSkillBoxes.length;
const navTabs = document.querySelectorAll(".nav__tab");
const allSection = document.querySelectorAll(".section");
const introSkillsDuration = 2400; //3 seconds, the rest for transitioning
let introPageCounter = 0;

///////////////////////////////////////////////
// Header skill boxes switcher
maxIntroPageCounter;
const switchIntroPageSkillBoxes = function () {
  introPageSkillBoxes.forEach((el) =>
    el.classList.remove("header__skill-box--active")
  );

  introPageSkillBoxes[introPageCounter].classList.add(
    "header__skill-box--active"
  );

  if (introPageCounter === maxIntroPageCounter - 1) {
    introPageCounter = 0;
    return;
  }

  if (introPageCounter < maxIntroPageCounter) {
    introPageCounter++;
    return;
  }
};

switchIntroPageSkillBoxes();

setInterval(() => {
  switchIntroPageSkillBoxes();
}, introSkillsDuration);

///////////////////////////////////////////////
// Side navigation tab activator
const switchActiveNavTab = function (els) {
  // Removing the active tabs for all tabs
  navTabs.forEach((e) => e.classList.remove("active"));
  const el = els[0];
  // Adding active class to the visible section
  el.target.classList.add("active");

  const tab = document.querySelector(`.nav__tab--${el.target.dataset.section}`);
  const footerSection = document.querySelector(".section-footer");
  if (!tab) {
    document.querySelector(".nav__tab--works").classList.add("active");
  } else if (el.isIntersecting) {
    tab.classList.add("active");
  } else if (!el.isIntersecting) {
    tab.classList.remove("active");
  }

  console.log([...navTabs].every((tab) => !tab.classList.contains("active")));
};

// Sections observer
const sectionObserver = new IntersectionObserver(switchActiveNavTab, {
  root: null,
  threshold: 0.55,
});

allSection.forEach(
  (sect) =>
    !sect.classList.contains("section-works") && sectionObserver.observe(sect)
);

const workSect = document.querySelector(".section-works");
const works = document.querySelectorAll(".work");
const workSectionObserver = new IntersectionObserver(switchActiveNavTab, {
  root: null,
  threshold: 0.9,
});

works.forEach((w) => workSectionObserver.observe(w));

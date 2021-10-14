window.addEventListener("load", (event) => {
  // const pathName = window.location.pathname;
  const hamburgers = document.querySelectorAll(".hamburger");
  const hamburgerSmallScreen = document.querySelector(
    ".hamburger:last-of-type"
  );
  const hamburgerLargeScreen = document.querySelector(
    ".hamburger:first-of-type"
  );
  const informationHeader = document.querySelector("#information-header");
  const wrapper = document.querySelector("#wrapper");
  const navMenu = document.querySelector("#rightNav");
  const navMenuLargeScreen = document.querySelector(".nav-menu-large-screen");
  const mainContent = document.querySelector("#mainContent");
  // const scrollContainer = document.getElementById("main-content-body");
  const scrollContainer = document.getElementById("scrollingSegment");
  const navBar = document.querySelector("#header");
  const logo = document.querySelector("#header .logo");
  const footer = document.querySelector("#footer");
  const careersApplicationBtn = document.querySelector(
    "#careers-application-btn"
  );
  const careersApplication = document.querySelector("#career-application-form");
  // const locationGallery = document.querySelector('.gallery');

  hamburgerSmallScreen.addEventListener("click", function (e) {
    hamburgerSmallScreen.classList.toggle("hamburger-opened");
    hamburgerLargeScreen.classList.toggle("hamburger-opened");
    informationHeader.classList.toggle("hamburger-opened");
    wrapper.classList.toggle("hamburger-opened");
    navMenu.classList.toggle("hamburger-opened");
    navBar.classList.toggle("hamburger-opened");
    mainContent.classList.toggle("hamburger-opened");
    logo.classList.toggle("hamburger-opened");
    footer.classList.toggle("hamburger-opened");
    navMenuLargeScreen.classList.toggle("hidden");
  });

  hamburgerLargeScreen.addEventListener("click", function (e) {
    hamburgerSmallScreen.classList.toggle("hamburger-opened");
    hamburgerLargeScreen.classList.toggle("hamburger-opened");
    informationHeader.classList.toggle("hamburger-opened");
    wrapper.classList.toggle("hamburger-opened");
    navMenu.classList.toggle("hamburger-opened");
    navBar.classList.toggle("hamburger-opened");
    mainContent.classList.toggle("hamburger-opened");
    logo.classList.toggle("hamburger-opened");
    footer.classList.toggle("hamburger-opened");
    navMenuLargeScreen.classList.toggle("hidden");
  });

  mainContent.addEventListener("click", function (e) {
    hamburgerSmallScreen.classList.remove("hamburger-opened");
    hamburgerLargeScreen.classList.remove("hamburger-opened");
    mainContent.classList.remove("hamburger-opened");
    navMenu.classList.remove("hamburger-opened");
    informationHeader.classList.remove("hamburger-opened");
    wrapper.classList.remove("hamburger-opened");
    navBar.classList.remove("hamburger-opened");
    mainContent.classList.remove("hamburger-opened");
    logo.classList.remove("hamburger-opened");
    footer.classList.remove("hamburger-opened");
    navMenuLargeScreen.classList.add("hidden");
  });

  if (pathName.indexOf("/careers") !== -1) {
    careersApplicationBtn.addEventListener("click", function (e) {
      careersApplication.classList.toggle("none");
    });
  }

  window.onload = function () {
    navMenuLargeScreen.style.top =
      informationHeader.clientHeight - window.scrollY + "px";
    if (
      pathName == "/about" ||
      pathName == "/careers" ||
      pathName == "/locations"
    ) {
      logo.classList.add("scrolled");
      navBar.classList.toggle("scrolled");
    }
  };

  window.onscroll = function () {
    // console.log("Window is scrolling");
    if (window.scrollY <= informationHeader.clientHeight) {
      navMenuLargeScreen.style.top =
        informationHeader.clientHeight - window.scrollY + "px";
    } else {
      navMenuLargeScreen.style.top = 0 + "px";
    }

    if (
      pathName != "/about" &&
      pathName != "/careers" &&
      pathName != "/locations"
    ) {
      navBar.classList.toggle(
        "scrolled",
        window.scrollY > navBar.clientHeight + informationHeader.clientHeight ||
          window.pageYOffset >
            navBar.clientHeight + informationHeader.clientHeight
      );
      logo.classList.toggle(
        "scrolled",
        window.scrollY > navBar.clientHeight + informationHeader.clientHeight ||
          window.pageYOffset >
            navBar.clientHeight + informationHeader.clientHeight
      );
    }
  };
});

// const hamburgers = document.querySelectorAll('.hamburger');
// const hamburgerSmallScreen = document.querySelector('.hamburger:last-of-type');
// const hamburgerLargeScreen = document.querySelector('.hamburger:first-of-type');
// const mainContent = document.querySelector('.main-content');
// const navMenu = document.querySelector('.nav-menu');
// const navMenuLargeScreen = document.querySelector('.nav-menu-large-screen');
// const mainContentChildren = document.querySelector('.main-content-body');
// const scrollContainer = document.getElementById("main-content-body");
// const navBar = document.querySelector('nav');
// const logo = document.querySelector('.logo');

// hamburgerSmallScreen.addEventListener('click', function(e){
//   hamburgerSmallScreen.classList.toggle('hamburger-opened');
//   hamburgerLargeScreen.classList.toggle('hamburger-opened');
//   mainContent.classList.toggle('hamburger-opened');
//   mainContentChildren.classList.toggle('hambuger-opened');
//   navMenu.classList.toggle('hamburger-opened');
//   navBar.classList.toggle('hamburger-opened');
//   navMenuLargeScreen.classList.toggle('hidden');
//   // .classList.remove('hidden');
// });

// hamburgerLargeScreen.addEventListener('click', function(e){
//   hamburgerSmallScreen.classList.toggle('hamburger-opened');
//   hamburgerLargeScreen.classList.toggle('hamburger-opened');
//   mainContent.classList.toggle('hamburger-opened');
//   mainContentChildren.classList.toggle('hambuger-opened');
//   navMenu.classList.toggle('hamburger-opened');
//   navBar.classList.toggle('hamburger-opened');
//   navMenuLargeScreen.classList.toggle('hidden');
// });

// mainContentChildren.addEventListener('click', function(e){
//   hamburgerSmallScreen.classList.remove('hamburger-opened');
//   hamburgerLargeScreen.classList.remove('hamburger-opened');
//   mainContent.classList.remove('hamburger-opened');
//   mainContentChildren.classList.toggle('hambuger-opened');
//   navMenu.classList.remove('hamburger-opened');
//   navBar.classList.remove('hamburger-opened');
//   navMenuLargeScreen.classList.add('hidden');
// });

// console.log(scrollContainer);
// scrollContainer.onscroll = function() {
//   navBar.classList.toggle("scrolled", scrollContainer.scrollTop > navBar.clientHeight);
//   logo.classList.toggle("scrolled", scrollContainer.scrollTop > navBar.clientHeight);
// };
// // scrollContainer.onscroll = function() {
// //   console.log('scrolling');
// //   // window.scrollTo(0, 1);
// //   navBar.classList.toggle("scrolled", scrollContainer.scrollTop > navBar.clientHeight);
// //   logo.classList.toggle("scrolled", scrollContainer.scrollTop > navBar.clientHeight);
// // };

// // // window.scrollTo(0,1);
// // window.addEventListener("load",function() {
// //   setTimeout(function() {
// //       window.scrollTo(0, 1);
// //   }, 1000);
// // });

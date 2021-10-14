// const pathName = window.location.pathname;
let size;
let counter;
let carouselSlide;
let carouselImages;
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const carouselTimer = 4000;
let translateX;
let activeThumbnail;
let activeGallerySlide;
let transitionGallerySlide;

window.addEventListener("load", (event) => {
  console.log("Finished loading");
  if (pathName == "/") {
    // console.log(pathName);

    carouselSlide = document.querySelector(".carousel-slide");
    carouselImages = document.querySelectorAll(".slide");
    counter = 1;
    size = carouselImages[counter].clientWidth;

    // Translate x positioning to correct first image
    if (carouselImages[counter] != undefined) {
      carouselSlide.style.transform = "translateX(" + -size * counter + "px";
    }

    // Init Carousel Loop
    startCarousel();
    // setTimeout(startCarousel(), 3000);

    // instead of the ES6 way ()=> you can do function(){}
    arrowRight.addEventListener("click", () => {
      slideRight();
    });

    arrowLeft.addEventListener("click", () => {
      slideLeft();
    });

    carouselSlide.addEventListener("transitionend", () => {
      // console.log('fired');
      if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        size = carouselImages[counter].clientWidth;
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
      }

      if (carouselImages[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        size = carouselImages[counter].clientWidth;
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
      }
    });

    function slideLeft() {
      if (counter <= 0) return;
      carouselSlide.style.transition = "transform 0.6s ease-in-out";
      size = carouselImages[counter].clientWidth;
      counter--;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }

    function slideRight() {
      if (counter >= carouselImages.length - 1) return;
      carouselSlide.style.transition = "transform 0.6s ease-in-out";
      size = carouselImages[counter].clientWidth;
      counter++;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }

    function startCarousel() {
      carouselLoop = setInterval(function () {
        slideRight();
      }, carouselTimer);

      document.getElementById("arrow-left").onclick = function () {
        clearInterval(carouselLoop);
        carouselLoop = setInterval(function () {
          slideRight();
        }, carouselTimer);
      };

      document.getElementById("arrow-right").onclick = function () {
        clearInterval(carouselLoop);
        carouselLoop = setInterval(function () {
          slideRight();
        }, carouselTimer);
      };
    }
  } else if (
    pathName == "/locations/dominicsIV" ||
    pathName == "/locations/dominicsIII" ||
    pathName == "/locations/dominicsII" ||
    pathName == "/locations/dominicsI"
  ) {
    galleryThumbnails = document.querySelectorAll(".thumbnail");
    carouselSlide = document.querySelector(".gallery-carousel-slide");
    carouselImages = document.querySelectorAll(".gallery-slide");
    counter = 2;
    size = carouselImages[counter].clientWidth;

    translateX = -size * counter + (locationGallery.clientWidth - size) / 2;

    // Translate x positioning to correct first image
    if (carouselImages[counter] != undefined) {
      carouselSlide.style.transform = "translateX(" + translateX + "px";
    }

    // Init Carousel Loop
    startCarousel();

    // setTimeout(startCarousel(), 3000);

    // instead of the ES6 way ()=> you can do function(){}
    arrowRight.addEventListener("click", () => {
      slideRight();
    });

    arrowLeft.addEventListener("click", () => {
      slideLeft();
    });

    galleryThumbnails.forEach((thumbnail) => {
      thumbnail.onclick = function () {
        resetCarouselTimer();
        resetGallery();

        // set clicked thumbnail as the active thumbnail
        // thumbnail.setAttribute("active", "true");
        let thumbnailIndex = [].indexOf.call(
          thumbnail.parentNode.children,
          thumbnail
        );
        counter = thumbnailIndex + 1;

        slideRight();
      };
    });

    document.querySelectorAll("video").forEach((video) => {
      video.onclick = function () {
        clearInterval(carouselLoop);
      };
    });

    carouselSlide.addEventListener("transitionend", () => {
      if (carouselImages[counter].className === "gallery-slide lastClone") {
        carouselSlide.style.transition = "none";
        size = carouselImages[counter].clientWidth;
        counter = carouselImages.length - 2;
        if (window.innerWidth <= 767) {
          translateX = -size * counter;
        } else {
          translateX =
            -size * counter + (locationGallery.clientWidth - size) / 2;
        }

        translateSlideX(translateX);
      }

      if (carouselImages[counter].className === "gallery-slide firstClone") {
        carouselSlide.style.transition = "none";
        size = carouselImages[counter].clientWidth;
        counter = carouselImages.length - counter;

        translateX = -size * counter + (locationGallery.clientWidth - size) / 2;

        translateSlideX(translateX);
      }
    });

    function slideLeft() {
      if (counter <= 0) return;
      else if (counter <= 1) {
        activeThumbnail = galleryThumbnails[carouselImages.length - 4];
        activeGallerySlide = gallerySlide.children[carouselImages.length - 2];
      } else if (counter <= 2) {
        activeThumbnail = galleryThumbnails[carouselImages.length - 3];
        activeGallerySlide = gallerySlide.children[1];
      } else {
        activeThumbnail = galleryThumbnails[counter - 3];
        activeGallerySlide = gallerySlide.children[counter - 1];
      }
      carouselSlide.style.transition = "transform 0.6s ease-in-out";
      size = carouselImages[counter].clientWidth;
      counter--;

      translateX = -size * counter + (locationGallery.clientWidth - size) / 2;

      translateSlideX(translateX);
      resetGallery();
      updateGalleryAttributes();
    }

    function slideRight() {
      if (counter >= carouselImages.length - 1) return;
      else if (counter >= carouselImages.length - 2) {
        activeThumbnail = galleryThumbnails[counter - 1];
        activeGallerySlide = gallerySlide.children[1];
      } else {
        activeThumbnail = galleryThumbnails[counter - 1];
        activeGallerySlide = gallerySlide.children[counter + 1];
      }
      carouselSlide.style.transition = "transform 0.6s ease-in-out";
      size = carouselImages[counter].clientWidth;

      counter++;
      translateX = -size * counter + (locationGallery.clientWidth - size) / 2;

      translateSlideX(translateX);
      resetGallery();
      updateGalleryAttributes();
    }

    function resetGallery() {
      // Reset all thumbnails and all image slides to false
      document.querySelectorAll(`[active=true]`).forEach((node) => {
        node.setAttribute("active", "false");
      });
    }

    function updateGalleryAttributes() {
      activeThumbnail.setAttribute("active", "true");
      activeGallerySlide.setAttribute("active", "true");
      if (counter <= 0) {
        gallerySlide.children[counter].setAttribute("active", "true");
      } else if (counter >= carouselImages.length - 1) {
        gallerySlide.children[counter].setAttribute("active", "true");
      }
    }

    function translateSlideX(num) {
      carouselSlide.style.transform = "translateX(" + num + "px)";
    }

    function startCarousel() {
      carouselLoop = setInterval(function () {
        slideRight();
      }, carouselTimer);

      document.querySelectorAll("video").forEach((video) => {
        video.onplay = (event) => {
          clearInterval(carouselLoop);
        };
      });

      document.querySelectorAll("video").forEach((video) => {
        video.onended = (event) => {
          resetCarouselTimer();
        };
      });

      document.getElementById("arrow-left").onclick = function () {
        resetCarouselTimer();
      };

      document.getElementById("arrow-right").onclick = function () {
        resetCarouselTimer();
      };
    }

    function resetCarouselTimer() {
      clearInterval(carouselLoop);
      carouselLoop = setInterval(function () {
        slideRight();
      }, carouselTimer);
    }
  }
});

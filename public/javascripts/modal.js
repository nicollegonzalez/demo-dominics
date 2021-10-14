window.addEventListener("load", (event) => {
  const defaults = {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true,
    dismissible: true,
    startingTop: "4%",
    endingTop: "10%",
  };

  const covidModalTrigger = document.getElementById("covid-modal-trigger");
  // const overlay = document.getElementById('overlay');
  const covidModalCloseButton = document.getElementById(
    "covid-modal-close-button"
  );
  const covidModal = document.getElementById("covid-modal");
  let covidModalOpen = false;
  let covidModalOpeningTrigger = undefined;
  // let overlayDiv = '<div class="modal-overlay" id="#overlay"></div>';

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  /**
   * Trigger Click
   *
   */
  covidModalTrigger.addEventListener("click", () => {
    openModal();
    covidModalOpen = true;
  });

  // /**
  //  * Overlay Click
  //  */
  // overlay.addEventListener('click',()=>{
  //   if(!covidModalOpen){
  //     closeModal();
  //     covidModalOpen = false;
  //   }
  // });

  /**
   * Modal Close Click
   *
   */
  covidModalCloseButton.addEventListener("click", () => {
    closeModal();
    covidModalOpen = false;
  });

  /**
   * Handle Keydown
   *
   */
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27 && covidModalOpen) {
      closeModal();
    }
  });

  /**
   * Animate in modal
   */
  function animateIn() {
    // Set initial styles
    covidModal.style.display = "block";
    // overlay.style.display = "block";
    covidModal.style.opacity = "0";
    // overlay.style.opacity = "0";

    // Animate overlay
    // overlay.style.transitionProperty = "opacity";
    // overlay.style.transitionDuration = "250ms";
    // overlay.style.transitionTimingFunction = "easeOutQuad";
    // overlay.style.opacity ="0.5";

    // Define modal animation options
    covidModal.style.transitionDuration = "250ms";
    covidModal.style.transitionTimingFunction = "easeOutCubic";

    // Bottom sheet animation
    if (covidModal.classList.contains("bottom-sheet")) {
      covidModal.style.transitionProperty = "opacity,bottom";
      covidModal.style.bottom = "0";
      covidModal.style.opacity = "1";
    }
    // Normal modal animation
    else {
      covidModal.style.top = "4%";
      covidModal.style.transform = "scale(0.8)";
      covidModal.style.transitionProperty = "top,opacity,transform";
      covidModal.style.top = "10%";
      covidModal.style.opacity = "1";
      covidModal.style.transform = "scale(1)";
    }
  }

  /**
   * Animate out modal
   */
  function animateOut() {
    // Animate overlay
    // overlay.style.transitionProperty = "opacity";
    // overlay.style.transitionDuration = "250ms";
    // overlay.style.transitionTimingFunction = "easeOutQuart";
    // overlay.style.opacity ="0";

    // Define modal animation options
    covidModal.style.transitionDuration = "250ms";
    covidModal.style.transitionTimingFunction = "easeOutCubic";

    // Bottom sheet animation
    if (covidModal.classList.contains("bottom-sheet")) {
      covidModal.style.transitionProperty = "opacity,bottom";
      covidModal.style.bottom = "-100%";
      // covidModal.style.opacity = "0";
    }
    // Normal modal animation
    else {
      // covidModal.style.top = "10%";
      // covidModal.style.transform = "scale(1)";
      covidModal.style.transitionProperty = "top,opacity,transform";
      covidModal.style.top = "4%";
      covidModal.style.transform = "scale(0.8)";
      // covidModal.style.opacity = "0";
    }
    covidModal.style.opacity = "0";
    wait(255).then(() => (covidModal.style.zIndex = "0"));
  }

  /**
   * Open Modal
   *
   */

  function openModal() {
    if (covidModalOpen) {
      console.log("returning", !covidModalOpen, covidModalOpen);
      return;
    }

    covidModalOpen = true;

    // Set Z-Index  of currently covid modal
    // overlay.style.zIndex = "100";
    covidModal.style.zIndex = "101";

    if (defaults.preventScrolling) {
      document.body.style.overflow = "hidden";
    }

    covidModal.classList.add("open");
    // covidModal.insertAdjacentElement('afterend', overlayDiv);

    animateIn();

    return;
  }

  /**
   * Close Modal
   */
  function closeModal() {
    if (!covidModalOpen) {
      return;
    }

    covidModalOpen = false;

    // Set Z-Index  of currently covid modal
    // overlay.style.zIndex = "0";
    // covidModal.style.zIndex = "5";

    covidModal.classList.remove("open");

    // Enable body scrolling only if there are no more modals open.
    if (!covidModalOpen) {
      document.body.style.overflow = "";
    }

    // setTimeout(()=> animateOut(),350)
    // setTimeout(()=> covidModal.style.zIndex = "0",600);
    // const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    // wait(500).then(() => animateOut()).then(() => covidModal.style.zIndex = "0");
    // wait(350).then(() => animateOut()).then(() => wait(250).then(() => covidModal.style.zIndex = "0"));
    wait(350).then(() => animateOut());

    return;
  }
});

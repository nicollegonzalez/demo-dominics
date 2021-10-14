window.addEventListener("load", (event) => {
  // const pathName = window.location.pathname;
  const inputs = document.getElementsByTagName("input");
  const printApplicationBtn = document.querySelector("#print-application-btn");

  if (pathName.indexOf("/careers") !== -1) {
    printApplicationBtn.addEventListener("click", function (e) {
      function adjustHeight(textareaElement, minHeight) {
        // compute the height difference which is caused by border and outline
        var outerHeight = parseInt(
          window.getComputedStyle(textareaElement).height,
          10
        );
        if (outerHeight >= 17) {
          var diff = outerHeight - textareaElement.clientHeight;

          // set the height to 0 in case of it has to be shrinked
          textareaElement.style.height = 0;

          // set the correct height
          // el.scrollHeight is the full height of the content, not just the visible part
          textareaElement.style.height =
            Math.max(minHeight, textareaElement.scrollHeight - diff * 2) + "px";
        }
      }

      var textAreas = [].slice.call(document.querySelectorAll("textarea"));

      textAreas.forEach(function (el) {
        // we need box-sizing: border-box, if the textarea has padding
        el.style.boxSizing = el.style.mozBoxSizing = el.style.webkitBoxSizing =
          "border-box";

        // we don't need any scrollbars, do we? :)
        el.style.overflowY = "hidden";

        // the minimum height initiated through the "rows" attribute
        var minHeight = 17;
        // console.log("&%&$&$&%&^&$ Min Height:", minHeight);

        adjustHeight(el, minHeight);
      });

      window.print();

      setTimeout(function () {
        function adjustHeight(textareaElement, minHeight) {
          // compute the height difference which is caused by border and outline
          var outerHeight = parseInt(
            window.getComputedStyle(textareaElement).height,
            10
          );
          if (outerHeight < 195) {
            outerHeight = 195;

          }
          if (outerHeight >= 195) {
            var diff = outerHeight - (outerHeight - 2);

            // set the height to 0 in case of it has to be shrinked
            textareaElement.style.height = 0;

            // set the correct height
            // el.scrollHeight is the full height of the content, not just the visible part
            textareaElement.style.height =
              Math.max(minHeight, textareaElement.scrollHeight + diff) + "px";
          }
        }

        // we use the textarea tag as a marker
        var textAreas = [].slice.call(document.querySelectorAll("textarea"));

        // iterate through all the textareas on the page
        textAreas.forEach(function (el) {
          // we need box-sizing: border-box, if the textarea has padding
          el.style.boxSizing = el.style.mozBoxSizing = "border-box";

          // we don't need any scrollbars, do we? :)
          el.style.overflowY = "hidden";

          // the minimum height initiated through the "rows" attribute
          var minHeight = 108;

          // el.addEventListener('input', function() {
          //     adjustHeight(el, minHeight);
          // });

          // // we have to readjust when window size changes (e.g. orientation change)
          // window.addEventListener('resize', function() {
          //     adjustHeight(el, minHeight);
          // });

          // we adjust height to the initial content
          adjustHeight(el, minHeight);
        });
      }, 1500);
    });


    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("keyup", function (e) {
        let parentElement = inputs[i].parentElement;
        // console.log(parentElement);
        if (
          document.querySelector("#first-time-input").value.toUpperCase() ===
          "YES"
        ) {
          document
            .querySelector("#first-time-yes-input")
            .classList.remove("none");
          document
            .querySelector("#first-time-yes-input")
            .previousElementSibling.classList.remove("none");
        } else {
          document.querySelector("#first-time-yes-input").classList.add("none");
          document
            .querySelector("#first-time-yes-input")
            .previousElementSibling.classList.add("none");
        }
        if (
          document
            .querySelector("#currently-employed-input")
            .value.toUpperCase() === "YES"
        ) {
          document
            .querySelector("#currently-employed-yes-input")
            .classList.remove("none");
          // console.log(document.querySelector('#currently-employed-yes-input').previousElementSibling);//.classList.remove("none");
          document
            .querySelector("#currently-employed-yes-input")
            .previousElementSibling.classList.remove("none");
        } else {
          document
            .querySelector("#currently-employed-yes-input")
            .classList.add("none");
          document
            .querySelector("#currently-employed-yes-input")
            .previousElementSibling.classList.add("none");
        }
        if (document.querySelector("#high-school-input").value !== "") {
          // console.log(document.querySelector('#high-school-input').value);
          document
            .querySelector("#high-school-start-date-input")
            .classList.remove("none");
          document
            .querySelector("#high-school-start-date-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#high-school-start-date-input")
            .nextElementSibling.classList.remove("none");
          document
            .querySelector("#high-school-end-date-input")
            .classList.remove("none");
          document
            .querySelector("#high-school-graduate-input")
            .classList.remove("none");
          document
            .querySelector("#high-school-graduate-input")
            .previousElementSibling.classList.remove("none");
        } else {
          document
            .querySelector("#high-school-start-date-input")
            .classList.add("none");
          document
            .querySelector("#high-school-start-date-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#high-school-start-date-input")
            .nextElementSibling.classList.add("none");
          document
            .querySelector("#high-school-end-date-input")
            .classList.add("none");
        }
        if (document.querySelector("#college-input").value !== "") {
          // console.log(document.querySelector('#college-input').value);
          document
            .querySelector("#college-start-date-input")
            .classList.remove("none");
          document
            .querySelector("#college-start-date-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#college-start-date-input")
            .nextElementSibling.classList.remove("none");
          document
            .querySelector("#college-end-date-input")
            .classList.remove("none");
          document
            .querySelector("#college-graduate-input")
            .classList.remove("none");
          document
            .querySelector("#college-graduate-input")
            .previousElementSibling.classList.remove("none");
        } else {
          document
            .querySelector("#college-start-date-input")
            .classList.add("none");
          document
            .querySelector("#college-start-date-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#college-start-date-input")
            .nextElementSibling.classList.add("none");
          document
            .querySelector("#college-end-date-input")
            .classList.add("none");
          document
            .querySelector("#college-graduate-input")
            .classList.add("none");
          document
            .querySelector("#college-graduate-input")
            .previousElementSibling.classList.add("none");
        }
        if (document.querySelector("#trade-school-input").value !== "") {
          // console.log(document.querySelector('#trade-school-input').value);
          document
            .querySelector("#trade-school-start-date-input")
            .classList.remove("none");
          document
            .querySelector("#trade-school-start-date-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#trade-school-start-date-input")
            .nextElementSibling.classList.remove("none");
          document
            .querySelector("#trade-school-end-date-input")
            .classList.remove("none");
          document
            .querySelector("#trade-school-graduate-input")
            .classList.remove("none");
          document
            .querySelector("#trade-school-graduate-input")
            .previousElementSibling.classList.remove("none");
        } else {
          document
            .querySelector("#trade-school-start-date-input")
            .classList.add("none");
          document
            .querySelector("#trade-school-start-date-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#trade-school-start-date-input")
            .nextElementSibling.classList.add("none");
          document
            .querySelector("#trade-school-end-date-input")
            .classList.add("none");
          document
            .querySelector("#trade-school-graduate-input")
            .classList.add("none");
          document
            .querySelector("#trade-school-graduate-input")
            .previousElementSibling.classList.add("none");
        }
        if (
          document.querySelector("#previous-employment-name-1-input").value !==
          ""
        ) {
          // console.log(document.querySelector('#previous-employment-name-1-input').value);
          document
            .querySelector("#previous-employment-position-1-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-position-1-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-wage-1-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-wage-1-input")
            .previousElementSibling.classList.remove("none");
          // document.querySelector('#previous-employment-wage-1-input').nextElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-start-date-1-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-start-date-1-input")
            .nextElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-end-date-1-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-left-1-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-left-1-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-responsibilities-1-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-responsibilities-1-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-contact-permision-1-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-contact-permision-1-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-contact-name-1-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-contact-name-1-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-contact-number-1-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-contact-number-1-input")
            .previousElementSibling.classList.remove("none");
        } else {
          document
            .querySelector("#previous-employment-position-1-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-position-1-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-wage-1-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-wage-1-input")
            .previousElementSibling.classList.add("none");
          // document.querySelector('#previous-employment-wage-1-input').nextElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-start-date-1-input")
            .classList.add("none");
          // document.querySelector('#previous-employment-start-date-1-input').previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-start-date-1-input")
            .nextElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-end-date-1-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-left-1-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-left-1-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-responsibilities-1-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-responsibilities-1-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-contact-permision-1-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-contact-permision-1-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-contact-name-1-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-contact-name-1-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-contact-number-1-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-contact-number-1-input")
            .previousElementSibling.classList.add("none");
        }
        if (
          document.querySelector("#previous-employment-name-2-input").value !==
          ""
        ) {
          // console.log(document.querySelector('#previous-employment-name-2-input').value);
          document
            .querySelector("#previous-employment-position-2-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-position-2-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-wage-2-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-wage-2-input")
            .previousElementSibling.classList.remove("none");
          // document.querySelector('#previous-employment-wage-2-input').nextElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-start-date-2-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-start-date-2-input")
            .nextElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-end-date-2-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-left-2-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-left-2-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-responsibilities-2-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-responsibilities-2-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-contact-permision-2-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-contact-permision-2-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-contact-name-2-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-contact-name-2-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-contact-number-2-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-contact-number-2-input")
            .previousElementSibling.classList.remove("none");
          // document.querySelector('#').classList.remove("none");
          // document.querySelector('#').nextElementSibling.classList.remove("none");
        } else {
          document
            .querySelector("#previous-employment-position-2-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-position-2-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-wage-2-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-wage-2-input")
            .previousElementSibling.classList.add("none");
          // document.querySelector('#previous-employment-wage-2-input').nextElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-start-date-2-input")
            .classList.add("none");
          // document.querySelector('#previous-employment-start-date-2-input').previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-start-date-2-input")
            .nextElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-end-date-2-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-left-2-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-left-2-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-responsibilities-2-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-responsibilities-2-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-contact-permision-2-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-contact-permision-2-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-contact-name-2-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-contact-name-2-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-contact-number-2-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-contact-number-2-input")
            .previousElementSibling.classList.add("none");
        }
        if (
          document.querySelector("#previous-employment-name-3-input").value !==
          ""
        ) {
          // console.log(document.querySelector('#previous-employment-name-3-input').value);
          document
            .querySelector("#previous-employment-position-3-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-position-3-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-wage-3-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-wage-3-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-wage-3-input")
            .nextElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-start-date-3-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-start-date-3-input")
            .nextElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-end-date-3-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-left-3-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-left-3-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-responsibilities-3-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-responsibilities-3-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-contact-permision-3-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-contact-permision-3-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-contact-name-3-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-contact-name-3-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#previous-employment-contact-number-3-input")
            .classList.remove("none");
          document
            .querySelector("#previous-employment-contact-number-3-input")
            .previousElementSibling.classList.remove("none");
          // document.querySelector('#').classList.remove("none");
          // document.querySelector('#').nextElementSibling.classList.remove("none");
        } else {
          document
            .querySelector("#previous-employment-position-3-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-position-3-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-wage-3-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-wage-3-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-start-date-3-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-start-date-3-input")
            .nextElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-end-date-3-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-left-3-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-left-3-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-responsibilities-3-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-responsibilities-3-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-contact-permision-3-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-contact-permision-3-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-contact-name-3-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-contact-name-3-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#previous-employment-contact-number-3-input")
            .classList.add("none");
          document
            .querySelector("#previous-employment-contact-number-3-input")
            .previousElementSibling.classList.add("none");
        }
        if (document.querySelector("#refernce-name-1-input").value !== "") {
          document
            .querySelector("#refernce-number-1-input")
            .classList.remove("none");
          document
            .querySelector("#refernce-number-1-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#refernce-relationship-1-input")
            .classList.remove("none");
          document
            .querySelector("#refernce-relationship-1-input")
            .previousElementSibling.classList.remove("none");
        } else {
          document
            .querySelector("#refernce-number-1-input")
            .classList.add("none");
          document
            .querySelector("#refernce-number-1-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#refernce-relationship-1-input")
            .classList.add("none");
          document
            .querySelector("#refernce-relationship-1-input")
            .previousElementSibling.classList.add("none");
        }
        if (document.querySelector("#refernce-name-2-input").value !== "") {
          document
            .querySelector("#refernce-number-2-input")
            .classList.remove("none");
          document
            .querySelector("#refernce-number-2-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#refernce-relationship-2-input")
            .classList.remove("none");
          document
            .querySelector("#refernce-relationship-2-input")
            .previousElementSibling.classList.remove("none");
        } else {
          document
            .querySelector("#refernce-number-2-input")
            .classList.add("none");
          document
            .querySelector("#refernce-number-2-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#refernce-relationship-2-input")
            .classList.add("none");
          document
            .querySelector("#refernce-relationship-2-input")
            .previousElementSibling.classList.add("none");
        }
        if (document.querySelector("#refernce-name-3-input").value !== "") {
          document
            .querySelector("#refernce-number-3-input")
            .classList.remove("none");
          document
            .querySelector("#refernce-number-3-input")
            .previousElementSibling.classList.remove("none");
          document
            .querySelector("#refernce-relationship-3-input")
            .classList.remove("none");
          document
            .querySelector("#refernce-relationship-3-input")
            .previousElementSibling.classList.remove("none");
        } else {
          document
            .querySelector("#refernce-number-3-input")
            .classList.add("none");
          document
            .querySelector("#refernce-number-3-input")
            .previousElementSibling.classList.add("none");
          document
            .querySelector("#refernce-relationship-3-input")
            .classList.add("none");
          document
            .querySelector("#refernce-relationship-3-input")
            .previousElementSibling.classList.add("none");
        }
      });
    }

    (function () {
      function adjustHeight(textareaElement, minHeight) {
        // compute the height difference which is caused by border and outline
        var outerHeight = parseInt(
          window.getComputedStyle(textareaElement).height,
          10
        );
        if (outerHeight < 108) {
          outerHeight = 108;
        }
        if (outerHeight >= 108) {
          var diff = outerHeight - textareaElement.clientHeight;

          // set the height to 0 in case of it has to be shrinked
          textareaElement.style.height = 0;

          // set the correct height
          // el.scrollHeight is the full height of the content, not just the visible part
          textareaElement.style.height =
            Math.max(minHeight, textareaElement.scrollHeight + diff) + "px";
        }
      }

      // we use the textarea tag as a marker
      var textAreas = [].slice.call(document.querySelectorAll("textarea"));

      // iterate through all the textareas on the page
      textAreas.forEach(function (el) {
        // we need box-sizing: border-box, if the textarea has padding
        el.style.boxSizing = el.style.mozBoxSizing = "border-box";

        // we don't need any scrollbars, do we? :)
        el.style.overflowY = "hidden";

        // the minimum height initiated through the "rows" attribute
        var minHeight = 108;
        // console.log("minHeight",minHeight)

        el.addEventListener("input", function () {
          adjustHeight(el, minHeight);
          // console.log("input",minHeight)
        });

        // we have to readjust when window size changes (e.g. orientation change)
        window.addEventListener("resize", function () {
          adjustHeight(el, minHeight);
          // console.log("resize",minHeight)
        });

        // we adjust height to the initial content
        adjustHeight(el, minHeight);
      });
    })();
  }
});

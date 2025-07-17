/**
 * jQuery Animated Progressbar
 * Author: shakibdshy<shakibdshy@gmail.com>
 * Author URL: https://github.com/shakibdshy
 * Version: 1.0.0
 */

(function ($) {
  "use strict";

  function animateProgressBars() {
    $("[progress-bar]").each(function () {
      $(this)
        .find(".progress-fill")
        .animate(
          {
            width: $(this).attr("data-percentage"),
          },
          2000
        );

      $(this)
        .find(".progress-number-mark")
        .animate(
          { left: $(this).attr("data-percentage") },
          {
            duration: 2000,
            step: function (now, fx) {
              var data = Math.round(now);
              $(this)
                .find(".percent")
                .html(data + "%");
            },
          }
        );
    });
  }


  // document.getElementById('section3').addEventListener("click", () => {
  // animateProgressBars();
  // });

  // document.querySelector("#nextPage2").addEventListener("click", () => {
  //   animateProgressBars();
  // });


  let section3 = document.getElementById('section3');
  ScrollTrigger.create({
    trigger: section3,
    start: "top 110%",
    once: true,
    onEnter: animateProgressBars
  })

})(jQuery);

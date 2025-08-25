  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  function animateProgressBars() {
    document.querySelectorAll("[progress-bar]").forEach(el => {
      let percentage = el.getAttribute("data-percentage");

      // progress-fill animate
      gsap.to(el.querySelector(".progress-fill"), {
        width: percentage,
        duration: 2,
        ease: "power2.out"
      });

      // number mark animate (left position + counter)
      let numMark = el.querySelector(".progress-number-mark");
      let percentText = numMark.querySelector(".percent");

      gsap.to(numMark, {
        left: percentage,
        duration: 2,
        ease: "power2.out",
        onUpdate: function () {
          let progress = Math.round(this.progress() * parseInt(percentage));
          percentText.innerHTML = progress + "%";
        }
      });
    });
  }

  // ScrollTrigger
  ScrollTrigger.create({
    trigger: "#section3",
    start: "top 110%",
    once: true,
    onEnter: animateProgressBars
  });

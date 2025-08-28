// Download BTN Animation 

const downloadCVBtn = document.getElementById('downloadCVBtn');

downloadCVBtn.addEventListener('click', () => {
  // if (downloadCVBtn.classList.contains('loading')) return;

  downloadCVBtn.textContent = 'Downloading ...';

  // simulate download
  setTimeout(() => {
    downloadCVBtn.textContent = 'reDownload CV';
  }, 5000);
});


// Partical JS 

  tsParticles.load("tsparticles", {
    /* yaha tera config paste kar */
    "autoPlay": true,
    "fullScreen": {
      "enable": false   // 👈 Important: taaki pure page cover na kare
    },
    "background": {
      "color": { "value": "#000000" }
    },
    "fpsLimit": 120,
    "interactivity": {
      "events": {
        "onHover": { "enable": true, "mode": "bubble" },
        "resize": true
      },
      "modes": {
        "bubble": { "distance": 40, "size": 6, "opacity": 8 }
      }
    },
    "particles": {
      "number": { "value": 200 },
      "color": { "value": "#ffffff" },
      "links": { "enable": true, "distance": 30, "opacity": 0.4 },
      "move": { "enable": true, "speed": 1 },
      "opacity": { "value": { "min": 0.05, "max": 0.4 }, "animation": { "enable": true, "speed": 2 } },
      "size": { "value": 1 },
      "shape": { "type": "circle" }
    },
    "polygon": {
      "draw": {
        "enable": true,
        "stroke": { "color": { "value": "#fff" }, "width": 1, "opacity": 0.2 }
      },
      "enable": true,
      "inline": { "arrangement": "equidistant" },
      "move": { "radius": 10, "type": "path" },
      "scale": 0.5,
      "type": "inline",
      "url": "https://particles.js.org/images/smalldeer.svg",
      "position": { "x": 50, "y": 50 }
    }
  });


    const goTopBtn = document.getElementById('goToTopBtn');

    gsap.to(goTopBtn, {
      opacity: 1,
      duration: 0.1,
        scrollTrigger: {
          trigger: 'body',
          start: 'top -50%',
          end: 'top -75%',
          scrub: 1,
        }
    })

    
  goTopBtn.addEventListener('click', () => {
    location.href = '#home';
      gsap.to(goTopBtn, {
      opacity: 0,
      duration: 0.1,
    })
  });


  const audioBtn = document.getElementById('audioBtn');
  const audio = document.getElementById('bg-music');

  audioBtn.addEventListener('click', () => {
if (audio.paused) {
  audio.play();
  audioBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
<g>
	<g>
		<path d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M256,482.743    C130.974,482.743,29.257,381.026,29.257,256S130.974,29.257,256,29.257S482.743,130.974,482.743,256S381.026,482.743,256,482.743z    "/>
	</g>
</g>
<g>
	<g>
		<path d="M266.243,416.5c-8.078,0-14.629,6.557-14.629,14.636c0,8.079,6.551,14.629,14.629,14.629s14.629-6.551,14.629-14.629    v-0.013C280.872,423.044,274.321,416.5,266.243,416.5z"/>
	</g>
</g>
<g>
	<g>
		<path d="M432.599,248.117c-8.078,0-14.629,6.551-14.629,14.629c0,67.634-43.33,126.623-107.82,146.786    c-7.711,2.409-12.007,10.616-9.596,18.327c1.956,6.257,7.728,10.268,13.957,10.268c1.445,0,2.917-0.216,4.37-0.671    c36.419-11.385,69.113-34.578,92.058-65.3c23.741-31.792,36.289-69.625,36.289-109.409    C447.228,254.667,440.677,248.117,432.599,248.117z"/>
	</g>
</g>
<g>
	<g>
		<path d="M225.344,153.6h-57.116c-8.078,0-14.629,6.551-14.629,14.629v175.543c0,8.078,6.551,14.629,14.629,14.629h57.116    c8.078,0,14.629-6.551,14.629-14.629V168.229C239.973,160.151,233.422,153.6,225.344,153.6z M210.716,329.143h-27.859V182.857    h27.859V329.143z"/>
	</g>
</g>
<g>
	<g>
		<path d="M340.878,153.6h-57.116c-8.078,0-14.629,6.551-14.629,14.629v175.543c0,8.078,6.551,14.629,14.629,14.629h57.116    c8.079,0,14.629-6.551,14.629-14.629V168.229C355.506,160.151,348.956,153.6,340.878,153.6z M326.249,329.143h-27.859V182.857    h27.859V329.143z"/>
	</g>
</g>
</svg><span>Pause Audio</span>`;
} else {
  audio.pause();
    audioBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 28 28" fill="none"><path clip-rule="evenodd" d="M19.5 13.134C20.1667 13.5189 20.1667 14.4811 19.5 14.866L12 19.1962C11.3333 19.5811 10.5 19.0999 10.5 18.3301V9.66987C10.5 8.90007 11.3333 8.41895 12 8.80385L19.5 13.134ZM12.5 11.4019L17 14L12.5 16.5981V11.4019Z" fill="#fff" fill-rule="evenodd"/><path clip-rule="evenodd" d="M14 1C6.8203 1 1 6.8203 1 14C1 21.1797 6.8203 27 14 27C21.1797 27 27 21.1797 27 14C27 6.8203 21.1797 1 14 1ZM3 14C3 7.92487 7.92487 3 14 3C20.0751 3 25 7.92487 25 14C25 20.0751 20.0751 25 14 25C7.92487 25 3 20.0751 3 14Z" fill="#fff" fill-rule="evenodd"/></svg><span>Play Music</span>`;
    
}



  });
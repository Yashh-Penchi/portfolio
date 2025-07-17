document.addEventListener('DOMContentLoaded', () => {

  const Cursor = document.getElementById('cursor');
  const innerCursor = document.getElementById('cursorInner');
  gsap.to(Cursor,{
  rotation: 360,
  duration: 2,
  repeat: -1,
  ease: 'linear',
  transformOrigin: "50% 50%"
})

document.addEventListener("mousemove", (dtls) => {
gsap.to(Cursor,{
  x: dtls.clientX,
  y: dtls.clientY,
  duration: 0.3,
  delay: 0.01,
  ease: "Power2.inOut",
})
gsap.to(innerCursor, {
  duration:0,
  x: dtls.clientX,
  y: dtls.clientY,
  ease: "Power2.inOut",
  });

  
})
document.getElementById("section3").addEventListener("mouseenter", (e) =>{
  Cursor.classList.add('cursorList')
  Cursor.classList.remove('cursorBG')
  gsap.to(innerCursor, {
    background: '#00c3ff76',
     width: 5,
  height: 5,
  })
})
document.getElementById("section3").addEventListener("mouseleave", (e) =>{
  Cursor.classList.remove('cursorList')
  Cursor.classList.add('cursorBG')
  gsap.to(innerCursor, {
    background: '#ffffffd2',
     width: 7.5,
  height: 7.5,
  })
})

function cursorSection2() {
  document.addEventListener("mousemove", (dtls) => {
    gsap.to('.section2 #effect3',{
      x: dtls.clientX - 220,
      y: dtls.clientY - 570,
      duration: 0.2,
      delay: 0.01,
      ease: "Power2.inOut",
    })
  })
}
function cursorSection2Hide() {
  document.querySelector(".section2").addEventListener("mousemove", (dtls) => {
    gsap.to('.section2 #effect3',{
      x: dtls.clientX - 220,
      y: dtls.clientY - 570,
      duration: 0.2,
      delay: 0.01,
      ease: "Power2.inOut",
    })
  })
}

document.querySelector('#section4').addEventListener("mouseenter", () => {
  Cursor.style.zIndex = '20';
  innerCursor.style.zIndex = '21';
})
document.querySelector('#section4').addEventListener("mouseleave", () => {
  Cursor.style.zIndex = '2';
  innerCursor.style.zIndex = '3';
})

document.querySelector('.nextPage1').addEventListener("click", () =>{
  cursorSection2();
})

})

const nextPage2 = document.getElementById('nextPage2');

if(nextPage2){
  nextPage2.addEventListener("click", () => {
    document.body.style.overflowY = "overlay";
  });
}

// onclick="document.body.style.overflowY = 'overlay';"


// ----------------------- GSAP is here 
function allGSAP() {


const secondNav = document.getElementById('secondNav');
const secondNavBar = document.getElementById('secondNavBar');
const secondNavClose = document.getElementById('secondNavClose');
const Logo = document.querySelector('#mainHeader #logo h1');
const Rocket = document.querySelector('#mainHeader #logo h1 span');
let tl4 = gsap.timeline();


Logo.addEventListener("mouseenter",()=>{
  gsap.to(Rocket,{
    rotate: '10deg',
    duration: 0.4,
    x: 11,
    y: -11,
  })
})
Logo.addEventListener("mouseleave",()=>{
  gsap.to(Rocket,{
    rotate: '0deg',
    duration: 0.4,
    x: 0,
    y: 0,
  })
})
secondNav.addEventListener("mouseenter",()=>{
  gsap.to(secondNav,{
    rotate: '50deg',
    duration: 0.4
  })
})

secondNav.addEventListener("mouseleave",()=>{
  gsap.to(secondNav,{
    rotate: '0deg',
    duration: 0.4
  });
})

secondNav.addEventListener("click",()=>{
  tl4.to(secondNavBar,{
    right: '0%',
    opacity: 1,
    duration: 0.4,
    pointerEvents: 'all',
  })
    tl4.from("#inputSearch",{
  y:-100,
  duration: 0.5,
  ease: "power2.inOut",
  opacity: 0,
});

tl4.from("#inputSearch input",{
  x:100,
  duration: 0.3,
  ease: "power2.inOut",
  opacity: 0,
});
tl4.from("#secondNavBar nav ul li",{
  x:-100,
  duration: 0.5,
  ease: "power2.inOut",
  opacity: 0,
  stagger: 0.2
});
tl4.from("#socialIconsForSecondNav a",{
  x:-100,
  duration: 0.4,
  ease: "power2.inOut",
  opacity: 0,
  stagger: 0.2
});
})
secondNavClose.addEventListener("click",()=>{
  gsap.to(secondNavBar,{
    right: '-50%',
  pointerEvents: 'none',
    opacity: 0,
    duration: 0.4
  })
});  

secondNavClose.addEventListener("mouseenter",()=>{
  gsap.to(secondNavClose,{
    rotate: '-50deg',
    duration: 0.4
  })
})

secondNavClose.addEventListener("mouseleave",()=>{
  gsap.to(secondNavClose,{
    rotate: '0deg',
    duration: 0.4
  })
})


const mainLogo = document.querySelector("#mainHeader #logo h1");
const navItems = document.querySelectorAll("#mainHeader nav ul li, #mainHeader nav ul a, #mainHeader nav #secondNav ");
let tl = gsap.timeline();

tl.from("#detailsSale marquee", {
  duration: 0.5,
  opacity: 0,
  delay: 0.8,
  x: -1500,
});
tl.from("#socialIcon a", {
  duration: 0.5,
  opacity: 0,
  x: 50,
  stagger: 0.1,
});
tl.from(mainLogo, {
  duration: 0.8,
  opacity: 0,
  x: -500,
},"-=1");

tl.from(navItems, {
  duration: 0.5,
  opacity: 0,
  y: -100,
  stagger: 0.1,
},"-=0.5");

tl.from("#blog", {
  opacity:0,
  duration: 2,
},"-=2")

tl.from("#home #content h3", {
  duration: 0.3,
  opacity: 0,
  y: -10,
}, "-=1.8");
tl.from("#home #content p", {
  duration: 0.5,
  opacity: 0,
  x: -100,
}, "-=1.3");
tl.from("#home #content button", {
  duration: 0.8,
  opacity: 0,
  x: -100,
  stagger:0.2
}, "-=1");



document.querySelector('.nextPage1').addEventListener("click", () => {;
  
  let tl2 = gsap.timeline();

tl2.from("#explore #content #Photo", {
  delay: 0.2,
  opacity: 0,
  duration: 0.8,
  // x: -100,
  rotateY: '-90deg',
  rotateX: '45deg',
});
tl2.from("#explore #dtlsContent h3", {
  opacity: 0,
  duration: 0.5,
  x: -200,
});
tl2.from("#explore #dtlsContent p", {
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
  x: -100,
});
tl2.from("#explore #dtlsContent #socialIcons a", {
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  x: -100,
});
tl2.from("#explore #dtlsContent #contactBtn", {
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  x: -100,
});

});


gsap.from("#IntractDiv", {
  duration: 0.5,
  y: 75,
  opacity: 0,
    scrollTrigger: {
    trigger: '#section4',
    scroller: "body",
    start: 'top 65%',
  }
});


gsap.fromTo("#clm1",
  {y: 100},
  {y: -100, duration: 15, repeat: -1, yoyo: true, ease: "power2.inOut"}
);
gsap.fromTo("#clm2",
  {y: 80},
  {y: -80, duration: 20, repeat: -1, yoyo: true, ease: "power1.inOut"}
);
gsap.fromTo("#clm3",
  {y: 100},
  {y: -100, duration: 15, repeat: -1, yoyo: true, ease: "power4.inOut"}
);



// let marqueeAnimation = gsap.to("#companysChart",{
//   xPercent: -50,
//   duration: 8,
//   repeat: -1,
//   ease: 'linear',
//   played: true,
// })

// let companysChart = document.getElementById('companysChart');

// companysChart.addEventListener("mouseenter", () => {
//   marqueeAnimation.pause();
// });

// companysChart.addEventListener("mouseleave", () => {
//   marqueeAnimation.resume();
// });

let tl3 = gsap.timeline();

gsap.from("#madeWith", {
  duration: 0.5,
  yPercent: -100,
  opacity: 0,
  letterSpacing: 10,
    scrollTrigger: {
    trigger: '#section5',
    scroller: "body",
    start: 'top 10%',
  }
});
gsap.from("#SocialIDS a", {
  duration: 0.5,
  xPercent: -100,
  opacity: 0,
  stagger: 0.2,
    scrollTrigger: {
    trigger: '#section5',
    scroller: "body",
    start: 'bottom 97%',
  }
});
gsap.from("#mainHeading5577", {
  duration: 0.5,
  scale: 3,
  rotateZ: '360deg',
  opacity: 0,
    scrollTrigger: {
    trigger: '#section5',
    scroller: "body",
    start: 'top 70%',
    end: 'top 10%',
    scrub: 3,
  }
});


// skills section anim 

function section3AnimRun() {
 let tl10 = gsap.timeline({  delay: 0.8,
});

 tl10.from(".Progresscontainer h3", {
  opacity: 0,
  duration: 0.5,
  ease: "Power2.inOut",
  x: -100,
 })
 
 tl10.from(".techBox", {
  duration: 0.2, 
  opacity: 0,
  x: -50,
  stagger: 0.15,
 })

 tl10.from(".Progresscontainer h5", {
  duration: 0.3, 
  opacity: 0,
  x: -100,
  stagger: 3
 }, '-=3')
}

 document.getElementById('skillsNav').addEventListener("click", () => {
    section3AnimRun();
  });

  document.querySelector("#nextPage2").addEventListener("click", () => {
    section3AnimRun();
    });

    document.querySelector("#techh1").addEventListener("mouseenter", () => {
      gsap.to("#techh1", {
      })
    })

}



// loading -------------------------------------
function loading() {
  let path = document.querySelector("#loading svg path");
  let length = path.getTotalLength(); // Get exact path length

  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length
  });

  let tl = gsap.timeline();

  tl.to(path, {
    strokeDashoffset: 0,
    duration: 35,
    ease: "power2.out",
    once: true,
  },'+=0.8');

  tl.to("#loading", {
    top: "-100%",
    duration: 1,
    once: true,
    opacity:0.5,
    ease: "power1.inOut"
  },'-=31');

  tl.to("#lineLoad #fill",{
  width: '100%',
    once: true,
  duration:4,
  ease: "power1.inOut",
  onComplete: function () {
    setTimeout(() => {
      allGSAP();
    }, 50); // 50ms = 0.05 second
  }
  },'-=35')
}
loading();

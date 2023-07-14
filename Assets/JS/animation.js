gsap.registerPlugin(ScrollTrigger);

gsap.from('nav', { 
  duration: 1, 
  y:'-100%', 
  ease:'slow' 
});

gsap.from('li', { 
  duration: 1, 
  opacity:0, 
  delay:1, 
  stagger: 0.2 
});

//header
gsap.from('.cube', { 
  duration: 2,
  x:'100%'
});

gsap.from('.box', { 
  duration: 2, 
  x:'-150%', 
  delay:'0.5'
});

document.getElementsByClassName('box')[0].style.zIndex = "1";


//words
const words = document.querySelectorAll('.box > h4 > span');
let main = new TimelineMax({repeat: -1});

for (let i = 0; i < words.length; i++) {
    let delay = i - 1;
    let wordTL = new TimelineMax();
    if(i !== 0) {
      wordTL.from(words[i], 1, { y: '-100%', opacity: 0 });
    }
    
    if(i !== words.length - 1) {
      wordTL.to(words[i], 1, { y: '100%', opacity: 0});
    }
    main.add(wordTL, delay);
}

//opening
gsap.from(".openingText", {
  scrollTrigger: {
    trigger: ".openingText",
  },
  duration: 1,
  x: "-100%"
})

//examples
let observer = new IntersectionObserver(function(entries, self) { 
  let targets = entries.map(entry => {
    if(entry.isIntersecting) {
      self.unobserve(entry.target);
      return entry.target;
    }
  });
  
  //call function
  fadeIn(targets);
}, { treshold: 0.5 });

document.querySelectorAll('.openingItem').forEach(item => {
  observer.observe(item);
});

function fadeIn(targets){
  gsap.to(targets, {
    opacity: 1,
    stagger: 0.2
  });
}

//services
gsap.from(".servicesText", {
  scrollTrigger: {
    trigger: ".servicesText",
  },
  duration: 1,
  x: "-100%"
})

gsap.from('.servicesGridContainer', { 
  scrollTrigger: {
    trigger: ".servicesGridContainer",
    start: "top center",
  },
  duration: 2,
  opacity:'0'
});

//showcase
gsap.from(".showcaseText", {
  scrollTrigger: {
    trigger: ".showcaseText",
  },
  duration: 2,
  y: "-50%",
  opacity: '0'
});
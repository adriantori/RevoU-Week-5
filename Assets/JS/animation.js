gsap.from('nav', { duration: 1, y:'-100%', ease:'slow' });
gsap.from('li', { duration: 1, opacity:0, delay:1, stagger: 0.2 });

//header
gsap.from('.cube', { duration: 2, x:'-100%'});
gsap.from('.box', { duration: 2, x:'-150%', delay:'0.5'})

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


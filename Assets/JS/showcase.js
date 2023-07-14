let slideIndexNavbar = 1;
showSlides(slideIndexNavbar);

function plusSlides(n) {
  showSlides(slideIndexNavbar += n);
}

function currentSlide(n) {
  showSlides(slideIndexNavbar = n);
}

function showSlides(n) {
  let i;
  let slidesNav = document.getElementsByClassName("slideNav");
  if (n > slidesNav.length) {slideIndexNavbar = 1}    
  if (n < 1) {slideIndexNavbar = slidesNav.length}
  for (i = 0; i < slidesNav.length; i++) {
    slidesNav[i].style.display = "none";  
  }
  slidesNav[slideIndexNavbar-1].style.display = "flex";  
}

let slideIndexFooter = 1;
showSlidesFoot(slideIndexFooter);

function plusSlidesFoot(m) {
    showSlidesFoot(slideIndexFooter += m);
}

function currentSlideFoot(m) {
    showSlidesFoot(slideIndexFooter = m);
}

function showSlidesFoot(m) {
  let i;
  let slidesFoot = document.getElementsByClassName("slideFoot");
  if (m > slidesFoot.length) {slideIndexFooter = 1}    
  if (m < 1) {slideIndexFooter = slidesFoot.length}
  for (i = 0; i < slidesFoot.length; i++) {
    slidesFoot[i].style.display = "none";  
  }
  slidesFoot[slideIndexFooter-1].style.display = "flex";  
}

//content color
let changeColorBody = document.getElementById('changeColorBody');
let changeColorText = document.getElementById('changeColorText');

//body
setInterval(() => {
  let colorBody = changeColorBody.value;
  document.getElementById("showcaseBody").style.backgroundColor = colorBody;
  let colorText = changeColorText.value;
  document.getElementById("showcaseBody").style.color = colorText;
}, 10);
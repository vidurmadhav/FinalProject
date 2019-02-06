var slideshow1a = document.getElementById("slideshow1a");
slideshow1a.currentSlideIndex = 1;
showSlides(slideshow1a.currentSlideIndex, slideshow1a);

var slideshow2a = document.getElementById("slideshow2a");
slideshow2a.currentSlideIndex = 1;
showSlides(slideshow2a.currentSlideIndex, slideshow2a);

var slideshow3a = document.getElementById("slideshow3a");
slideshow3a.currentSlideIndex = 1;
showSlides(slideshow3a.currentSlideIndex, slideshow3a);

var slideshow4a = document.getElementById("slideshow4a");
slideshow4a.currentSlideIndex = 1;
showSlides(slideshow4a.currentSlideIndex, slideshow4a);

var slideshow5a = document.getElementById("slideshow5a");
slideshow5a.currentSlideIndex = 1;
showSlides(slideshow5a.currentSlideIndex, slideshow5a);

var slideshow6a = document.getElementById("slideshow6a");
slideshow6a.currentSlideIndex = 1;
showSlides(slideshow6a.currentSlideIndex, slideshow6a);

var slideshow1b = document.getElementById("slideshow1b");
slideshow1b.currentSlideIndex = 1;
showSlides(slideshow1b.currentSlideIndex, slideshow1b);

var slideshow2b = document.getElementById("slideshow2b");
slideshow2b.currentSlideIndex = 1;
showSlides(slideshow2b.currentSlideIndex, slideshow2b);

var slideshow3b = document.getElementById("slideshow3b");
slideshow3b.currentSlideIndex = 1;
showSlides(slideshow3b.currentSlideIndex, slideshow3b);

function plusSlides(n, slideshow) {
  showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
  showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {



  var i;
  var slides = slideshow.getElementsByClassName("mySlides");
  var dots = slideshow.getElementsByClassName("dot");
  if (n > slides.length) {slideshow.currentSlideIndex = 1}
  if (n < 1) {slideshow.currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshow.currentSlideIndex-1].style.display = "block";
  dots[slideshow.currentSlideIndex-1].className += " active";
}

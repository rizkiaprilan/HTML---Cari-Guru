//automatic slideshow
var index = 0;
slide();

function slide() {
  var i;
  var x = document.getElementsByClassName("slideshow");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  index++;
  if (index > x.length)
  {
      index = 1
  }    
  x[index-1].style.display = "block";  
  setTimeout(slide,4000);
}

//slideshow

var slideindex= 1;
showSlides(slideindex);

function plusSlides(n){
  showSlides(slideindex+=n);
}

function currentSlides(n){
  showSlides(slideindex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("slideshow");

  if(n > slides.length){
  slideindex=1;
  }

  if(n<1){
  slideindex=slides.length;
  }

  for(i = 0; i<slides.length; i++)
  {
    slides[i].style.display ="none";
  }
  
  slides[slideindex-1].style.display = "block";
}

//----------menu-drop-down-----------//

function menuClick(){
  document.getElementById("verticalNavBar").classList.toggle("showNav");
}

window.onclick = function(e) {
  if (!e.target.matches('#menu')) {
  var dropDown = document.getElementById("verticalNavBar");
    if (dropDown.classList.contains('showNav')) {
      dropDown.classList.remove('showNav');
    }
  }
}

function hideDrop(x,y) {
  if (x.matches) {
    document.getElementById("verticalNavBar").classList.remove('showNav');
  }
  if (y.matches) {
    document.getElementById("verticalNavBar").classList.remove('showNav');
  }
}

var undrop1025 = window.matchMedia("(min-width: 1025px)");
var undrop600 = window.matchMedia("(max-width: 600px)");
hideDrop(undrop1025,undrop600);
undrop1025.addListener(hideDrop);
undrop600.addListener(hideDrop);
//----------------------------------//



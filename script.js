/* skills, experience, education */
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemeu = document.getElementById("sidemenu");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/* sidemenu */
function openmenu(){
    sidemeu.style.right = "0px";
}

function closemenu(){
    sidemeu.style.right = "-200px";
}

/* gallery modal */
// get the modal
var modal = document.querySelector('.modal');
var modalImg = document.getElementById("modal-img");
var modalCaption = document.getElementById("modal-caption");

// get all image containers
var imageContainers = document.querySelectorAll('.image-container');

// loop through each image container and add click event listener
imageContainers.forEach(function(imageContainer) {
  var img = imageContainer.querySelector('img');
  img.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
    modalCaption.innerHTML = this.alt;
    document.body.classList.add('modal-open'); // add modal-open class to body
  });
});

// get the close button element
var closeBtn = document.querySelector('.close');

// close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open'); // remove modal-open class from body
});

// close the modal when clicking anywhere outside of the modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // remove modal-open class from body
  }
});

// slideshow functionality
var slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.querySelectorAll('.image-container img');
  var modalImg = document.getElementById("modal-img");
  var modalCaption = document.getElementById("modal-caption");

  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }

  modalImg.src = slides[slideIndex].src;
  modalCaption.innerHTML = slides[slideIndex].alt;
}
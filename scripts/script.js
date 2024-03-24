
//SLIDE CONTROLS
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}


//SECTION CONTROLS
function showSection(sectionId) {
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.top = "0%";
    }
}
function hideSection(sectionId) {
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.top = '-100%';
    }
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Ouverture du popup avec l'image et la description
function openPopup(description, imagePath) {
  var popup = document.getElementById('popup');
  var popupImage = document.getElementById('popup-image');
  var popupDescription = document.getElementById('popup-description');
  
  popup.style.display = "block";
  popupImage.src = imagePath;
  popupDescription.innerHTML = description;
}

// Fermeture du popup
function closePopup() {
  var popup = document.getElementById('popup');
  
  popup.style.display = "none";
}

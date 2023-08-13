if (screen.width > 700) {
  window.addEventListener('load', function() {
  setTimeout(function() {
  const windowHeight = window.innerHeight;
  const scrollAmount = windowHeight / 2;
  const scrollDuration = 1000; // Adjust this value to control the duration of the scroll (in milliseconds)
  const scrollInterval = 10; // Adjust this value to control the smoothness of the scroll

  let currentPosition = 0;
  const scrollStep = scrollAmount / (scrollDuration / scrollInterval);

  const intervalId = setInterval(function() {
  if (currentPosition >= scrollAmount) {
  clearInterval(intervalId);
  } else {
  currentPosition += scrollStep;
  window.scrollBy(0, scrollStep);
  }
  }, scrollInterval);
  }, 1000);
  });
};



var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const abtn = document.getElementById('propbtn');
const contactmodal = document.getElementById('contactmodal');
function openmod() {
  contactmodal.style.display = 'block';
};
btn.addEventListener('click' openmod());

AOS.init();

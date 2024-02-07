// searchbar desktop
const searchInput = document.getElementById('search-bar');

// Attach an event listener to the input element
searchInput.addEventListener('input', function() {
const searchText = this.value.toLowerCase(); // Retrieve the search text

// Iterate through each div element
const divs = document.querySelectorAll('.properties');
divs.forEach(function(div) {
const divText = div.textContent.toLowerCase(); // Get the div's text content

// Check if the div's text content contains the search text
if (divText.includes(searchText)) {
div.style.display = 'flex'; // Show the div
} else {
div.style.display = 'none'; // Hide the div
}
});
});








// for mobile searchbar
const searchInputmob = document.getElementById('search-bar-m');

// Attach an event listener to the input element
searchInputmob.addEventListener('input', function() {
const searchText = this.value.toLowerCase(); // Retrieve the search text

// Iterate through each div element
const divs = document.querySelectorAll('.properties');
divs.forEach(function(div) {
const divText = div.textContent.toLowerCase(); // Get the div's text content

// Check if the div's text content contains the search text
if (divText.includes(searchText)) {
div.style.display = 'flex'; // Show the div
} else {
div.style.display = 'none'; // Hide the div
}
});
});









// document.getElementById("selector").addEventListener("change", function() {
//   var selectedOption = document.getElementById("selector").value;
//   var alloption1 = document.getElementById('jersey');
//   var alloption2 = document.getElementById('jersey2');
//   var alloption3 = document.getElementById('penn');
//   var alloption4 = document.getElementById('penn2');
//
//   // Perform your desired action based on the selected option
//   switch(selectedOption) {
//     case "0":
//       alloption1.style.display="flex";
//       alloption2.style.display="flex";
//       alloption3.style.display="flex";
//       alloption4.style.display="flex";
//     break;
//     case "1":
//     alloption2.style.display="flex";
//     alloption1.style.display="flex";
//     alloption3.style.display="none";
//     alloption4.style.display="none";
//     break;
//     case "2":
//       alloption1.style.display="none";
//       alloption1.style.display="none";
//       alloption3.style.display="flex";
//       alloption4.style.display="flex";
//     break;
//     default:
//       alloption1.style.display="flex";
//       alloption2.style.display="flex";
//       alloption3.style.display="flex";
//       alloption4.style.display="flex";
//     break;
//   }
// });








// window.addEventListener('load', function() {
// setTimeout(function() {
// const windowHeight = window.innerHeight;
// const scrollAmount = windowHeight / 2;
// const scrollDuration = 1000; // Adjust this value to control the duration of the scroll (in milliseconds)
// const scrollInterval = 10; // Adjust this value to control the smoothness of the scroll
//
// let currentPosition = 0;
// const scrollStep = scrollAmount / (scrollDuration / scrollInterval);
//
// const intervalId = setInterval(function() {
// if (currentPosition >= scrollAmount) {
// clearInterval(intervalId);
// } else {
// currentPosition += scrollStep;
// window.scrollBy(0, scrollStep);
// }
// }, scrollInterval);
// }, 100);
// });








// var modal = document.getElementById("myModal");
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];
// // When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };








// form show mobile
var fbtnmobile = document.getElementById('fmodalmobile');
var fshowmobile = document.getElementById('iframecontainermobile');
var uparrow = document.getElementById('uparrow');
var downarrow = document.getElementById('downarrow');
function openfmodalmobile() {
if (fshowmobile.style.display === "none") {
fshowmobile.style.display = "block";
downarrow.style.display = "none";
uparrow.style.display = "inline";
}
else {
fshowmobile.style.display = "none";
uparrow.style.display = "none";
downarrow.style.display = "inline";
}
}

var inputBox = document.getElementById("inputBox");

var invalidChars = [
  "-",
  "e",
];

inputBox.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});
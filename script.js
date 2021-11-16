// var input = document.querySelector("#input");
// var result = document.querySelector("#result");
// input.addEventListener("input", function () {
//   result.textContent = "Nama: " + this.value;
// });

var input = document.querySelector("#input");
var result = document.querySelector("#result");
input.addEventListener("input", function () {
  input.value
    ? (result.innerText = "Nama: " + input.value)
    : (result.innerText = "");
});

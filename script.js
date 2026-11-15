const button = document.getElementById("myButton");
const count = document.getElementById("Count");
const reset = document.getElementById("reset");
let number = 0;
alert("Yay!");
button.addEventListener("click", function() {
    number = number+1;
    count.textContent=number;});
reset.addEventListener("click", function() {
    count.textContent = 0;
    number = 0;
});


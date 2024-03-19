const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0 - 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
//function that will generate random numbers from one to 3
function getRandomNumber() {
  return  Math.floor(Math.random() * colors.length);
  //Math.random gives numbers from 0 - 1 but we are looking for numbers between 0 - 3, so how do we do this
  //this can be solved by multiplying bybthe length of our colors
  //with the length added, values are given in decimals and needs to be rounded
  //Math.floor will be se in this case so that we only have round downs and no round up
}

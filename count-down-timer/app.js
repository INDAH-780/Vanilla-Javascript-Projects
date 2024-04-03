const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector(".deadline");
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2024, 4, 28, 17, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
giveaway.textContent = `giveaway ends on ${date} ${month} ${year} ${hours}: ${minutes}am`;

const futureTime = futureDate.getTime();

function getRemainingTime (){
  const today = new Date.getTime();
  const t = futureTime - today;
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinutes = 60 * 1000;
  let days = t / oneDay.toFixed;
  days = Math.floor(days);

  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinutes);
  let seconds = Math.floor((t % oneMinutes) / 1000);
}
getRemainingTime();

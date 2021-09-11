const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Septemeber",
  "October",
  "November",
  "December",
];
const dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector("#giveaway");

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const mins = document.querySelector("#mins");
const secs = document.querySelector("#secs");

const currentDates = new Date();
console.log(currentDates);
y = currentDates.getFullYear();
console.log(y);
m = currentDates.getMonth();
d = currentDates.getDay();
da = currentDates.getDate();
const futureDate = new Date(y, m, da + 10, 11, 30, 0);
console.log(futureDate);
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();
const month = futureDate.getMonth();
const day = futureDate.getDay();
const date = futureDate.getDate();
let sas = "am";
if (hour > 11) {
  sas = "pm";
}
giveaway.textContent = `Giveaway Ends on ${dayName[day]}, ${date} ${months[month]} ${year} ${hour}:${min}${sas}`;

function getRemaining() {
  let futureMs = futureDate.getTime();
  let currentMs = new Date().getTime();
  let remaining = futureMs - currentMs;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let daysLeft = Math.floor(remaining / oneDay);
  let hoursLeft = Math.floor((remaining % oneDay) / oneHour);
  let minsLeft = Math.floor((remaining % oneHour) / oneMin);
  let secsLeft = Math.floor((remaining % oneMin) / 1000);

  days.innerHTML = format(daysLeft);
  hours.innerHTML = format(hoursLeft);
  mins.innerHTML = format(minsLeft);
  secs.innerHTML = format(secsLeft);
  if (remaining < 0) {
    clearInterval(countDown);
    makeZero();
  }
}

function format(item) {
  if (item < 10) {
    return (item = `0${item}`);
  }
  return item;
}

let countDown = setInterval(getRemaining, 1000);
// getRemaining();
function makeZero() {
  days.innerHTML = "00";
  hours.innerHTML = "00";
  mins.innerHTML = "00";
  secs.innerHTML = "00";
}

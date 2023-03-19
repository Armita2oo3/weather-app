function changeCity(event) {
  event.preventDefault();
  let search = document.querySelector(".search");
  let city = document.querySelector(".city");
  city.innerHTML = `${search.value}`;
  let cityName = search.value;
  let key = "a39d99e6ced537cd2e2f653ab550f5cf";
  let unit = "metric";
  let link = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${key}`;
  axios.get(link).then(changeTempreture);
}
function changeTempreture(position) {
  let tempreture = document.querySelector(".zero");
  let newTempreture = Math.ceil(position.data.main.temp);
  tempreture.innerHTML = `${newTempreture}`;
}

let form = document.querySelector(".location");
form.addEventListener("submit", changeCity);

function showCurrentLocation(position) {
  let tempreture = document.querySelector(".zero");
  let newTempreture = Math.ceil(position.data.main.temp);
  tempreture.innerHTML = `${newTempreture}`;
  let city = document.querySelector(".city");
  city.innerHTML = `${position.data.name}`;
}
function getLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a39d99e6ced537cd2e2f653ab550f5cf`;
  axios.get(url).then(showCurrentLocation);
}
function showLocation() {
  navigator.geolocation.getCurrentPosition(getLocation);
}
let button = document.querySelector("button");
button.addEventListener("click", showLocation);

let calender = new Date();
let date = document.querySelector(".date");
let day = calender.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayOfWeek = days[day];
console.log(dayOfWeek);
let hour = calender.getHours();
let min = calender.getMinutes();
date.innerHTML = `${dayOfWeek} ${hour}:${min}`;

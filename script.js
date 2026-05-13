async function getWeather(){

  let city = document.getElementById("city").value;

  let apiKey = "44f3287dc6efb3ce428c1f9e3324e93b";

  let url =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let response = await fetch(url);

  let data = await response.json();

  document.getElementById("temp").innerHTML =
  data.main.temp + "°C";

  document.getElementById("condition").innerHTML =
  data.weather[0].main;

  document.getElementById("humidity").innerHTML =
  "Humidity: " + data.main.humidity + "%";

  document.getElementById("wind").innerHTML =
  "Wind Speed: " + data.wind.speed + " km/h";
}
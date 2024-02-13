
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBtn = document.querySelector(".search-btn");
const weatherImg = document.querySelector("#weather-img");
const inputText = document.querySelector("#input");
const tempValue = document.querySelector(".main-text h1");
const heading = document.querySelector(".main-text h3");
const humidityValue = document.querySelector("#humidity-no");
const windValue = document.querySelector(".wind-text h4");

async function checkWeather(city) {
  const response = await fetch(URL + `&q=${city}` + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  //   console.log(inputText.value);
  heading.innerText = inputText.value.toUpperCase();
  //   console.log(heading);
  tempValue.innerText = Math.floor(data.main.temp) + "℃";
  humidityValue.innerText = data.main.humidity + "%";
  windValue.innerText = data.wind.speed + " Km/H";

  if (data.weather[0].main == "Clouds") {
    weatherImg.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherImg.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImg.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherImg.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherImg.src = "images/mist.png";
  }
}
searchBtn.addEventListener("click", (e) => {
  //
  e.preventDefault();
  console.log("clicked");
  checkWeather(inputText.value);
});

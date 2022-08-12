fetchCityWeather("Kyiv");

let inputCity = document.querySelector(".city_input");

inputCity.addEventListener("change", () => {
  fetchCityWeather(inputCity.value);
});

function fetchCityWeather(cityName) {
  let weatherRequest = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=ua&APPID=5d066958a60d315387d9492393935c19`;

  fetch(weatherRequest)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".city").textContent = `Місто: ${data.name}`;
      document.querySelector(".widget_temp").textContent = `Температура:
      ${Math.round(data.main.temp)} °C`;
      document.querySelector(
        ".widget_pressure"
      ).textContent = ` Тиск: ${data.main.pressure} Пa`;
      document.querySelector(
        ".widget_humidity"
      ).textContent = `Вологість: ${data.main.humidity} %`;
      document.querySelector(".widget_descr").textContent = `Опис:
      ${data.weather[0].description}`;
      document.querySelector(
        ".widget_wind"
      ).textContent = `Швидкість вітру: ${data.wind.speed.toFixed(1)}
      м/с`;
      document.querySelector(
        ".widget_wind_degree"
      ).textContent = `Напрям вітру: ${data.wind.deg} °`;
      document
        .querySelector(".widget_icon_img")
        .setAttribute(
          "src",
          `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        );
    });
}

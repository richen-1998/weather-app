let weather = {
  apiKey: "f7fde65a20c2438095683640c4ddd432",
  fetchWeather: function (city) {
    fetch(
      "https://api.weatherbit.io/v2.0/current?city=" +
        city +
        "&key=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data.data[0])); // Accessing the first data object
  },
  displayWeather: function (data) {
    const { city_name, weather, temp, clouds, wind_spd } = data; // destructuring
    const { icon, description } = weather; //destructuring

    document.querySelector(".city").innerText = "Weather in " + city_name;
    document.querySelector(".icon").src =
      "https://cdn.weatherbit.io/static/img/icons/" + icon + ".png";

    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".clouds").innerText = "Humidity : " + clouds + "%";
    document.querySelector(".wind").innerText =
      "Wind Speed : " + wind_spd + "kmh";

    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + city_name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

// weather.fetchWeather("kathmandu");

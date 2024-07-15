let searchBox = document.querySelector(".search-box")

searchBox.addEventListener("keypress", setQuery)

function setQuery(e) {
    if(e.keyCode == 13) {
        getDataFromWeatherApi(searchBox.value)
    }
}

function getDataFromWeatherApi(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2`)
    .then(res => res.json())
    .then(res => displayResults(res));
}

function displayResults(weatherData) {
   let city = document.querySelector(".city")
   city.innerText = `${weatherData.name}, ${weatherData.sys.country}`

   let temp = document.querySelector(".temp")
   temp.innerText = `${Math.round(weatherData.main.temp)}°c`

   let weather = document.querySelector(".weather")
   weather.innerText = weatherData.weather[0].main

   let hiLow = document.querySelector(".hi-low")
   hiLow.innerText = `${Math.round(weatherData.main.temp_min)}°c / ${Math.round(weatherData.main.temp_max)}°c`


}
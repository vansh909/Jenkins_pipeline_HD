const apiKey = "526c53ee052ef28e4ea6246372b47b08";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURL + city +  `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/Hr";
    if(data.weather[0].main ==="Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main ==="Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main ==="Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main ==="Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main ==="Mist"){
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main ==="Haze"){
        weatherIcon.src = "images/Haze.png"
    }
    document.querySelector(".weather").style.display="block";
}

searchBtn.addEventListener("click", ()=>{

    checkWeather(searchBox.value);
})
searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

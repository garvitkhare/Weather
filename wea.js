const apikey = "11bc12ea096970921a494e41994841f0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".ask").style.display = "none";
        document.querySelector(".s").style.height = "300px";

    } else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            icon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            icon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            icon.src = "images/rain.png"

        }
        else if (data.weather[0].main == "Drizzle") {
            icon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            icon.src = "images/mist.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".ask").style.display = "none";
        document.querySelector(".s").style.height = "500px";
        

    }
}




searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value)
})



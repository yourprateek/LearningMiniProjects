console.log("JS Linked");

const apiKey = "ba6696d3776bd8159927bfd2352f07be";
const cityInput = document.getElementById("inputCity");
const weatherForm = document.querySelector(".weatherform");
const infocard = document.querySelector(".displayweather");

weatherForm.addEventListener( "submit", async (event) => {
    event.preventDefault();

    const city = cityInput.value;

    try {
        if(!city){
            throw new Error("Please enter a city name.");
        }
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        if(!response.ok){
            throw new Error("City Not found");    
        }

        const weatherData = await response.json();;

        //parameters
        const cityTimezone = weatherData.timezone;
        const weatherDescription = weatherData.weather[0].description;
        const weatherId = weatherData.weather[0].id;
        const cityFeelsLike = weatherData.main.feels_like;
        const cityTemp = weatherData.main.temp;

        const cityWindSpeed = weatherData.wind.speed;
        const cityHumidity = weatherData.main.humidity;
        const cityVisibility = weatherData.visibility;
        const cityPressure = weatherData.main.pressure;

        displayWeather(cityTemp, weatherDescription, cityFeelsLike, cityWindSpeed, cityHumidity, cityVisibility, cityPressure, weatherId);

    } catch (error) {
        displayError(error.message);
    }
});

function displayError(message){
    const errortext = document.createElement("p");
    errortext.textContent = message;
    errortext.classList.add("errortext");

    console.error(message);
    infocard.classList.remove("active");
    document.body.appendChild(errortext);
}

const tempPara =  document.querySelector(".temp");
const desPara = document.querySelector(".description");
const feelsLikePara = document.querySelector(".feelsLike");
const values = document.querySelectorAll(".value");
const imageDiv = document.querySelector(".main");

function displayWeather(cityTemp, weatherDescription, cityFeelsLike, cityWindSpeed, cityHumidity, cityVisibility, cityPressure, weatherId)
{
    infocard.classList.add("active");
    const error = document.body.querySelector(".errortext");
    if(error){
        document.body.removeChild(error);
    }

    if(weatherId > 199 && weatherId < 240){
        imageDiv.style.backgroundImage = `url("./weatherImg/lightning.jpg")`;
    }else if(weatherId > 299 && weatherId < 325){
        imageDiv.style.backgroundImage = `url("./weatherImg/drizzle.jpg")`;
    }else if(weatherId > 499 && weatherId < 532){
        imageDiv.style.backgroundImage = `url("./weatherImg/rain.jpg")`;
    }else if(weatherId > 599 && weatherId < 625){
        imageDiv.style.backgroundImage = `url("./weatherImg/snow.jpg")`;
    }else if(weatherId > 700 && weatherId < 785){
        imageDiv.style.backgroundImage = `url("./weatherImg/storm.jpg")`;
    }else if(weatherId == 800){
        imageDiv.style.backgroundImage = `url("./weatherImg/sunny.jpg")`;
    }else if(weatherId > 800 && weatherId < 805){
        imageDiv.style.backgroundImage = `url("./weatherImg/cloudy.jpg")`;
    }
    else{
        console.error("weatherId outOfBounds");
    }

    tempPara.textContent = cityTemp + "°";
    desPara.textContent  = weatherDescription;
    feelsLikePara.textContent = "Feels Like " + cityFeelsLike + "°";
    values[0].textContent = cityWindSpeed + " mps";
    values[1].textContent = cityHumidity + "%";
    values[2].textContent = (cityVisibility/1000).toFixed(1) + " km";
    values[3].textContent = cityPressure + " hPa";

}
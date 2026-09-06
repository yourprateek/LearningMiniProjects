console.log("JS Linked");

const apiKey = "ba6696d3776bd8159927bfd2352f07be";
const cityInput = document.querySelector(".inputCity");
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

        const weatherData = await response.json();
        console.log(response);
        console.log(weatherData);

    } catch (error) {
        displayError(error.message);
    }
});

function displayError(message){
    const errortext = document.createElement("p");
    errortext.textContent = message;
    errortext.classList.add("errortext");

    console.error(message);
    infocard.textContent = "";
    infocard.appendChild(errortext);
}
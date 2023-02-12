
const getData = async (query_city, query_country) => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query_city},${query_country}&appid=ce954931528b8e96d3f6c55b21a09fc2`)
    console.log(response)
    return response.data
}


const DOM_Elements = {
    city_display: '.city-display',
}

const displayCity = (query_city, query_country) => {
    var title = document.getElementById("city-display")
    title.innerHTML = `Today's Weather: ${query_city}, ${query_country}`
}

const displayHighLow = (low, high) => {
    console.log(low)
    console.log(high)
    var low_title = document.getElementById("low-title");
    var low_f = (low - 273.15)*(9/5) + 32;
    low_title.innerHTML = `<b style="color:blue">Low:</b> ${Math.round(low_f)}\u00B0F`;
    var high_title = document.getElementById("high-title");
    var high_f = (high - 273.15)*(9/5) + 32;
    high_title.innerHTML = `<b style="color:red">High:</b> ${Math.round(high_f)}\u00B0F`;
}

const displayForecast = (forecast) => {
    var forecast_section = document.getElementById("forecast-title")
    forecast_section.innerHTML = `<b style="color:purple">Forecast:</b> ${forecast}`
}

const displayHumidity = (humidity) => {
    var humidity_section = document.getElementById("humidity-title")
    humidity_section.innerHTML = `<b style="color:darkgreen">Humidity:</b> ${humidity}%`
}
const form = document.querySelector('#input-data')

form.addEventListener('submit', async (event) =>{
    event.preventDefault()
    let query_city = document.querySelector('#city-input')
    let query_country = document.querySelector('#country-input')
    const x = await getData(query_city.value, query_country.value)
    displayCity(x.name, x.sys.country)
    displayHighLow(x.main.temp_min, x.main.temp_max)
    displayForecast(x.weather[0].description)
    displayHumidity(x.main.humidity)

})


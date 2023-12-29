const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bfd38e842cmshcbcdb02cd82eaeep1110e9jsn860061fde5a8',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather=(city)=>{
cityName.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(Response => Response.json())

    .then(Response => {
        console.log(Response)

        cloud_pct.innerHTML = Response.cloud_pct
        temp.innerHTML = Response.temp
        temp2.innerHTML = Response.temp
        humidity.innerHTML = Response.humidity
        humidity2.innerHTML = Response.humidity
        min_temp.innerHTML = Response.min_temp
        max_temp.innerHTML = Response.max_temp
        wind_speed.innerHTML = Response.wind_speed
        wind_speed2.innerHTML = Response.wind_speed
        wind_degrees.innerHTML = Response.wind_degrees
        sunrise.innerHTML = Response.sunrise
        sunset.innerHTML = Response.sunset
    })

    .catch(err => console.log(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getweather(city.value);
})
getweather("pune");


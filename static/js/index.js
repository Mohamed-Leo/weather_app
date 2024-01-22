// main variables-----------
const weather_img = document.getElementById('weather_img');
const imgPath = 'static/images/';
// text variables---
const temperature = document.querySelector('.weather-info h1');
const city = document.querySelector('.weather-info p');
const humidityDeg = document.querySelector('.humidity-info h3');
const windSpeed = document.querySelector('.wind-info h3');

// video variables----
const video_weather = document.querySelector('video');
const clearVideo = "https://player.vimeo.com/external/488705633.sd.mp4?s=b0e49c53d2bdf37bdeb49a3165292def54f4166a&profile_id=165&oauth2_token_id=57447761";
const rainVideo = "https://player.vimeo.com/external/226685063.sd.mp4?s=bc98ef64010bd38654c1508c0d4bbce276424406&profile_id=164&oauth2_token_id=57447761";
const drizzleVideo = "https://player.vimeo.com/external/593842089.sd.mp4?s=1fa6fc203537730f9b6a6d5c71e2383f31cd5aaa&profile_id=165&oauth2_token_id=57447761";
const cloudVideo = "https://player.vimeo.com/external/316506213.sd.mp4?s=5cbb4c572719f6e5720468f2fbe231f729a52efc&profile_id=164&oauth2_token_id=57447761";
const snowVideo = "https://player.vimeo.com/external/316506213.sd.mp4?s=5cbb4c572719f6e5720468f2fbe231f729a52efc&profile_id=164&oauth2_token_id=57447761";
const mistVideo = "https://player.vimeo.com/external/194101383.sd.mp4?s=7825b2484d808b4682dac2c2754173b1aafa0d07&profile_id=164&oauth2_token_id=57447761";
const thunderVideo = "https://player.vimeo.com/external/456282308.sd.mp4?s=378aeca3ba9f63f65130f005f308057ff00e7e58&profile_id=164&oauth2_token_id=57447761";



// default weather-------------------------------------------------------------------------------------------
async function defaultWeather() {
    // get city fetched data-----------------
    const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=gaza&appid=da25a2ad109c717aa71a63d157db11b2&units=metric`;
    let fetchedData = await fetch(cityUrl);
    let data = await fetchedData.json();

    // assing data to html----
    temperature.innerHTML = `${Math.ceil(data.main.temp)}°C`;
    city.innerHTML  = data.name;
    humidityDeg.innerHTML = `${data.main.humidity}%`;
    windSpeed.innerHTML = `${data.wind.speed} km/h`;
    
    // condition to get weather status--
    let weatherStatus = data.weather[0].main.toLowerCase();
    weatherDetails(weatherStatus);
}
defaultWeather();




// get location----------------------------------------------------------------------------------------
const locationBtn = document.getElementById('location');

locationBtn.addEventListener('click' , ()=> {
    navigator.geolocation.getCurrentPosition(position => {
        // Show a map centered at latitude / longitude.
        const {latitude , longitude} = position.coords;
        // getting location of passed coordinates using geocoding Api
        const locationUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        // fetch locationUrl data---------
        fetch(locationUrl).then(res => res.json()).then(data => {
            // response------
            locationWeather(data.address);
        // error--------
        }).catch(() => console.log('error'));
    });
});


// display weather from current location---
function locationWeather(address) {
    let cityState = address.state.toLowerCase();
    // get city fetched data-----------------
    const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityState}&appid=da25a2ad109c717aa71a63d157db11b2&units=metric`;
    // fetch data------
    fetch(cityUrl).then(res=> res.json()).then (data =>{
        // assing data to html----
        temperature.innerHTML = `${Math.ceil(data.main.temp)}°C`;
        city.innerHTML  = data.name;
        humidityDeg.innerHTML = `${data.main.humidity}%`;
        windSpeed.innerHTML = `${data.wind.speed} km/h`;
        
        // condition to get weather status--
        let weatherStatus = data.weather[0].main.toLowerCase();
        weatherDetails(weatherStatus);
    });
}






// get city from input------------------------------------------------------------------------------------------
let input = document.querySelector('input');
let searchIcon = document.querySelector('.search-icon');
let errorMessage = document.querySelector('.error');

searchIcon.addEventListener('click' , ()=> {
    // get input value--
    let inputValue = input.value.trim('');
    // pass inputValue
    inputWeather(inputValue);
    // clear inputValue----
    input.value = ``;
});


// inputWeather weather------------
async function inputWeather(inputValue) {
    if(inputValue){
        // clear error h3---
        errorMessage.style.display = 'none';
        // get city fetched data-----------------
        const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=da25a2ad109c717aa71a63d157db11b2&units=metric`;
        let fetchedData = await fetch(cityUrl);
        // handle error------
        if(fetchedData.status == 404){
            errorMessage.style.display = 'block';
            errorMessage.innerHTML = 'enter valid city name';
        }
        else {
            // get data------
            let data = await fetchedData.json();
            // assing data to html----
            temperature.innerHTML = `${Math.ceil(data.main.temp)}°C`;
            city.innerHTML  = data.name;
            humidityDeg.innerHTML = `${data.main.humidity}%`;
            windSpeed.innerHTML = `${data.wind.speed} km/h`;

            // condition to get weather status--
            let weatherStatus = data.weather[0].main.toLowerCase();
            // pass weatherStatus to weatherDetails() to show image and video-
            weatherDetails(weatherStatus);
        }
    }
    else {
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'enter city name';
    }
};






// weatherStatus-----------------------------------------------------------------------------------------------
function weatherDetails(weatherStatus) {
    switch(weatherStatus){
        case 'clear' :
            weather_img.src = `${imgPath}clear.svg`;
            video_weather.src = clearVideo;
            // video_weather.src = clearVideo;
        break;
        case 'clouds' :
            weather_img.src = `${imgPath}clouds.svg`;
            video_weather.src = cloudVideo;
        break;
        case 'rain' :
            weather_img.src = `${imgPath}rain.svg`;
            video_weather.src = rainVideo;
        break;
        case 'snow' :
            weather_img.src = `${imgPath}snow.svg`;
            video_weather.src = snowVideo;
        break;
        case 'thunderstorm' :
            weather_img.src = `${imgPath}thunder.svg`;
            video_weather.src = thunderVideo;
        break;
        case 'drizzle' :
            weather_img.src = `${imgPath}drizzle.svg`;
            video_weather.src = drizzleVideo;
        break;
        case 'mist' :
            weather_img.src = `${imgPath}mist.svg`;
            video_weather.src = mistVideo;
        break;
        case 'smoke' :
            weather_img.src = `${imgPath}mist.svg`;
            video_weather.src = mistVideo;
        break;
        case 'haze' :
            weather_img.src = `${imgPath}mist.svg`;
            video_weather.src = mistVideo;
        break;
        case 'dust' :
            weather_img.src = `${imgPath}mist.svg`;
            video_weather.src = mistVideo;
        break;
        case 'fog' :
            weather_img.src = `${imgPath}mist.svg`;
            video_weather.src = mistVideo;
        break;
        case 'sand' :
            weather_img.src = `${imgPath}mist.svg`;
            video_weather.src = mistVideo;
        break;
        case 'ash' :
            weather_img.src = `${imgPath}mist.svg`;
            video_weather.src = mistVideo;
        break;
        case 'squall' :
            weather_img.src = `${imgPath}mist.svg`;
            video_weather.src = mistVideo;
        break;
        case 'tornado' :
            weather_img.src = `${imgPath}mist.svg`;
            video_weather.src = mistVideo;
        break;
    }
}




// loading---------------------------------------------------------------------------------------
window.onload = () => {
    $('.loading').fadeOut(1500);
};
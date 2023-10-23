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
const clearVideo = "//cdn-cf-east.streamable.com/video/mp4/mq9rtq.mp4?Expires=1698363007980&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=aa4MQz-OPX0V8wBTb9XSSz7URAq0PLNUf9pzGWxtHQfbZTYo80fPIdFPsWU~PwpFYxeSZEnwRNsR1uOLif9GKFtE02JNwaT68~jAJhaS~gn8Xxp9ZyybgCo~-3TVJcyMAFCbFo~gNB-gMVHvA2y7TysX7v4EtU6ebhYN1RTVadH5R-bu-B6jp8-X913KmFZuMGX~hachAfEKVGB39lACCejifBGOh13XePVNxcMUGTdbnyACKqNlDkMhCMpoc-brxFB5~TiSb6rIHCz08DdlukpPA0DWVzs58tk4-RsckP2An8lJHGRE5STQNwOJ1WDeCquTsIr7Cj5VWkOCMz9tuQ__";
const rainVideo = "//cdn-cf-east.streamable.com/video/mp4/b95yjt.mp4?Expires=1698363007984&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=QHWAOEGD4Buqn06IZDGmcdbGof1k-VXn8QPZjBMExvEh-pqYK8O-QGwrDCc~gbXtnrEcbeCEV0DK17Qq2oGM8~nceNgcD8BNS1Lz1u3OhMVRt0--0LvjrZPK3N69uh1jvhyK0F-utRgP2LmV16GGub5MX4hm5DVJ2z8gK6R3qVaR-YGCo~Z~e7Vipqa48eLBONDCwpKVfw~kUfKkimA7SGCVe3apXGlF9gnqyHLosfARp9poFXBkt0XJi3A0nnEHVqBEBi6g4rSWNpFeXvWPh768fYGj8oq1RA4xMplE-hun9itunSsMxuSF8LI3XqCApEBBofl8mA7PuAcztmFCbQ__";
const drizzleVideo = "//cdn-cf-east.streamable.com/video/mp4/e3155e.mp4?Expires=1698363007988&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=OI6VfM3BTxcADa81OgqdxavVzj2vhPl1i7reojNpt0zd3qTHnlg~K5ninTpoI9gboQztZDsOMk2dDz8DDcGbFLe1ilzo~RpgTkn8KzWBbafiHN651RBuAiX2FWLzzmqSn5QjqVBlpVOE0mrkaLSfOdaS6PjJ0-eLKBg7gKtlMmlc4IxxIuXHHwNfTDOoZ5SujogsXDQ966x0lvPkP2eZCUWlqBARdQnJo2m1nTtVAS7cCyW6cnIpj2YNukpt1ysN0Qz1GAW9uDsUvTt2cxgnTGCJEgGSn3w7Dsft4QmMy8l-CZlx3la3aPLLiAzXbTKc3JxdKjDohbPcarSFexm-uQ__";
const cloudVideo = "//cdn-cf-east.streamable.com/video/mp4/e5od6f.mp4?Expires=1698363007993&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=bb1ftknCxfHYzo1qzrzxZdhZgP8D5b4lxBR6a~-NZs8SLrTbQeRYQRzyV-dtcXj~cmV3PvQajir0IW-jwx7lHKkMZpAI3d11s77IMitOLyDxpqaLqGHXEFc-OVkyFxcuszFPoLWUbVmU9Ofep1gxbp1fGCIOofSWLsAxypc4fmeXdXh70I1DzhnZ1Cra3hqY~FNbBG2O1SVb~is3OdsWgLs4DUH-1sV~Mr3RVHTnauyCsPTLtw~XYwI8fs83OGZcmTUEifUIpD2M7CqMZ-Mn6ng0O16kfXlluMMY2uK3wBNDjOs0JkJoxKAfMZ86b-7qXjKPKsaJNhyKpqrnYwnJew__";
const snowVideo = "//cdn-cf-east.streamable.com/video/mp4/jjhsib.mp4?Expires=1698363008003&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=Al3cZ4r9ntsUce09-5FIoqTMb2vFcjRCmg~4GLpEoQt9Q1rgjqvvXxNa0p1JvKvXxwBYUr023KtPcPr1qEfUE0DPOf-zhYWViNHgwa5SiXJBEdVwhT2Si3B5IqVysp5YYtGpAug6RwbPE3CCMKpmS4GCwJo6HyhcGgOq6UX7SZz5-vqepFN0MOTP4mu6Gif86xaB-qEB6c1yzXiGwczmq9X8KZFKRQiDR9Ye-3tk12~hronPKzNmtnYJHCjV-whJgDmfG9jxg7q~y~QWeVylzLS77o-4XLiHmW8lQM8ft5Du~Svg3p5Gyl1af7OnWMaxSHkwliYZYkDa3IdGOtLZig__";
const mistVideo = "//cdn-cf-east.streamable.com/video/mp4/z90lck.mp4?Expires=1698363007998&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=jO6PP~mEx4Ajhmg9VvPv6Y55qB8hGw~jWy97DnJJWFnjNRlTf~nYtak1Fen0sTQ8uHlP7L4bl1SEwbLV8K47AeAyRK-kKvGfnO2cZE5CKsSgz7~JVdtpXd53pHFWFJ8O5XJ28vKT1qlOewSFgSqgFN~p5a29Fe5qmlBf686zm5tJadLjqRxUpiGITSpfpXep-cJZF0YI~3FDZMrP4JNdSwaLN5kzltH-VIV2-uUhgE7HReGLxxt9vDGHrVyKX8GehRxeeusdibM86ZyX4jtar6ngTUJxiNn2yj9GU0jllizsiKqZpDKuvNALASBs93xqtXJBIpVR1fmhR3YC4dk-YQ__";
const thunderVideo = "//cdn-cf-east.streamable.com/video/mp4/rw8fyy.mp4?Expires=1698363007975&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=PX45PEag2t0yD4Eqkg08k-6XJMfNo-nJ3Ay78G8wN5RMb7C4DikjLYMY8aHbxNKGK8Fqrl~GERTQX8o5aYUgbA4j~6IeBVbY0qaC2Oc8wFHhVBHkO0RZN01pK8yPOl54PQC-RDPA7GsJK52kLrzLs3-Ln3tCocSl9vOMmqVuKtxxIDhsMHUL1RT5VlbyBk8HK6O-MvvB0Bl~yNYZFthisfgdS0blxfrvx~1X3BjQ1T8YuTS5JzC7QG56hvldoVwXbF2qN7T6p8RbMStZygsU~xaOYMnhhj0zWjj6tL2qgMigtpywO76CQ~dlgI2ksh9nHd4kT0ST3b1m0BHMK-Q0lg__";



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
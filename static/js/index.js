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
const clearVideo = "//cdn-cf-east.streamable.com/video/mp4/mq9rtq.mp4?Expires=1697757660&Signature=c6DkKHV0FaTzaCIjjAqGmpJ4Mgq3yozLhCwQmwRWCZlYv45M7QmfjzH-lY4Yek2Q1jc~RS~KhoPWLBBrQY9nItVGnnYJ5Cv3P-w0AN6Yi~mRyt1bMIoMWGkcjji-xB6hKsOD4sLBFpkc1TBGMa4DNJJ-nDqVu9n5KCdIgFRlq8L8a22RS5nk3sxXegbXRZi-MvNHnLuVMy9pV3vM4cKytbKZaSwr4mSlx3SyiKUerJHr9KYLcY3EZz9wS43DNOaTlSc9Prd0ftuy37fkkPr~UXLrhTmxGS4UugBJGBIaBSx4IpsymXwtHwDRrvG4bl3yegrRxPip4KGlvxyFYFP-FA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ";
const rainVideo = "//cdn-cf-east.streamable.com/video/mp4/b95yjt.mp4?Expires=1697762460&Signature=PcLeRkNRPbvabAg9NKZGEH3VHsIRrdC2Il6o7vLchfYXHAw-OypkBgwovbTzEXetm6Lt-f360asYbFMrX9sIWCDeELKfERNca~PDOgUp2CXlm-V3Cmor1EXxJXFZduW~ToCb8rLbuXZ1zRIHNrR-yOf3Srtdu8KPYKPBSd4frXxBWSb0V1FfGvcgIgcYXwsba0M~5zqS~QZ~urbih~QrxvVZRh-njEhNQXWvBzdfnb8CX3RY107UrsTfDbMm9dWyGxEhLpvip8GNNiMoxH3lQ3j~qKL9KKryZ6FFF-tYVlvbGS7FgX2dPyS4g0JTtbr4fpePRlBPOcdcaklYoscoDw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ";
const drizzleVideo = "//cdn-cf-east.streamable.com/video/mp4/e3155e.mp4?Expires=1697762520&Signature=c-8XKRbbcuxXLMJhkw1b5hVhmsRAEqutQmExTZwRlAPAWFHj8jwg~d31-dqxOfwpDcHe13szB7-GWiWOcNzfglYs08t9UXqpP24Wu4-1A6kJW~h9tsdAghK9f5Y-cKYYOYn2vr2qIqfDmE9euwEyu8WyrdIacr0Yxf4SNqRg6WvWOoeRyTUoTNjeBXExxbvFb5iVvqjDx8kKbQ84YYmVgvsf37r9i4iItNovYfCJztxDDfOu7sNb~sZkejbnPSbdVdoxmXhDOVl5pBbHKildtfbkukQRNocgH96rT3PJEMJVHRilwJrxOY7gqboZQHEqElmeYZLilWlAb6I5uPauzQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ";
const cloudVideo = "//cdn-cf-east.streamable.com/video/mp4/e5od6f.mp4?Expires=1697762580&Signature=MU3gj6fbU9OjxBe~asgrSTCWJRcNy2pn5D4Ph8D9EpHV7T516YO6UUFHzKvSC1H5xS4I8j6oonKuul-Ah~ST7YmS93j4Ql4dJBLXpU7xMCwvSH6gttX4dGUt8xKou9vE~4gXOQ5OOlg~UbKa0DDc~HJiN5Ik3NwMtbxu6tLKHOXyAV9ehq2KUV-0jDov7SWBPSpmn2f7ibZ6FQI3edl61kYnVYvPK-9uL5vDGQGb-7BJ2VBhmDkBC60I-kNQvnXu2EHUAFF8MsFxaRVwqfJWystZ-Mcru82QYjG23l3p1~E6KIHaUXDIEtiVAUdzcY~ewHf~9LB6vQo3Gk0-eW~S6w__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ";
const snowVideo = "//cdn-cf-east.streamable.com/video/mp4/jjhsib.mp4?Expires=1697762640&Signature=Ss2-rOQVlX5-yFmMg3~v0pS9hfMyvXwe4Qk2bW4xpklqxaXPJ-I9s-V-3u-6lgBC27Axr0dLFK2AiBLbZ8LIy2nlKgUiX05~IPg7F5N6bQ5RBFuSe4yRC6jxwNtko3bpQHWBXaTiOa0j21F0bnBzP6MHxs6FZpenE-GRI3WaZD1XlJbG~pyBTd2FWaCPkEKkSkc-TOm3TrxfKrwPJk53cdQyx2twwejwp0LWpEuuzn1vQH1l~XkuWkO8IrCROMBTqxr30oAscU8~9KXDbvEmNJLdMqxR9ntQuz0E8NukKom~Z3nEXtxQ-v4YlwDjVhkgE~NYkG0N4T86Z7hzjXh4Zg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ";
const mistVideo = "//cdn-cf-east.streamable.com/video/mp4/z90lck.mp4?Expires=1697766780&Signature=JW98gdlI0jDE5E-yOFqjYgQE5gLba6uHi9zshkskPzarLIqIExvxwKaIRsqqGAxWGiOiBd0t7zOglw-UUNHcUlYqAGzaE68yWg1qNOHBDHAfqLzfGtEMLg~sDgbafcIx9~G1EVI8cSmqPlOiP-09FZfjcOjhn~KaCorZApO4iM~K7snyRSNxcz003vNMfPeASvPo7i~ceEHHSlzNeuStSYv102IA9UOx2~64smv1gTWRE0S77lUV5LTPJVJ~F7zyFMPaPTtbJGQqkdSta6q9NuuuOX1Bo9LDcdFWkkYtq0mBV6S-desm9~JfA-Srslz7TXideTHGmu3ghydC34S6ug__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ";
const thunderVideo = "//cdn-cf-east.streamable.com/video/mp4/rw8fyy.mp4?Expires=1697767080&Signature=coO8qHKq2aljiDyEna4athpEUJHz2dves76Px5pJixEhhGSdbueEMyveUsNkC1TbZfdQFUU5yKQVMRTXWODJ9WReiQ~jNun8AttxNpvIeCkFqxkKpC03dO6aGllYU6weAvh8HnTUOc4D2xcMHwxIOd-qQly1Asf2mSAoGpmBybybDEdgcHTjxvJ5gxenBATPl8sYbJ5a2FgjZXLpPia346sSqyFUuRrqKRpGqT5ozmpg5MdpI0Wm5TCMXuouVlUX3cQm7avC7uXNxJ-VDCUM-OWFNHzPFE3ppU-vhPSBFqp3NufNT5fBZTpMcON9TJq0DB8JRWndWFENxgL1VJlx0A__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ";



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
            // pass weatherStatus to weatherDetails() to show image and video
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
const API_KEY = "8d5e3972c3ba15506a6b037c7c8b6672";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${Math.floor(data.main.temp)} ${data.weather[0].main}`;
        city.innerText = data.name;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

let options = {
    enableHighAccuracy: true
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError, options);




console.log("js file linked | should be working properly");

function aktualnyrok() {
    document.getElementById("year").innerHTML = `ECO® ${new Date().getFullYear()}`
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function divchange(olddiv, nextdiv) {
    await delay(3000);
    olddiv.opacity = "0";
    olddiv.visibility = "hidden";
    await delay(2500);
    olddiv.display = "none";
    nextdiv.display = "flex";
    await delay(100);
    nextdiv.opacity = "1";
}

function getname() {
    let username = document.getElementById("name").value;
    let maindiv = document.getElementById("main-name").style;
    let nextdiv = document.getElementById("main-location").style;
    document.getElementById("realname").innerHTML = `${username}!`;
    document.getElementById("realname").style.opacity = "1";
    document.getElementById("done").style.opacity = "0";
    document.getElementById("name").style.opacity = "0";
    document.getElementById("main-text").innerHTML = "Thanks!";
    divchange(maindiv, nextdiv);
}

const api = {
    key: "0de0369a923d40a6fb404f2f4ecb18ea",
    decoder: "http://api.openweathermap.org/geo/1.0/direct?q=",
    url: "https://api.openweathermap.org/data/2.5/weather?",
}

async function checkWeather() {
    let userLocation = document.getElementById("user-location").value;
    const search = async() => {
        let response = await fetch(api.decoder + userLocation + `&appid=${api.key}`)
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse.length == 0) {
            document.getElementById("main-text-2").innerHTML = "Sorry, we couldn't find your location. Try again!";
        } else {
            let anotherResponse = await fetch(api.url + `lat=${jsonResponse[0].lat}&lon=${jsonResponse[0].lon}&units=metric&appid=${api.key}`)
            let jsonAnotherResponse = await anotherResponse.json();
            console.log(jsonAnotherResponse);
            let maindiv = document.getElementById("main-location").style;
            let nextdiv = document.getElementById("main-weather").style;
            document.getElementById("done-2").style.opacity = "0";
            document.getElementById("user-location").style.opacity = "0";
            document.getElementById("main-text-2").innerHTML = "Thanks!";
            divchange(maindiv, nextdiv);
        }
    }

    search();
}
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

let userLocation = document.getElementById("user-location").value;
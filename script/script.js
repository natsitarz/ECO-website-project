//{Mozliwosc 1: }
// var data = new Date();
// var rok = data.getFullYear();
//
// document.getElementById("year").innerHTML = "ECO® " + rok
////////////////////////////////
//{Mozliwosc 2: }
// function rok() {
//    return Date().getFullYear()
//}
// document.getElementById("year").innerHTML = `ECO® ${rok()}`
////////////////////////////////

//{Mozliwosc 3: }
function aktualnyrok() {
    document.getElementById("year").innerHTML = `ECO® ${new Date().getFullYear()}`
}

console.log("js file linked | should be working properly");
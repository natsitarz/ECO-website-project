//{Mozliwosc 1: }
// var data = new Date();
// var rok = data.getFullYear();
////////////////////////////////
//{Mozliwosc 2: }
// function rok() {
//    return Date().getFullYear()
//}

//{Mozliwosc 3: }
function aktualnyrok() {
    document.getElementById("year").innerHTML = `ECO® ${new Date().getFullYear()}`
}

console.log("js file linked | should be working properly");
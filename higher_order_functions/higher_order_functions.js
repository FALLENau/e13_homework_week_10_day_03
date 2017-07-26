// setTimeout(function() {
//   console.log("I waited for 1 second");
// }, 1000);

var logRed = function() {
  console.log("It's red!");
}

var logNotRed = function() {
  console.log("It's NOT red!");
}

var redChecker = function(colour, isRed, isNotRed){
  if(colour.toLocaleLowerCase() === "red"){
    isRed();
  }
  else{
    isNotRed();
  }
}//added the .toLocaleLowerCase, so actsept any type of string thathas red.

redChecker("Red", logRed, logNotRed);

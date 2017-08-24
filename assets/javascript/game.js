// Variables
var wins = 0;
var losses = 0;
var numberToMatch = 0;
var userCurrentNumber;
var c1Number = 0;
var c2Number = 0;
var c3Number = 0;
var c4Number = 0;

// Number to Match
var numberToMatchOptions = [19, 50, 100, 120];
var incrementNumber = numberToMatchOptions[Math.floor(Math.random() * numberToMatchOptions.length)];

// Display Number to Match
numberToMatch = incrementNumber;
$(".number").text("Mine " + numberToMatch + " Crystals to Win!");

var crystalNumberTotal = 0;

 // Loop to get random number assigned to crystal 
var numberOptions = [];
for (var i = 1; i < 13; i++) {
	numberOptions.push(i);
}

// Images
var imageOptions = ["./assets/images/chrysocolla.jpg",
	"./assets/images/labradoride.jpg",
	"./assets/images/roseQuartz.jpg",
	"./assets/images/topaz.jpg"];

// For loop to create 4 crystals
for (var i = 0; i < 4; i++) {
	var imageCrystal = $("<img>");
	imageCrystal.addClass("crystal-image");
	imageCrystal.attr("src", imageOptions[i]);
	imageCrystal.attr("data-crystalvalue", numberOptions[Math.floor(Math.random() * numberOptions.length)]);
	$(".crystalDiv").append(imageCrystal);
}

// Click event function
$(".crystal-image").on("click", function() {
	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);
	crystalNumberTotal += crystalValue;
	$(".score").text("You have mined " + crystalNumberTotal + " Crystals!");

	if (crystalNumberTotal === numberToMatch) {
		alert("You Win!");
		wins++;
	} else if (crystalNumberTotal > numberToMatch) {
		alert("You Lose!");
		losses++;
	}

	$(".winsAndLosses").text("Wins: " + wins + " Losses: " + losses);

	if (checkForReset()) {
		resetGame();
	}
})

// Reset Function
function checkForReset() {
	return (crystalNumberTotal >= numberToMatch)
}

function resetGame() {
	crystalNumberTotal = 0;

	// Number to Match
	var numberToMatchOptions = [19, 50, 100, 120];
	var incrementNumber = numberToMatchOptions[Math.floor(Math.random() * numberToMatchOptions.length)];

	// Display Number to Match
	numberToMatch = incrementNumber;
	$(".number").text("Mine " + numberToMatch + " Crystals to Win!");
}

//pulls in the twitter key data from keys.js
var twitter_keys = require("./keys.js");
	console.log(twitter_keys);
var twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");
var fsPackage = require("fs");
var inputString = process.argv;
//var client = new Twitter ({twitter_keys});

//command inputs stored here for my-tweets, spotify-this-song, movie-this, do-what-it-says
var userInput = inputString[2];
//spotify song name stored here
var userSong = inputString[3];

//create a switch-case statement to direct which function gets run
switch (action) {
	case "my-tweets":
		philTweets();
		break;

	case "spotify-this-song":
		spotifySong();
		break;

	case "movie-this":
		movieInfo();
		break;	

	case "do-what-it-says":
		randomText();
		break;
}

//function to pull last 20 tweets
function philTweets() {

}//end philTweets

//function to display song info
function spotifySong() {

}//end spotifySong

//function to display movie info
function movieInfo() {

}//end movieInfo

//function to display info in random.txt
function randomText() {

}//end randomText





//requires the twitter NPM package

var myTweets = {screen_name: 'pakmania'};

twitter.get('statuses/user_timeline', myTweets, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    console.log(response);
  }
});

// if (userInput === "my-tweets") {
// 	console.log("Twitter stuff here");
// }

// else if (userInput === "spotify-this-song") {
// 	console.log("Spotify stuff here");
// }

// else if (userInput === "movie-this") {
// 	console.log("movie stuff here");
// }

// else if (userInput === "do-what-it-says") {
// 	console.log("read random.txt file");
// }

// else {
//   //"Not a recognized command";
// }

// //console.log(//output);

// spotify.lookup({
// 	type: "track",
// 	id: "pinball map"
// 	}, function(err, data) {
// 		if (err) {
// 			console.log("Error occurred: " + err);
// 			return;
// 		}		

// 		else {
// 			console.log(JSON.stringify(data, null, 2));
// 		}
//  });//end lookup

// spotify.search({
// 	type: "track",
// 	query: "pinball map"
// 	}, function(err, data) {
// 		if (err) {
// 			console.log("Error occurred: " + err);
// 			return;
// 		}		

// 		else {
// 			console.log(JSON.stringify(data, null, 2));
// 		}


// });//end search



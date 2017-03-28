//pulls in the twitter key data from keys.js
var twitter_keys = require("./keys.js");
	console.log(twitter_keys);
var twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");
var inputString = process.argv;
//var client = new Twitter ({twitter_keys});

//command inputs stored here for my-tweets, spotify-this-song, movie-this, do-what-it-says
var userInput = inputString[2];
//spotify song name stored here
var userSong = inputString[3];



if (userInput === "my-tweets") {
	//run this code or output
}

else if (userInput === "spotify-this-song") {

}

else if (userInput === "movie-this") {

}

else if (userInput === "do-what-it-says") {

}

else {
  //"Not a recognized command";
}

console.log(//output)


spotify.search({
	type: "track",
	query: "pinball map"
	}, function(err, data) {
		if (err) {
			console.log("Error occurred: " + err);
			return;
		}		

		else {
			console.log(JSON.stringify(data, null, 2));
		}


});//end search


// //requires the twitter NPM package
// var Twitter = require("twitter"); 

// var myTweets = {screen_name: 'pakmania'};
// console.log(myTweets);
// twitter.get('statuses/user_timeline', myTweets, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//     console.log(response);
//   }
// });
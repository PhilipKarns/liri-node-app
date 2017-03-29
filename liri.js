//pulls in the twitter key data from keys.js
var twitter_keys = require("./keys.js");
	console.log(twitter_keys);
var Twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");
var fsPackage = require("fs");
var inputString = process.argv;

//command inputs stored here for my-tweets, spotify-this-song, movie-this, do-what-it-says
var userInput = inputString[2];
//spotify song name stored here
var userSong = [];

//create a switch-case statement to direct which function gets run
switch (userInput) {
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
	var params = {screen_name: 'pakmania10', count: 20};

	var client = new Twitter(twitter_keys.twitterKeys);

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  		for (i = 0; i<tweets.length; i++) {
	  			console.log(tweets[i].created_at);
	  			console.log(tweets[i].text);
	  			console.log();
	  		}
	  }
	});
}//end philTweets


//function to display song info ()
//example link https://api.spotify.com/v1/albums/1aK0ZfM3mY983J4cKoTHfy
//want: data.artists.name, data.tracks.items.name(for song name), tracks.items.preview_url, data.name (for album name)
function spotifySong() {
	//for loop to capture song title and place in array
	for (i = 3; i < inputString.length; i++) {
	userSong.push(inputString[i]);
}

	spotify.search({
	type: "track",
	query: userSong},
	function(err, data) {
		if (err) {
			console.log("Error occurred: " + err);
			return;
		}		

		else {
			for (i = 0; i < data.length; i++) {
			// 	console.log(data[i]);
			//console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
			
			}
			console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
			console.log("Song Name: " + data.tracks.items[0].name);
			console.log("Preview Song: " + data.tracks.items[0].preview_url);
			console.log("Album: " + data.tracks.items[0].album.name);
		}

	});//end spotify.search
}//end spotifySong

//function to display movie info
function movieInfo() {

}//end movieInfo

//function to display info in random.txt
function randomText() {

}//end randomText





//requires the twitter NPM package



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



//pulls in the twitter key data from keys.js
var twitter_keys = require("./keys.js");
var Twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");
var fs = require("fs");
var inputString = process.argv;

//command inputs stored here for my-tweets, spotify-this-song, movie-this, do-what-it-says
var userInput = inputString[2];
//spotify song or movie name stored here
var userData = [];

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
	userData.push(inputString[i]);
	
}
	//search spotify for the user's input
	spotify.search({
	type: "track",
	query: userData},
	function(err, data) {
		if (err) {
			console.log("Error occurred: " + err);
			return;
		}		

		else {
			 
			console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
			console.log("Song Name: " + data.tracks.items[0].name);
			console.log("Preview Song: " + data.tracks.items[0].preview_url);
			console.log("Album: " + data.tracks.items[0].album.name);
		}
	});//end spotify.search
}//end spotifySong

//function to display movie info

function movieInfo() {
	//empty variable for holding movie name
	var movieName = "";
	var rottenTomatoes = "";

	//loop through all words in inputString and + them together
	for (var i = 3; i < inputString.length; i++) {
		if (i > 3 && i < inputString.length) {
			movieName = movieName + "+" + inputString[i];
			rottenTomatoes = rottenTomatoes + "_" + inputString[i];
			console.log(rottenTomatoes);
		}
		else if (i = 3){
			movieName += inputString[i];
			rottenTomatoes += inputString[i];
		}

		else if (inputString.length < 3) {
			console.log("http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&r=json");
		}
	}

	var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";
	console.log(queryURL);
	var rottenTomatoesUrl = "https://www.rottentomatoes.com/m/" + rottenTomatoes;
	console.log(rottenTomatoesUrl);
		request(queryURL, function(error, response, body) {
			console.log("Title: " + JSON.parse(body).Title);
    		console.log("Year: " + JSON.parse(body).Year);
    		console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    		console.log("Country: " + JSON.parse(body).Country);
    		console.log("Language: " + JSON.parse(body).Language);
    		console.log("Plot: " + JSON.parse(body).Plot);
    		console.log("Actors: " + JSON.parse(body).Actors);
    		console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    		console.log("Rotten Tomatoes URL: " + rottenTomatoesUrl);
    	});//end request
    		
}; //end movieInfo

//function to display info in random.txt
function randomText() {
	fs.readFile("random.txt", "utf8", function(error, data) {
		
		//split data by commas
		var dataArr = data.split(",");
		
	//search spotify for song
	spotify.search({
		type: "track",
		query: dataArr[1]},
		function(err, data) {
			if (err) {
				console.log("Error occurred: " + err);
				return;
			}		

			else {
				
				console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
				console.log("Song Name: " + data.tracks.items[0].name);
				console.log("Preview Song: " + data.tracks.items[0].preview_url);
				console.log("Album: " + data.tracks.items[0].album.name);
			}
	});//end spotify.search
	})//end readFile
}//end randomText






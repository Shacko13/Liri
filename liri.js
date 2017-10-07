
var keys = require('./keys.js');

var command = process.argv[2];

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotifyKey);

var client = new Twitter(keys.twitterKeys);

var params = {screen_name: 'sshackenstein'};

// Getting timeline statuses
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error && command === "my-tweets") {
			//console.log(tweets);
			for (var i = 0; i < tweets.length; i++) {
				console.log(' ');
				console.log(tweets[i].created_at + "\n" + tweets[i].text);
				console.log(' ');
				
			}
		}
	});	

if(command === "spotify-this-song") {

spotify.search({ type: 'track', query: 'Truckin' }, function(err, data) {
  if (!err) {
     var musicInfo = data.tracks.items;

     for (var j = 0; j < musicInfo.length; j++) {
      console.log(" ");
      console.log("Artist(s): " + musicInfo[j].artists[0].name); 
      console.log("Song name: " + musicInfo[j].name);
      console.log("Preview Link: " + musicInfo[j].preview_url);
      console.log("Album: " + musicInfo[j].album.name + "\n");
     }
    } 
});
}



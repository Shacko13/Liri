// Grab the keys file
// Grab the npm packages
var keys = require("./keys.js");
	//console.log(keys);
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs - require('fs');
var parameters = process.argv.slice(3);



var action = process.argv[2];
	switch(action) {
	case 'my-tweets' :
	  myTweets();
	  break;
	case 'spotify-this-song' :
	  myMusic();
	  break;
	case 'movie-this' :
	  myMovie();
	  break;
	case 'do-what-it-says' :
	  doWhat();
	  break;

	};
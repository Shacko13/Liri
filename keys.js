console.log('this is loaded');

var twitterKeys = {
  consumer_key: 'nz9ekvE8WIzSQzwP77MEl2tS8',
  consumer_secret: '1Y273l8hFMV3ZFGsGlSd8i9Rr3T1MEvSSjP9woUCL7KVM8cgWe',
  access_token_key: '914304313798864896-MySTdfnaP3UtTIRNKlEazb2Mel7fjCY',
  access_token_secret: 'vI1XcRIpvEmESu596AtMWZJ2HfB7LJLC2UUli6qzK0gql',
}

module.exports = twitterKeys;

var spotifyApi = new SpotifApi({
  clientId : '',
  clientSecret : '',
  redirectUri : 'http://www.example.com/callback'
});

module.exports = SpotifyApi;

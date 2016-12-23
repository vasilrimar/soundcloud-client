import SoundCloud from 'soundcloud';

export function auth() {
	SoundCloud.connect().then((session) => {
		fetchMe(session);
	})
}

function fetchMe(session) {
	fetch('http://api.soundcloud.com/me?oauth_token=' + session.oauth_token)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		})
}
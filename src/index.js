import SoundCloud from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import { Provider } from 'react-redux';
import * as actions from './actions';
import { CLIENT_ID, REDIRECT_ID } from './constants/auth';
import Stream from './components/Stream';

SoundCloud.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_ID });

const tracks = [
	{
		title: 'Some track'
	},
	{
		title: 'Some other track'
	}
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
	<Provider store={store}>
		<Stream/>
	</Provider>,
	document.getElementById('app')
)

module.hot.accept();
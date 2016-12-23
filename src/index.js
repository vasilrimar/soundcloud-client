import SoundCloud from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import { CLIENT_ID, REDIRECT_ID } from './constants/auth';
import Stream from './components/Stream';
import App from './components/App';
import Callback from './components/Callback';

SoundCloud.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_ID });

const store = configureStore({
	track: [
		{ id: 1, title: 'Fuck'}
	]
});
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Stream} />
        <Route path="/" component={Stream} />
        <Route path="/callback" component={Callback} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
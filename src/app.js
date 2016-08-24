import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as localStore from './localStore';
import * as actions from './actions';
import * as reducers from './reducers';
reducers.routing = routerReducer;

import App from './components/App';
import NewMeetupModal from './components/NewMeetupModal';
import EditMeetupModal from './components/EditMeetupModal';

const store = createStore(combineReducers(reducers), localStore.get());
const history = syncHistoryWithStore(browserHistory, store);

const routes = (<Route path='/' component={App}>
	<Route path='/new' component={NewMeetupModal} />
	<Route path='/edit/:meetupId' component={EditMeetupModal} />
</Route>);

function run() {
	let state	= store.getState();

	localStore.set(state, ['meetups']);

	ReactDOM.render((<Provider store={store}>
		<Router history={history}>
			{routes}
		</Router>
	</Provider>), document.getElementById('root'));
}

run();

store.subscribe(run);
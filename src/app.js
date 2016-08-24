import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as localStore from './localStore';
import * as reducers from './reducers';
import * as actions from './actions';

import App from './components/App';

const store = createStore(combineReducers(reducers), localStore.get());

function run() {
	let state	= store.getState();

	localStore.set(state, ['meetups']);

	ReactDOM.render((<Provider store={store}>
		<App>
		
		</App>
	</Provider>), document.getElementById('root'));

	console.log(state);
}

run();

store.subscribe(run);

let count = 0;

window.add = () =>
	store.dispatch(actions.addMeetup({
		name: 'meetup ' + (++count),
		desc: 'sample meetup',
		capacity: 20,
		location: 'Roker Park',
		start: 'Friday',
		end: 'Saturday'
	}));
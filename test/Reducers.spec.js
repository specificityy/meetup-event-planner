import React from 'react';
import test from 'tape';
import { createStore, combineReducers } from 'redux';

import * as reducers from '../src/reducers';
import * as actions from '../src/actions';

import state from './mocks/mock-state';

test('Reducers work correctly', t => {
  const store = createStore(combineReducers(reducers), state);
  
  // add
  const newMeetup = { name: 'abc' },
        addMeetup = store.dispatch(actions.addMeetup(newMeetup));
  t.equal(store.getState().meetups.length, 4, 'can add meetups');
  
  // edit
  const toEdit = Object.assign({}, store.getState().meetups[3], { name: 'xyz' }),
        editMeetup = store.dispatch(actions.editMeetup(toEdit));
  t.equal(store.getState().meetups[3].name, 'xyz', 'can edit meetups');

  // delete
  const deleteMeetup = store.dispatch(actions.deleteMeetup(toEdit.id));
  t.equal(store.getState().meetups.length, 3, 'can delete meetups');
  
  t.end();
});
import React from 'react';
import test from 'tape';
import { shallow, render } from 'enzyme';

import { MeetupsList } from '../src/components/MeetupsList';
import state from './mocks/mock-state';

test('<MeetupsList /> renders correctly', t => {
  const props = {
    meetups: state.meetups
  };
  const wrapper = render(<MeetupsList {...props} />);
  t.equal(wrapper.find('.container').length, 1, 'has a container div');
  // t.equal(state, 1, 'has a container div');
  t.end();
});
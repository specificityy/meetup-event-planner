import React from 'react';
import test from 'tape';
import { shallow, render, mount } from 'enzyme';
import { jsdom } from 'jsdom';

global.window = global.document = jsdom();

import { Navbar } from '../src/components/Navbar';
import state from './mocks/mock-state';

test('<Navbar /> renders correctly', t => {
  const props = {
    onFilter: () => {}
  }
  const mountWrapper = mount(<Navbar {...props} />);

  // const renderWrapper = render(<Navbar />);
  const searchInput = mountWrapper.find('input[type="search"]');
  t.equal(searchInput.length, 1, 'has a search input');

  const newMeetupBtn = mountWrapper.find('.btn');
  t.equal(newMeetupBtn.length, 1, 'has a new meetup button');

  // newMeetupBtn.simulate('click');

  t.end();
});
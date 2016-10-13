import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import App from '../src/components/App';
import MeetupsList from '../src/components/MeetupsList';
import Navbar from '../src/components/Navbar';

test('<App /> renders correctly', t => {
  let wrapper = shallow(<App />);
  t.equal(wrapper.find(Navbar).length, 1, 'has a Navbar component');
  t.equal(wrapper.find(MeetupsList).length, 1, 'has a MeetupsList component');
  t.end();
});
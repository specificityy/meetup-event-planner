import React from 'react';
import MeetupsList from './MeetupsList';
import Navbar from './Navbar';

const App = ({ deckId, children }) => {
  return (<div>
  	<Navbar />
  	<MeetupsList />
  	{children}
  </div>);
};

export default App;
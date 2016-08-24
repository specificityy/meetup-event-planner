import React from 'react';
import { connect } from 'react-redux';
import VisibleMeetups from './VisibleMeetups';
import Navbar from './Navbar';

const mapStateToProps = (props/*, { params: { deckId } }*/) => ({
	// deckId
});


const App = ({ deckId, children }) => {
  return (<div>
  	<Navbar />
  	<VisibleMeetups />
  </div>);
};

export default connect(mapStateToProps)(App);
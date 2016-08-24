import React from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
	onFilter: query => dispatch(filterMeetups(query))
});

const Navbar = ({ onFilter }) => {
	return (<nav className="navbar navbar-default">
	  <div className="container">
	    <button type="button" className="btn btn-default navbar-btn"> ✚ New Meetup </button>
	    <form className="navbar-form navbar-right" role="search">
			  <div className="form-group">
			    <input type="search" className="form-control" placeholder="Search" />
			  </div>
			</form>
	  </div>
	</nav>);
};

export default connect(null, mapDispatchToProps)(Navbar);
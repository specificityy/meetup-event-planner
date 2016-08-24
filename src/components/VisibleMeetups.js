import React from 'react';
import Meetup from './Meetup';
import { connect } from 'react-redux';

const mapStateToProps = ({ meetups }) => ({
	meetups
});

const Meetups = ({ meetups }) => {
	return (<div className='container'>
		<div className='row'>
			{meetups.map(m => <Meetup meetup={m} key={m.id} />)}
		</div>
	</div>);
};

export default connect(mapStateToProps)(Meetups);
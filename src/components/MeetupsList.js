import React from 'react';
import { connect } from 'react-redux';
import fuzzysearch from 'fuzzysearch';
import Meetup from './Meetup';
import { deleteMeetup } from '../actions';

const matches = (filter, meetup) =>
	fuzzysearch(filter, meetup.name) ||
	fuzzysearch(filter, meetup.desc) ||
	fuzzysearch(filter, meetup.location) ||
	fuzzysearch(filter, meetup.date) ||
	fuzzysearch(filter, meetup.time);

const mapStateToProps = ({ meetups, meetupFilter }) => ({
	meetups: meetups.filter(m => matches(meetupFilter, m))
});

const mapDispatchToProps = dispatch => ({
	onDelete: id => dispatch(deleteMeetup(id))
})

const Meetups = ({ meetups, onDelete }) => {
	return (<div className='container'>
		<div className='row'>
			{meetups.map(m => <Meetup meetup={m} onDelete={onDelete} key={m.id} />)}
		</div>
	</div>);
};

export default connect(mapStateToProps, mapDispatchToProps)(Meetups);
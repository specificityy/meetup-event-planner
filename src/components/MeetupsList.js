import React from 'react';
import { connect } from 'react-redux';
import fuzzysearch from 'fuzzysearch';
import Meetup from './Meetup';
import { deleteMeetup } from '../actions';

const matches = (filter, meetup) =>
	fuzzysearch(filter, meetup.name.toLowerCase()) ||
	fuzzysearch(filter, meetup.desc.toLowerCase()) ||
	fuzzysearch(filter, meetup.location.toLowerCase()) ||
	fuzzysearch(filter, meetup.date.toLowerCase()) ||
	fuzzysearch(filter, meetup.time.toLowerCase());

const mapStateToProps = ({ meetups, meetupFilter }) => ({
	meetups: meetups.filter(m => matches(meetupFilter.toLowerCase(), m))
});

const mapDispatchToProps = dispatch => ({
	onDelete: id => dispatch(deleteMeetup(id))
})

export const MeetupsList = ({ meetups, onDelete }) => {
	return (<div className='container'>
		<div className='row'>
			{meetups.map(m => <Meetup meetup={m} onDelete={onDelete} key={m.id} />)}
		</div>
	</div>);
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetupsList);
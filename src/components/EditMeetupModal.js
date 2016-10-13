import { connect } from 'react-redux';
import MeetupModal from './MeetupModal';
import { editMeetup, deleteMeetup } from '../actions';

const mapStateToProps = ({ meetups }, { params: { meetupId } }) => ({
	meetup: meetups.filter(m => m.id == meetupId)[0] 
});

const mapDispatchToProps = dispatch => ({
	onSave: meetup => dispatch(editMeetup(meetup)),
	onDelete: id => dispatch(deleteMeetup(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MeetupModal);
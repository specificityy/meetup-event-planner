import { connect } from 'react-redux';
import MeetupModal from './MeetupModal';
import { addMeetup } from '../actions';

const mapStateToProps = () => ({
	meetup: {}
});
const mapDispatchToProps = dispatch => ({
	onSave: meetup => dispatch(addMeetup(meetup))
});

export default connect(mapStateToProps, mapDispatchToProps)(MeetupModal);
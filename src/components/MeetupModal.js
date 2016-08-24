import React from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';

const MeetupModal = React.createClass({
	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.name).focus();
	},
	render() {
		let { meetup } = this.props;
		if (!meetup.date) {
			let dt = new Date;
			meetup.date = `${dt.getFullYear()}-${('0' + (dt.getMonth() + 1)).slice(-2)}-${('0'+dt.getDate()).slice(-2)}`;
			meetup.time = `${('0' + dt.getHours()).slice(-2)}:00`;
		}

		return (<div className='modal' style={{display: 'block'}}>
		  <div className='modal-dialog'>
		    <div className='modal-content'>
		      <div className='modal-header'>
		        <Link to='/' className='close' data-dismiss='modal' aria-hidden='true'>×</Link>
		        <h2 className='modal-title'>Meet-Up</h2>
		      </div>
		      <div className='modal-body'>
			       
			       <form className='form-horizontal'>
						  <fieldset>
						    <div className='form-group'>
						      <label htmlFor='name' className='col-md-2 control-label'> Name </label>
						      <div className='col-md-10'>
						        <input type='text' className='form-control' ref='name' defaultValue={meetup.name} />
						      </div>
						    </div>
						    <div className='form-group'>
						      <label htmlFor='desc' className='col-md-2 control-label'> Description </label>
						      <div className='col-md-10'>
						        <textarea className='form-control' rows='3' ref='desc' defaultValue={meetup.desc}></textarea>
						      </div>
						    </div>
						    <div className='form-group'>
						      <label htmlFor='capacity' className='col-md-2 control-label'> Capacity </label>
						      <div className='col-md-2'>
						        <input type='number' className='form-control' ref='capacity' defaultValue={meetup.capacity} />
						      </div>
						    </div>
						    <div className='form-group'>
						      <label htmlFor='location' className='col-md-2 control-label'> Location </label>
						      <div className='col-md-10'>
						        <input type='text' className='form-control' ref='location' defaultValue={meetup.location} />
						      </div>
						    </div>
						    <div className='form-group'>
						      <label htmlFor='date' className='col-md-2 control-label'> From / To </label>
						      <div className='col-md-5'>
						        <input type='date' className='form-control' ref='date' defaultValue={meetup.date} />
						      </div>
						      <div className='col-md-5'>
						        <input type='time' className='form-control' ref='time' defaultValue={meetup.time} />
						      </div>
						    </div>
						  </fieldset>
						</form>

		      </div>
		      <div className='modal-footer'>
		        <Link to='/' className='btn btn-default' data-dismiss='modal'> Cancel </Link>
		        <button className='btn btn-primary' onClick={this.onSave}> Save </button>
		      </div>
		    </div>
		  </div>
		</div>);
	},

	onSave() {
		let refs = this.refs,
				props = this.props,
				findNode = ReactDOM.findDOMNode;

		props.onSave({
			name: findNode(refs.name).value,
			desc: findNode(refs.desc).value,
			capacity: findNode(refs.capacity).value,
			location: findNode(refs.location).value,
			date: findNode(refs.date).value,
			time: findNode(refs.time).value
		});

		let route = props.meetup ? `/edit/${props.meetup.id}/` : '/new';
		browserHistory.push('/meetup-event-planner' + route);
		browserHistory.push('/'); // navigates back home
	},

	onDelete() {
		this.props.onDelete(this.props.meetup.id);
		browserHistory.push(`/meetup-event-planner/edit/${this.props.meetup.id}`);
	}
});

export default MeetupModal;
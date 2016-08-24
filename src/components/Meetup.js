import React from 'react';
import { Link } from 'react-router';

const Meetup = ({ meetup, onDelete }) => {
	let m = meetup;

	return (<div className='col-md-3'>
		<div className='panel panel-default'>

		  <div className='panel-body'>
		  	<h2> {m.name} </h2>
		    <p> {m.desc} </p>
		    <hr />
		    <p> Capacity:&nbsp;&nbsp;<strong>{m.capacity}</strong> </p>
		    <p> Where:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>{m.location}</strong> </p>
		    <hr />
		    <p> When:&nbsp;&nbsp;<strong>{m.date}</strong>&nbsp;&nbsp;&nbsp;&nbsp;At:&nbsp;&nbsp;<strong>{m.time}</strong> </p>
		  </div>
		  <div className='panel-footer'>
			  <Link to={`/edit/${m.id}`} className='btn btn-primary' data-dismiss='modal'> Edit </Link>
        <button className='btn btn-warning' onClick={() => onDelete(m.id)} > Delete </button>
		  </div>
		</div>
	</div>);
};

export default Meetup;
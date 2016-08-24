import React from 'react';

const Meetup = ({ meetup }) => {
	let m = meetup;
	return (<div className='col-md-3'>
		<div className='panel panel-default'>
		  <div className='panel-body'>
		  	<h2>{m.name}</h2>
		    <p>{m.desc}</p>
		    <hr />
		    <p>Capacity: {m.capacity}</p>
		    <p>Where: {m.location}</p>
		    <hr />
		    <p>From: {m.start}</p>
		    <p>To: {m.end}</p>
		  </div>
		</div>
	</div>);
};

export default Meetup;


// name
// desc
// capacity
// location
// start
// end
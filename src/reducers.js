export const meetups = (state, action) => {
	switch (action.type) {
		case 'ADD_MEETUP':
			let newMeetup = Object.assign({}, action.data, {
				id: +new Date
			});

			return state.concat([newMeetup]);
		default:
			return state || [];
	}
};
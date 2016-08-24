export const meetups = (state, action) => {
	switch (action.type) {
		case 'ADD_MEETUP':
			let newMeetup = Object.assign({}, action.data, {
				id: +new Date
			});

			return state.concat([newMeetup]);

		case 'VIEW_MEETUP':
			return action.data || {};

		case 'EDIT_MEETUP':
			let updated = action.data;
			return state.map(m => m.id !== updated.id ?
				m :
				Object.assign({}, m, m.updated));

		case 'DELETE_MEETUP':
			return state.filter(m => m.id !== action.data);

		default:
			return state || [];
	}
};

export const meetupFilter = (state, action) => {
	switch (action.type) {
		case 'FILTER_MEETUPS':
			return action.data;

		default:
			return state || '';
	}
};
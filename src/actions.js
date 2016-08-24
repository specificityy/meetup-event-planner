export const addMeetup = meetup => ({ type: 'ADD_MEETUP', data: meetup });
export const editMeetup = meetup => ({ type: 'EDIT_MEETUP', data: meetup });
export const deleteMeetup = meetupId => ({ type: 'DELETE_MEETUP', data: meetupId });
export const viewMeetup = meetup => ({ type: 'VIEW_MEETUP', data: meetup });
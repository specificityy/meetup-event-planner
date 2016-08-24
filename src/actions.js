export const addMeetup = meetup => ({ type: 'ADD_MEETUP', data: meetup });
export const viewMeetup = meetup => ({ type: 'VIEW_MEETUP', data: meetup });
export const editMeetup = meetup => ({ type: 'EDIT_MEETUP', data: meetup });
export const deleteMeetup = id => ({ type: 'DELETE_MEETUP', data: id });
export const filterMeetups = query => ({ type: 'FILTER_MEETUPS', data: query });
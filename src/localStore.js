export const get = () => JSON.parse(localStorage.getItem('state')) || undefined;
export const set = (state, props) => {
	let toSave = {};
	props.forEach(x => toSave[x] = state[x]);
	localStorage.setItem('state', JSON.stringify(toSave));
};
import * as actionTypes from '../constants/actionTypes';

export default function (state = [], action) {
	switch (action.type) {
		case actionTypes.TRACKS_SET:
			return setTracks(state, action)
	}
	return state;
}

function setTracks(state, action) {
	const { tracks } = action;
	return [ ...state, ...tracks ]
}
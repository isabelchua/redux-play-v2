import { setAlert } from "./alert";
import { ADD_POST } from "./types";

export const addPost = text => dispatch => {
	dispatch({
		type: ADD_POST,
		payload: text
	});

	dispatch(setAlert("Post Added", "success"));
};

import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "./actions/post";

const Form = ({ addPost }) => {
	const [form, setForm] = useState("");

	const onSubmit = e => {
		e.preventDefault();
		setForm(form);
		addPost({ form });
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					value={form}
					onChange={e => setForm(e.target.value)}
					type="text"
				/>
				<button>send</button>
				{form}
			</form>
		</div>
	);
};

export default connect(null, { addPost })(Form);

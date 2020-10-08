import React from "react";
import { useState } from "react";

const Form = () => {
	const [form, setForm] = useState("");

	const onSubmit = e => {
		e.preventDefault();
		setForm(form);
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

export default Form;

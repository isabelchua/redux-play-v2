import React from "react";

import "./App.css";
import Alert from "./components/Alert";
import Form from "./Form";
//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<Alert />
			<Form />
		</Provider>
	);
}

export default App;

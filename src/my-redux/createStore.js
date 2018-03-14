export default function createStore(reducer) {
	let currentState = null;
	let mainReducer = reducer;
	let mainListener = null;

	function dispatch(action) {
		// Dispatch function is responsible for calling the reducer to get the updated state
		currentState = mainReducer(currentState, action);

		// it will also call the listener registered by the 'subscribe' method
		mainListener();
	}

	// Returning the current state
	function getState() {
		return currentState;
	}

	// Register the listener method
	function subscribe(listener) {
		mainListener = listener;
	}

	return {
		dispatch,
		getState,
		subscribe
	};
}

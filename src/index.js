import { createStore } from './my-redux';

// Reducer function to describe how the state should be changed
function counter(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

// Creating the store
let store = createStore(counter);

// This method isn't doing much, just updating the counter text with the current state
function doSomething() {
	document.getElementById('counter').innerHTML = store.getState();
}

//Registering the subscriber with the 'doSomething' method
store.subscribe(doSomething);

// Button click handlers
document.getElementById('increment').addEventListener('click', () => {
	store.dispatch({ type: 'INCREMENT' });
});
document.getElementById('decrement').addEventListener('click', () => {
	store.dispatch({ type: 'DECREMENT' });
});

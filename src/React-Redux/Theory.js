// Redux:
// Redux is a javaScript state management library.

// Core Concept of Redux:
// Store
// Action
// Reducer

// Example:
// Shop = Store
// Customer = Action
// Shop Keeper = Reducer

// Store:
// Store holds entire application state.

// Actions:
// Actions are plain JavaScript objects that have a type field.
// Actions are an event that describes something that happened in the application.

// Reducer:
// Reducers are pure functions that take the current state and an action as arguments and return a new state based on the action type.

// Provider Component:
// The Provider component is a special component provided by React-Redux that allows you to wrap your entire application.
// It makes the Redux store available to all components within the application.

// useSelector() Hook:
// The useSelector hooks allow you to extract data or the state from the Redux store using a selector function.
// Selector Function is a function that you provide as an argument to the useSelector hook. It determines what part of the Redux state you want to access.
// Example: const counter = useSelector((state) => state.counter);

// useDispatch() Hook:
// It allows you to send or dispatch an action to the redux store by giving the action as an argument to the dispatch variable.
// Example: const dispatch = useDispatch();
// dispatch({ type: "INCREMENT" })

// Finished.

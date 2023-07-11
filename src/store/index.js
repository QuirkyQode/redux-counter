import { createStore } from "redux";

const reducerFn = (state = {counter: 0}, action) => {
    // Should always be Synchronous function
    // Do not mutate original state
    if(action.type === 'INC'){
        return {counter: state.counter+ 1}
    }
    if(action.type === 'DEC') {
        return {counter: state.counter-1}
    }
    if(action.type === 'ADD') {
        return {counter: state.counter + parseInt(action.payload)}
    }


    return state;
}

export const store = createStore(reducerFn);
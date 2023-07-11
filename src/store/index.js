import { createStore } from "redux";

const reducerFn = (state = {counter: 0}, action) => {
    // Should always be Synchronous function
    // Do not mutate original state
    if(action.type === 'INC'){
        return {counter: state.counter+ 1}
    }
    else if(action.type === 'DEC') {
        return {counter: state.counter-1}
    }


    return state;
}

export const store = createStore(reducerFn);
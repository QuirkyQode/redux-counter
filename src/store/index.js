import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState : {counter:0},
    reducers: {
        increment (state, action) {
            state.counter++;
        }, 
        decrement(state, action) {
            state.counter --;
        },
        addBy(state, action) {
            // console.log(parseInt(action.payload.payload))
            state.counter = state.counter + parseInt(action.payload);
        }
    }
})
export const actions = counterSlice.actions;
 export const store = configureStore ({
    reducer: counterSlice.reducer
})

// export default store;
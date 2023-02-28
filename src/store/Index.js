import { createStore } from "redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialState = {counter:0, showCounter:true};

const counterSlice = createSlice({
    name:'counter',
    initialState:initialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state,action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

// const counterReducer = (state = initialState,action) =>{
//     if(action.type === 'increment'){
//         return {
//             counter:state.counter + 1,
//             showCounter:state.showCounter
//         }
//     }

//     if(action.type === 'decerement'){
//         return {
//             counter:state.counter - 1,
//             showCounter:state.showCounter
//         }
//     }

//     if(action.type === 'increase'){
//         return {
//             counter:state.counter + action.amount,
//             showCounter:state.showCounter
//         }
//     }

//     // if(action.type === 'INCREMENTBY2'){
//     //     return {
//     //         counter:state.counter + 2
//     //     }
//     // }

//     // if(action.type === 'DECREMENTBY2'){
//     //     return {
//     //         counter:state.counter - 2
//     //     }
//     // }

//     if(action.type === 'INCREMENTBY5'){
//         return {
//             counter:state.counter + action.amount,
//             showCounter:state.showCounter
//         }
//     }

//     if(action.type === 'DECREMENTBY5'){
//         return {
//             counter:state.counter - 5,
//             showCounter:state.showCounter
//         }
//     }

//     if(action.type === 'toggle'){
//         return {
//             counter:state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// };

const store = configureStore({
reducer:counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;
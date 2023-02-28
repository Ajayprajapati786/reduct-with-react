import { createStore } from "redux";

const counterReducer = (state ={counter:0},action) =>{
    if(action.type === 'increment'){
        return {
            counter:state.counter + 1
        }
    }

    if(action.type === 'decerement'){
        return {
            counter:state.counter - 1
        }
    }

    if(action.type === 'INCREMENTBY2'){
        return {
            counter:state.counter + 2
        }
    }

    if(action.type === 'DECREMENTBY2'){
        return {
            counter:state.counter - 2
        }
    }

    return state;
};

const store = createStore(counter);

export default store;
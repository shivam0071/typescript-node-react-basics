// Remeber these
// 1.) Central STORE -- for storing all the states ( one giant object)

// 2.) Reducer -- many reducers can be there but lets assume one root reducer is attached directly with 
// central store, just a function that receives (3.) actions and older state and gives us a NEW state,
// it runs synchornous code only, no side effects.
// THe updated state is now stored in central store (immutable)


// 3.) Dispatch Action -- PREDEFINED iNFO with a payload, basically to change a state in central store


// 4.) Subscription - Triggers whenever state changes, we just subscribes to it


const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter:0
}


const rootReducer = (state=initialState, action) =>{
    if (action.type === "INC_COUNTER"){
        return{
            // ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === "ADD_COUNTER"){
       return { 
        //    ...state,
        counter: state.counter + action.value
    }
    }
    return state;
}

// 1.) STORE
const store = createStore(rootReducer);    // THIS NEEDS A REDUCER to take updated states
console.log(store.getState());



// 4
store.subscribe(() => {
    console.log("[SUBSCRIPTION]",store.getState());
})


// 3
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value:10});
console.log(store.getState());



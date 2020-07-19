

const initialState = {
    counter:0
}

// const reducer = (state=initialState, action) =>{
//     if (action.type === "INCREMENT"){
//         return {
//            counter: state.counter + 1
//         };
//     }

//     if (action.type === "INCREMENT10"){
//         return {
//            counter: state.counter + action.val
//         };
//     }
    
//     if (action.type === "DECREMENT1"){
//         return {
//            counter: state.counter + action.val
//         };
//     }

//     if (action.type === "DECREMENT10"){
//         return {
//            counter: state.counter + action.val
//         };
//     }
//     return state;
// }

const reducer = (state=initialState, action) =>{
    
    if (action.type === "INCREMENT"){
        return {
           counter: state.counter + action.buttVal
        };
    }
    return state;
}

export default reducer;


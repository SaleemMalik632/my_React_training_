import React from 'react'
import { useReducer } from 'react'
import ComC from './ComC';


// use reduer hook is implement here  is used to decrede large number of functions and only used tyle and add the properte like 

const tylefunction = (state, action) => {

    switch (action.type) {
        case 'INC':
            return state = state + 1;
        case 'DEC':
            return state = state - 1;
        case 'MUL':
            return state = state * 2;
        default:
            throw new Error();
    }
    // if (action.type === 'INC') {
    //     return state = state + 1;
    // }
    // else if (action.type === 'DEC') {
    //     return state = state -1;
    // }
    // else if (action.type === 'MUL') {
    //     return state = state*2;
    // }
}

const ComB = () => {
    const [state, dispatch] = useReducer(tylefunction, 0);

    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => { dispatch({ type: "INC" }) }}>incremet</button>
            <button onClick={() => { dispatch({ type: "DEC" }) }}>Decrement</button>
            <button onClick={() => { dispatch({ type: "MUL" }) }}>MULtple</button>
            <div>ComB</div>
            <ComC />
        </>
    )
}

export default ComB
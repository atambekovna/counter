import { useReducer } from "react"



const reduserCount = (prevState, action) => {
    if(action.type === 'PLUS') {
        return prevState + 1
    }
    if(action.type === 'MINUS') {
        return prevState - 1
    }
}

export const Counter = () =>{
    const [counter, dispatchCount] = useReducer(reduserCount, 0)

    const plusHandler = () => {
        dispatchCount({type: 'PLUS'})  //{type: 'PLUS'} - ACTION/ДЕЙСТВИЕ   
    } 

    const minusHandler = () => {
        dispatchCount({type: 'MINUS'})  //{type: 'PLUS'} - ACTION/ДЕЙСТВИЕ   
    }
    
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={plusHandler}>+</button>
            <button onClick={minusHandler}>-</button>
        </div>
    )
}
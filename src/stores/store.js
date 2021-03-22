import {createContext, useReducer} from "react";
import reducer from "./reducer"
const initialState = [
    {task: 'ゴミ捨て', isCompleted: false},
    {task: '掃除', isCompleted: false},
    {task: '洗濯', isCompleted: false}
  ]

const Context = createContext('')

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
}

export {Context, Provider};
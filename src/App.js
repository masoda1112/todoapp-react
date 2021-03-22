import TodoList from '../src/components/todoList'
import './App.css';
import {createContext, useReducer, useState} from 'react';
import reducer from './stores/reducer';

const Context = createContext('')

function App() {
  const initialState = [
    {task: 'ゴミ捨て', isCompleted: false},
    {task: '掃除', isCompleted: false},
    {task: '洗濯', isCompleted: false}
  ]

  const [task, setTask] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)
  

  return (
      <Context.Provider value={{state, dispatch}}>
        <TodoList />
      </Context.Provider>
  );
}

export default App;
export {Context}

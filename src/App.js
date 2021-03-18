// import TodoList from '../src/components/todoList'
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
  const handleNewTask = (event) => {
    setTask( event.target.value )
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    // フォームがからの時にタスクに追加しない
    if(task === '') return
    // todoに入力した文字が追加
    dispatch({type: 'POST', task})
    console.log({state})
    // フォームに表示されている内容が削除
    setTask('')
  }

  return (
    <>
      <div>
        <h1>ToDo List</h1>
        <form onSubmit={ handleSubmit }>
          Add Task : <input value={ task } placeholder="Add New Task" onChange={handleNewTask}/>
        </form>
        <ul>
          { state.map((t, index) => (
          <li 
            key={ index } 
          >
            { t.task }
          </li>
          ))
          }
        </ul>
      </div>
    </>
  );
}

export default App;
export {Context}

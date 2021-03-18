import React, { useState, useContext } from 'react';
import {Context} from '../App';
// import {reducer} from '../stores/reducer';

const TodoList = () => {
    const [task, setTask] = useState('')
    // taskに入力した文字が保存される
    const handleNewTask = (event) => {
        setTask( event.target.value )
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      // フォームがからの時にタスクに追加しない
      if(task === '') return
      // todoに入力した文字が追加
      // setTodo(todos => [...todos,{ task, isCompleted: false}])
      Context.dispatch({type: 'POST', task})
      // フォームに表示されている内容が削除
      setTask('')
    }
    return (
      <Context.Consumer>
        { ({state}) => (
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
          )
        }
      </Context.Consumer>
    );
}

export default TodoList;
import React, { useState } from 'react';

function TodoList() {

    const initialState = [
        {
            task: 'Learn vue.js',
            isCompleted: false
        },
        {
            task: 'Learn React Hook',
            isCompleted: false
        },
        {
            task: 'Learn Gatsby.js',
            isCompleted: false
        },     
    ]

    const [todos, setTodo] = useState(initialState);
    const [task, setTask] = useState('')
    const handleNewTask = (event) => {
        setTask( event.target.value )
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      // フォームがからの時にタスクに追加しない
      if(task === '') return
      // todoに入力した文字が追加
      setTodo(todos => [...todos,{ task, isCompleted: false}])
      // フォームに表示されている内容が削除
      setTask('')
    }

    const handleUpdateTask = index => {
      // クリックされたindex番号と一致したtodoをisCompletedにする
      let newTodos = todos.map((todo,todoIndex) => {
        if(todoIndex  === index){
          // trueならfalseにfalseならtrueに
            todo.isCompleted = !todo.isCompleted
        }
        return todo;
      })
      setTodo(newTodos);
    }

    return (
        <div>
          <h1>ToDo List</h1>
          <form onSubmit={ handleSubmit }>
            Add Task : <input value={ task } placeholder="Add New Task" onChange={handleNewTask}/>
          </form>
          <ul>
            { todos.map((todo, index) => (
            <li 
              key={ index } 
              style={ todo.isCompleted === true ? {textDecorationLine: 'line-through'}:{}}
            >
              { todo.task } 
              <span onClick={ () => handleUpdateTask(index) }>X</span></li>
            ))
            }
          </ul>
        </div>
  );
}

export default TodoList;
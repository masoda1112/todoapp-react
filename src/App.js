import TodoList from '../src/components/todoList'
import './App.css';
import {Provider} from "./stores/store"

const App = () => {
  return (
    <Provider>
      <TodoList />
    </Provider>
  )
}

export default App;

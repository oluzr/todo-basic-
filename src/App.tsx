import TodoHeader from "./components/TodoHeader";
import Todoinput from "./components/Todoinput";
import Tools from "./components/Tools";
import TodoList from "./components/TodoList";
import "./App.css";
import TodoListArea from "./components/TodoListArea";
import { TodoProvider } from "./store/TodoProvider";
function App() {
  return (
    <>
      <div className="App">
        <TodoProvider>
          <TodoHeader />
          <Todoinput />
          <TodoListArea>
            <Tools />
            <TodoList />
          </TodoListArea>
        </TodoProvider>
      </div>
    </>
  );
}

export default App;

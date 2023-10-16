import {
  ReactNode,
  createContext,
  useReducer,
  Dispatch,
  useContext,
} from "react";
import {
  TodoInputActionType,
  todoInputReducer,
  TodoInputStateType,
} from "../reducer/todoInputReducer";
import {
  todoReducer,
  TodoStateType,
  TodoActionType,
} from "../reducer/todoReducer";
import { loadTodos } from "../storage";
interface TodoProviderProps {
  children: ReactNode;
}
const TodoStateContext = createContext<TodoStateType | null>(null);
const TodoDispatchContext = createContext<Dispatch<TodoActionType> | null>(
  null
);
const InputTodoContext = createContext<TodoInputStateType | null>(null);
const inputDispatchContext =
  createContext<Dispatch<TodoInputActionType> | null>(null);

export const TodoProvider = (props: TodoProviderProps) => {
  const [inputState, inputDispatch] = useReducer(todoInputReducer, {
    text: "",
  });
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todos: loadTodos(),
  });
  return (
    <TodoDispatchContext.Provider value={todoDispatch}>
      <TodoStateContext.Provider value={todoState}>
        <inputDispatchContext.Provider value={inputDispatch}>
          <InputTodoContext.Provider value={inputState}>
            {props.children}
          </InputTodoContext.Provider>
        </inputDispatchContext.Provider>
      </TodoStateContext.Provider>
    </TodoDispatchContext.Provider>
  );
};
export const useTodoState = () => {
  const value = useContext(TodoStateContext);
  if (!value) {
    throw new Error("cannot find useTodoState");
  }
  return value;
};
export const useTodoDispatch = () => {
  const value = useContext(TodoDispatchContext);
  if (!value) {
    throw new Error("cannot find useTodoDispatch");
  }
  return value;
};
export const useInputState = () => {
  const value = useContext(InputTodoContext);
  if (!value) {
    throw new Error("cannot find InputTodoState");
  }
  return value;
};
export const useInputDispatch = () => {
  const value = useContext(inputDispatchContext);
  if (!value) {
    throw new Error("cannot find inputDispatch");
  }
  return value;
};

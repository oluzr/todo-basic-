import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";
import { useTodoState } from "../store/TodoProvider";

const TodoList = () => {
  const todoState = useTodoState()
  return (
    <section>
      <ul className={styles.ulContainer}>
        {todoState.todos.map((todo) => (
          <TodoItem
            text={todo.text}
            id={todo.id}
            key={todo.id}
            isChecked={todo.isChecked}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;

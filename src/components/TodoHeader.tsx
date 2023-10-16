import { useTodoState } from "../store/TodoProvider";
import styles from "./TodoHeader.module.css";

const TodoHeader = () => {
  const todoState = useTodoState();
  const count = todoState.todos.filter((item) => !item.isChecked).length;
  return (
    <header>
      <h1 className={styles.headerTitle}>
        <mark className={styles.todoCount}>{count}</mark>개의 할 일
      </h1>
    </header>
  );
};

export default TodoHeader;

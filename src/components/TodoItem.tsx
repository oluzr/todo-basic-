import { BsCheckCircle } from "react-icons/bs";
import { IoRemoveCircleOutline } from "react-icons/io5";
import styles from "./TodoItem.module.css";
import { useTodoDispatch } from "../store/TodoProvider";

interface TodoItemProps {
  id: number;
  text: string;
  isChecked: boolean;
}
const TodoItem = (props: TodoItemProps) => {
  const todoDispatch = useTodoDispatch();
  const handleToggleClick = () => {
    todoDispatch({ type: "checked", payload: { id: props.id } });
  };
  const handleRemoveClick = () => {
    todoDispatch({ type: "remove", payload: { id: props.id } });
  };
  return (
    <li className={styles.container}>
      <BsCheckCircle
        onClick={handleToggleClick}
        className={[
          styles.checkIcon,
          `${
            props.isChecked
              ? styles.checkedCircleIcon
              : styles.unCheckedCircleIcon
          }`,
        ].join(" ")}
      />
      <span>{props.text}</span>
      <IoRemoveCircleOutline
        onClick={handleRemoveClick}
        className={styles.removedIcon}
      />
    </li>
  );
};

export default TodoItem;

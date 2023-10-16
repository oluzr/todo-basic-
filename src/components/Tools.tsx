import styles from "./Tools.module.css";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { CgRadioCheck } from "react-icons/cg";
import { useTodoDispatch, useTodoState } from "../store/TodoProvider";

const Tools = () => {
  const todoDispatch = useTodoDispatch();
  const todoState = useTodoState();
  const isAllChecked = () => {
    return todoState.todos.every((todo) => todo.isChecked);
  };

  const handleToggleAllClick = () => {
    todoDispatch({ type: "allChecked", payload: isAllChecked() });
  };
  const handleRemoveAllClick = () => {
    todoDispatch({ type: "allRemove" });
  };
  return (
    <section className={styles.container}>
      <button onClick={handleToggleAllClick}>
        {isAllChecked() ? (
          <>
            <CgRadioCheck className={styles.checkAllIcon} />
            전체해제
          </>
        ) : (
          <>
            <IoCheckmarkDoneCircleOutline className={styles.checkAllIcon} />
            전체완료
          </>
        )}
      </button>
      <button onClick={handleRemoveAllClick}>
        <MdDelete className={styles.removeAllIcon} />
        전체삭제
      </button>
    </section>
  );
};

export default Tools;

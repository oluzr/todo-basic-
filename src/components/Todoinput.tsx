import { RiChatNewLine } from "react-icons/ri";
import styles from "./Todoinput.module.css";

import {
  useInputDispatch,
  useInputState,
  useTodoDispatch,
} from "../store/TodoProvider";
import { ChangeEvent, FormEvent } from "react";

const Todoinput = () => {
  const todoDispatch = useTodoDispatch();
  const inputDispatch = useInputDispatch();
  const inputState = useInputState();

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    inputDispatch({ type: "change", payload: e.target.value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!inputState.text) return;
    todoDispatch({ type: "add", payload: { text: inputState.text } });
    inputDispatch({ type: "clear" });
  };
  return (
    <>
      <section className={styles.container}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write down your to-do list"
            value={inputState.text}
            onChange={handleInputChange}
          />
          <button type="submit">
            <RiChatNewLine />
          </button>
        </form>
      </section>
    </>
  );
};

export default Todoinput;

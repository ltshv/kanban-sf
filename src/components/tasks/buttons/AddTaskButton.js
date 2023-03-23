import React from "react";
import css from "./buttons.module.scss";
import { AddTaskIcon } from "./AddTaskIcon";

export const AddTaskButton = (props) => {
    const {isFormOpen, setFormOpen, isDisabled} = props;

    
  function handleClick(e) {
    setFormOpen(!isFormOpen);
  }

  return (
    <button
      className={`${css.add_task_button} ${!isDisabled ? `pointer`: null}`}
      disabled={
        isDisabled
      }
      onClick={() => handleClick()}
    >
      <AddTaskIcon isDisabled={isDisabled}/>
      Add card
    </button>
  );
};

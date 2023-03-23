import React from "react";
import css from "./tasks.module.scss";
import { LIST_TYPES } from "../../data-config";
import Form from "../form/Form";
import { AddTaskButton } from "./buttons/AddTaskButton";

function AddTaskForm(props) {
  const { isFormOpen, setFormOpen, type, tasks, formSubmit, setTasks } = props;

  function getPrevTypeTasks(type = String()) {
    let currentIndex = Object.values(LIST_TYPES).findIndex(
      (item) => item === type
    );
    let prevType = Object.values(LIST_TYPES)[currentIndex - 1];

    let prevTasks = tasks.filter(function (item) {
      return item.status === prevType;
    });

    return prevTasks;
  }

  return isFormOpen ? (
    <>
      {isFormOpen && type === LIST_TYPES.BACKLOG && (
        <Form formSubmit={formSubmit} type={type} tasks={tasks} />
      )}
      {isFormOpen && type !== LIST_TYPES.BACKLOG && (
        <Form
          formSubmit={formSubmit}
          currentTasks={getPrevTypeTasks(type)}
          type={type}
          tasks={tasks}
          setTasks={() => setTasks()}
        />
      )}
    </>
  ) : (
    <AddTaskButton isFormOpen={isFormOpen} setFormOpen={setFormOpen} isDisabled={getPrevTypeTasks(type).length <= 0 && type !== LIST_TYPES.BACKLOG}/>
  );
}

export default AddTaskForm;

import React, { useState } from "react";
import css from "./tasks.module.scss";
import { Link } from "react-router-dom";
import AddTaskForm from "./AddTaskForm";

function TaskBox(props) {
  const tasksTitle = props.title;
  const { type, tasks, addNewTask, setTasks } = props;
  const [isFormOpen, setFormOpen] = useState(false);

  const formSubmit = (task) => {
    addNewTask(task);
    setFormOpen(false);
  };

  const listTasks = tasks.filter((task) => task.status === type);

  return (
    <div className={css.tasks_box}>
      <div className={css.header}>
        <h2>{tasksTitle}</h2>
      </div>
      <div className={css.tasks_list}>
        {listTasks.length > 0 ? listTasks.map((task) => (
          <Link to={`/tasks/${task.id}/`} key={task.id}>
            <div className={`${css.single_task_box} ${css.pointer}`}>
              <h6 className={css.task_title}>{task.title}</h6>
              <p className={css.task_descroption}>{task.description || '(no description)'}</p>
            </div>
          </Link>
        )) : 
        <div className={css.no_tasks}>no tasks added</div>}
      </div>

      <div className={css.footer}>
        <AddTaskForm
          type={type}
          tasks={tasks}
          isFormOpen={isFormOpen}
          setFormOpen={setFormOpen}
          formSubmit={formSubmit}
          setTasks={() => setTasks()}
        />
      </div>
    </div>
  );
}

export default TaskBox;

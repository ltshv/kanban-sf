import React from "react";
import css from "./tasks.module.scss";
import TaskBox from "./TaskBox";
import { LIST_TYPES, LIST_TITLE } from "../../data-config";
import { NavLink } from "react-router-dom";

// function getTasks(type) {
//   const taskIssues = dataMock.filter((tasks) => tasks.title === type)[0];
//   return taskIssues;
// }

function Board(props) {
  const { tasks, setTasks } = props;

  const addNewTask = (task) => {

    let nonUniqTask = tasks.find(item => item.id === task.id);

    if (nonUniqTask === undefined || nonUniqTask === null) {
      setTasks([...tasks, task]);
    } else {
      changeTask();
    }
    
    function changeTask() {
      nonUniqTask.status = task.status;
      let newTaskList = tasks.filter(taskItem => taskItem.id !== task.id) || [];
      setTasks([...newTaskList, nonUniqTask]);
    }

	}

  return (
    <div className={css.app_container}>
      <div className={css.tasks_type_list}>
        {Object.values(LIST_TYPES).map((type) => {

          return (
            <TaskBox
              key={LIST_TITLE[type]}
              type={type}
              title={LIST_TITLE[type]}
              tasks={tasks || []}
              addNewTask={addNewTask}
              setTasks={() => setTasks()}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Board;

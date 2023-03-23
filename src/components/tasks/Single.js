import React, { useState } from "react";
import css from "./tasks.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { SubmitButton } from "./buttons/SingleTaskSubmitButton";
import { CloseTaskButton } from "./buttons/CloseTaskButton";

function SingleTask(props) {
  const { tasks, setTasks } = props;
  const [isChanged, setChanged] = useState(false);
  const [isSubmited, setSubmited] = useState(false);

  let navigate = useNavigate();
  
  const taskId = useParams().taskId;
  const currentTask = tasks.find((task) => task.id === taskId);

  let changedDesc;

  function handleChange(e) {
    (currentTask.description !== e.target.value) ? setChanged(true) : setChanged(false);
    changedDesc = e.target.value
  }

  function handleSubmit(e) {
    e.preventDefault();
      currentTask.description = changedDesc;
      let newTaskList = tasks.filter(taskItem => taskItem.id !== currentTask.id);
      setTasks([...newTaskList, currentTask]);
      setSubmited(true);
      setChanged(false);

      //setTimeout(setSubmited(false), 50000);
  }

  return (
    <div className={css.single_task_container}>
      <div className={css.single_task_div}>
        <div className={css.card_header_wrapper}><h1 className={css.single_task_title}>{currentTask.title}</h1><div className={`${css.close_task_button} pointer`} onClick={() => navigate(-1)}><CloseTaskButton/></div></div>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => handleChange(e)}
            defaultValue={currentTask.description}
            placeholder={`Enter task's description`}
          ></textarea>
          {(isChanged) && <button className={`${css.submit_desc_change_button} pointer`} type="submit">Submit Changes</button>}
          {isSubmited && <div className={css.changed_desc_capture}>tasks description changed</div>}
        </form>
        
      </div>
      
    </div>
  );
}

export default SingleTask;

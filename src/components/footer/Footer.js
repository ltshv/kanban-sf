import React from "react";
import css from "./footer.module.scss";
import ActiveTasks from "./ActiveTasks";
import FinishedTasks from "./FinishedTasks";
import { LIST_TYPES } from "../../data-config";

function Footer(props) {
  const { tasks } = props;

  function countActiveTasks() {
    const activeListTasks = tasks.filter((task) => task.status !== LIST_TYPES.FINISHED);

    return activeListTasks.length;
  }

  function countFinishedTasks() {
    const finishedListTasks = tasks.length - countActiveTasks();

    return finishedListTasks;
  }

  return (
    <footer className={css.footer}>
      <div className={css.app_container}>
        <div className={css.tasks_info_box}>
          <ActiveTasks tasks={countActiveTasks()} />
          <FinishedTasks tasks={countFinishedTasks()} />
        </div>
        <div className={css.autor_info_box}>
          <p>Kanban board by OLEG, {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

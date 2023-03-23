import React from "react";
import css from './footer.module.scss'

function ActiveTasks(props) {
    let {tasks} = props;
    return (
        <div className={css.active_tasks_box}><p>Active tasks: {tasks}</p></div>
    )
}

export default ActiveTasks;
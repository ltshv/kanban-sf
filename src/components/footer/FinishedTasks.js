import React from "react";
import css from './footer.module.scss'

function FinishedTasks(props) {
    let {tasks} = props;
    return (
        <div className={css.finished_tasks_box}><p>Finished tasks: {tasks}</p></div>
    )
}

export default FinishedTasks;
import React from "react";
import css from './buttons.module.scss';

export const RemoveTaskButton = (props) => {
    return (
        <button className={`${props.className} ${css.remove_task_button}`} onClick={props.onClick}>
        </button>
    )
}
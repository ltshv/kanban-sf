import React, { useState } from "react";
import css from "./form.module.scss";
import { LIST_TYPES } from "../../data-config";
import clsx from "clsx";
import uniqid from 'uniqid'

export default function Form(props) {
  const { type, tasks, formSubmit, currentTasks} = props;
  const [values, setValues] = useState({
        id: uniqid(),
        title: "",
        description: '',
        status: type,
  });

  const handleChange = (e) => {
    if (type === LIST_TYPES.BACKLOG) {
    const fieldName = e.target.name;
    setValues({ ...values, [fieldName]: e.target.value });


    } else {
        const id = e.target.value;
        let task = tasks.find(task => task.id === id);
        task.status = type;
        setValues(task);
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === LIST_TYPES.BACKLOG) {
      formSubmit(values);
    } else {
        formSubmit(values)
    }
  };

  return (
    <>
      {type === LIST_TYPES.BACKLOG && (
        <div className={css.add_task_form_box}>
          <form onSubmit={handleSubmit} className={css.add_task_form}>
            <input
              className={css.input}
              id="taskTitle"
              name="title"
              type="text"
              placeholder="Enter task title (reqiured)"
              onChange={handleChange}
              value={values.title}
            />
            <textarea
              className={clsx(css.input, css.textarea)}
              id="taskDescription"
              name="description"
              placeholder="Enter task description (optional)"
              value={values.description}
              onChange={handleChange}
            />
            <button className={css.submit} type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
      {type !== LIST_TYPES.BACKLOG && (<>
        <div className={css.add_task_form_box}>
        <form onSubmit={handleSubmit} className={css.add_task_form}>
      <select name={type} id={`task${type}`} onChange={handleChange} defaultValue={''} className={css.select_dropdown} required>
      <option disabled={true} value="">
          Choose task
          </option>
        {currentTasks.map((task => (
            <option key={task.id} value={task.id}>{task.title}</option>
        )))
        }
      </select>
      <button className={`${css.submit} pointer`} type="submit">
              Submit
            </button>
            </form>
            </div>
      </>)}
    </>
  );
}

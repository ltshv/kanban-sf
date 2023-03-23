import React from 'react';
import css from './buttons.module.scss';

export const SubmitButton = (props) => {
    const {isSubmited, setSubmited }= props;
    return (
        <button className={`${css.submit_desc_change_button} pointer`} onClick={() => setSubmited(true)}>Submit Changes</button>
    )
}
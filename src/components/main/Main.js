import React from "react";
import css from './main.module.scss';
import { Routes, Route } from "react-router";
import Board from "../tasks/Board";
import SingleTask from "../tasks/Single";

function Main(props) {
    return (
        <main className={css.main}>
        <Routes>
        <Route path="/" exact element={<Board {...props}/>} />
        <Route path="/tasks/:taskId" element={<SingleTask {...props}/>} />
      </Routes>
      </main>
    )
}

export default Main;

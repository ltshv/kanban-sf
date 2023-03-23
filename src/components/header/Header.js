import React from "react";
import css from "./header.module.scss";
import Profile from "./Profile";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={css.header}>
      <div className={css.app_container}>
        <div className={`${css.app_logo} ${css.pointer}`}>
        <Link to="/"><h1 className={css.app_title}>Awesome Kanban Board</h1></Link>
        </div>
        <Profile/>
      </div>
    </header>
  );
}

export default Header;

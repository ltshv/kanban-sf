import React from "react";
import {ProfileDropdown} from "./ProfileDropdown.js";
import { UserAvatar } from "./UserAvatar.jsx";
import css from './header.module.scss'

function Profile() {

  return (
    <div className={css.profile_box}>
      <div className={`${css.profile_avatar} ${css.pointer}`}><UserAvatar/></div>
      <div className={css.profile_dropdown}>
      <ProfileDropdown/>
      </div>
    </div>
  );
}

export default Profile;

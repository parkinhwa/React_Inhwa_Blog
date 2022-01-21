import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../css/NavBar.css";
import * as bootstrap from "bootstrap";

function NavBar() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };

  return (
    <div class="menu_bar">
      <input type="checkbox" id="trigger"></input>
      <label for="trigger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div class="sidebar">
        <ul class="menu">
          <span class="name">Inhwa Park</span>
          <span class="profile"></span>
          <span class="content">Hi, I'm Inhwa and I'm a front-end developer. Welcome to my homepage!</span>
          <hr></hr>
          <li class="menu_item">
            <a href="#">Blog</a>
          </li>
          <li class="menu_item">
            <a href="#">Contact</a>
          </li>
          <li class="menu_item">
            <a href="#">About Me</a>
          </li>
          {/* <button onClick={onClickHandler}>Logout</button> */}
          <button>Login</button>
           <button>Sign Up</button>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

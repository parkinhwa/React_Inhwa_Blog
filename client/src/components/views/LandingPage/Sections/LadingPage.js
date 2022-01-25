import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../../css/LadingPage.css";


function LadingPage() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      console.log("logout success = ", response.data.success);
      if (response.data.success) {
        navigate("/");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };
  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      console.log(response);
    });
  }, []);

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
        <span class="content">
          Hi, I'm Inhwa and I'm a front-end developer. Welcome to my homepage!
        </span>
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
        <li>
          <button onClick={onClickHandler}>Logout</button>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default LadingPage;

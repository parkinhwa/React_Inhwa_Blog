import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../css/NavBar.css";

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
      <ul class="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Board</a>
        </li>
        {/* <button>Login</button>
           <button>Sign Up</button> */}
        <button onClick={onClickHandler}>Logout</button>
        <input type="checkbox" id="trigger"></input>
        <label for="trigger">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <div class="sidebar"></div>
      </ul>
    </div>
  );
}

export default NavBar;

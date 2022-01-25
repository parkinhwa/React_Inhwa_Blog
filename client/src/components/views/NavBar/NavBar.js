import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../css/NavBar.css";


function NavBar(props) {
  console.log(props.loginSuccess)
  const navigate = useNavigate();
  const onClickLogin = () => {
    navigate("/login");
  };

  const onClickRegister = () => {
    navigate("/register");
  };

  return (
    <div class="menu_bar">
      <input type="checkbox" id="trigger"></input>
      <label for="trigger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav class="sidebar">
        <ul class="menu">
          <span class="name">Inhwa Park</span>
          <span class="profile"></span>
          <span class="content">
            Hi, I'm Inhwa and I'm a front-end developer. Welcome to my homepage!
          </span>
          <hr></hr>
          <li class="menu_item">
            <a href="#">About Me</a>
          </li>
          <li class="menu_item">
            <a href="#">Blog</a>
          </li>
          <li class="menu_item">
            <a href="#">Contact</a>
          </li>
            <li>
              <button onClick={onClickLogin}>Login</button>
              <button onClick={onClickRegister}>Sign Up</button>
            </li>
        </ul>
      </nav>
      <div class="container-fluid p-0" id="blog">
            <section class="resume-section" id="about">
              <div class="profile_image"></div>
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        Park
                        <span class="text-primary">Inhwa</span>
                    </h1>
                    <div class="subheading mb-5">
                    125, Dongseo-daero, Yuseong-gu, Daejeon, Republic of Korea 34158 · 
                        <a href="mailto:name@email.com"> inhwa6548@naver.com</a>
                    </div>
                    <p class="lead mb-5">Hi, welcome to my homepage. You can click the blog to see my post.If you want to contact me, press contact and send me a message.If you press the button below, you can see my github and link-in! Thank you.</p>
                    <div class="social-icons">
                        <a class="social-icon" href="https://www.linkedin.com/feed/"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="https://github.com/parkinhwa"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
            </div>
    </div>
  );
}

export default NavBar;

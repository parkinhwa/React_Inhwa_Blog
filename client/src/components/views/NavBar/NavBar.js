import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../css/NavBar.css";
import BlogPage from "../BlogPage/BlogPage";

import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function NavBar(post, date) {
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
            <a href="#about">About Me</a>
          </li>
          <li class="menu_item">
            <a href="#blog">Blog</a>
          </li>
          <li class="menu_item">
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button onClick={onClickLogin}>Login</button>
            <button onClick={onClickRegister}>Sign Up</button>
          </li>
        </ul>
      </nav>
      <div class="container-fluid p-0">
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <div class="profile_image"></div>
            <h1 class="mb-0">
              Park
              <span class="text-primary">Inhwa</span>
            </h1>
            <div class="subheading mb-5">
              125, Dongseo-daero, Yuseong-gu, Daejeon, Republic of Korea 34158
              <br />
              <a class="text-primary" href="mailto:name@email.com">
                {" "}
                inhwa6548@naver.com
              </a>
            </div>
            <p class="lead mb-5" id="intro_text">
              Hi, welcome to my homepage. You can click the blog to see my
              post.If you want to contact me, press contact and send me a
              message.If you press the button below, you can see my github and
              link-in! Thank you.
            </p>
            <div class="social-icons">
              <a class="social-icon" href="https://www.linkedin.com/feed/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/parkinhwa">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
      <hr class="m-0" />
      <section class="resume-section" id="blog">
        <div class="resume-section-content">
          {/* <h2 className="id">{post.id}</h2>
          <h2 className="title">{post.title}</h2>
          <h2 className="date">{date}</h2> */}
          <h2 className="action edit">
            <MdModeEdit className="icon" />
            <MdDelete className="icon" />
            {/* <MdDelete className="icon" onClick={onClick}/> */}
          </h2>
        </div>
      </section>
      <hr class="m-0" />
      <section class="resume-section" id="contact">
        <div class="resume-section-content">
          <h2 class="mb-5">Education</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">University of Colorado Boulder</h3>
              <div class="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Web Development Track</div>
              <p>GPA: 3.23</p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">August 2006 - May 2010</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between">
            <div class="flex-grow-1">
              <h3 class="mb-0">James Buchanan High School</h3>
              <div class="subheading mb-3">Technology Magnet Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">August 2002 - May 2006</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavBar;

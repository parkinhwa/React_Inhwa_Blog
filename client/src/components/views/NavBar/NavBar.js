import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../css/NavBar.css";
import BlogPage from "../BlogPage/BlogPage";

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
          <table className="table table-striped table-bordered" id="head_table">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>글 번호</th>
                <th style={{ width: "40%" }}>제목 </th>
                <th style={{ width: "15%" }}>작성자 </th>
                <th style={{ width: "35%" }}>작성일 </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <a /* onClick={() => this.readBoard(board.idx)} */>
                    컴포넌트
                  </a>
                </td>
                <td> INHWA </td>
                <td> 2022.02.09 </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <a /* onClick={() => this.readBoard(board.idx)} */>
                    커링과 조합
                  </a>
                </td>
                <td> park </td>
                <td> 2022.02.09 </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <a /* onClick={() => this.readBoard(board.idx)} */>
                    하이어오더
                  </a>
                </td>
                <td> inh </td>
                <td> 2022.02.10 </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <a /* onClick={() => this.readBoard(board.idx)} */>
                    컨텍스트
                  </a>
                </td>
                <td> 박인화 </td>
                <td> 2022.02.11 </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <a /* onClick={() => this.readBoard(board.idx)} */>리덕스</a>
                </td>
                <td> INHWA </td>
                <td> 2022.02.13 </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <a /* onClick={() => this.readBoard(board.idx)} */>
                    리덕스와 컨텍스트의 차이
                  </a>
                </td>
                <td> INHWA </td>
                <td> 2022.02.20 </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <a /* onClick={() => this.readBoard(board.idx)} */>
                    리덕스와 컨텍스트의 차이
                  </a>
                </td>
                <td> INHWA </td>
                <td> 2022.02.20 </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <a /* onClick={() => this.readBoard(board.idx)} */>
                    리덕스와 컨텍스트의 차이
                  </a>
                </td>
                <td> INHWA </td>
                <td> 2022.02.20 </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <a /* onClick={() => this.readBoard(board.idx)} */>
                    리덕스와 컨텍스트의 차이
                  </a>
                </td>
                <td> INHWA </td>
                <td> 2022.02.20 </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <a /* onClick={() => this.readBoard(board.idx)} */>
                    리덕스와 컨텍스트의 차이
                  </a>
                </td>
                <td> INHWA </td>
                <td> 2022.02.20 </td>
              </tr>
            </tbody>
          </table>
          <div class = "page">
            <nav class="page_number" aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#blog">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#blog">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#blog">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#blog" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
                <li><button class="btn btn-dark">글쓰기</button></li>
              </ul>
            </nav>
          </div>
          {/* <button class="btn btn-dark">글쓰기</button> */}
        </div>
      </section>
      <hr class="m-0" />
      <section class="resume-section" id="contact">
        <div class="resume-section-content">
          <h2 class="mb-3">Contact</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <div>
                If you want to contact me or have any questions, please send me
                a message by pressing Send Now!
              </div>
              <input placeholder="Email"></input>
              <input placeholder="Name"></input>
              <input placeholder="Enter your message"></input>
              <button class="btn btn-dark">Send Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavBar;

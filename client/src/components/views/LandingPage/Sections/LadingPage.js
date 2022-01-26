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
            <button onClick={onClickHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      <div class="container-fluid p-0">
        <section class="resume-section" id="about">
          <div class="profile_image"></div>
          <div class="resume-section-content">
            <h1 class="mb-0">
              Park
              <span class="text-primary">Inhwa</span>
            </h1>
            <div class="subheading mb-5">
              125, Dongseo-daero, Yuseong-gu, Daejeon, Republic of Korea 34158 ·
              <a class="text-primary" href="mailto:name@email.com">
                {" "}
                inhwa6548@naver.com
              </a>
            </div>
            <p class="lead mb-5">
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
          <h2 class="mb-5">Experience</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Senior Web Developer</h3>
              <div class="subheading mb-3">Intelitec Solutions</div>
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">March 2013 - Present</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Web Developer</h3>
              <div class="subheading mb-3">Intelitec Solutions</div>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">December 2011 - March 2013</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Junior Web Designer</h3>
              <div class="subheading mb-3">Shout! Media Productions</div>
              <p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail. Keeping your eye
                on the ball while performing a deep dive on the start-up
                mentality to derive convergence on cross-platform integration.
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">July 2010 - December 2011</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between">
            <div class="flex-grow-1">
              <h3 class="mb-0">Web Design Intern</h3>
              <div class="subheading mb-3">Shout! Media Productions</div>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits. Dramatically visualize customer directed
                convergence without revolutionary ROI.
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">September 2008 - June 2010</span>
            </div>
          </div>
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

export default LadingPage;

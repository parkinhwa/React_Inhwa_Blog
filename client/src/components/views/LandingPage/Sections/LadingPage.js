import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../../css/LadingPage.css";
import NavBar from "../../NavBar/NavBar";

function LadingPage() {
  // navigate
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div class="title">
        <h1 class="title_text">Inhwa's Blog</h1>
        <h1 class="title_text">Inhwa's Blog</h1>
        <h4 class="title_content">안녕하세요 박인화 블로그롱가링가링입니다.</h4>
      </div>
    </div>
  );
}

export default LadingPage;

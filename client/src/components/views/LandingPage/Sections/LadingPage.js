import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../../../css/LadingPage.css';

function LadingPage() {
  // navigate
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      console.log(response);
    });
  }, []);

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
    <div>
    <div class="menu_bar">
      <ul class="menu">
         <li><a href="#">Home</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Board</a></li>
         <li><a href="#">Reference</a></li>
         <li><a href="#">Contact</a></li>
         <button>로그인</button>
         <button>회원가입</button>
         <button onClick={onClickHandler}>로그아웃</button>
      </ul>
     </div>
     <nav>
        <div className={"title"}>
          <h1 className={"title_text"}>Inhwa's Blog</h1>
        </div>
     </nav>
     </div>
  );
}

export default LadingPage;

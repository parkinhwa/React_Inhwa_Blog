import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";
import "../../../css/LoginPage.css"
import NavBar from "../NavBar/NavBar";
function LoginPage() {
  // navigate
  const navigate = useNavigate();

  // react-redux
  const dispatch = useDispatch();

  //useState
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // handler
  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(
      `Email: ${Email}
      Password:${Password}`
    );

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((res) => {
      // console.log(`login success: ${res.body}`);
      console.log(`login success:`, res.payload.loginSuccess);
      if (res.payload.loginSuccess) {
        navigate("/home");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div class="loginpage">
      <form class="login" onSubmit={onSubmitHandler}>
        <span>Email</span>
        <input type="email" placeholder="Email Address" value={Email} onChange={onEmailHandler} />
        <span>Password</span>
        <input type="password" placeholder="Password" value={Password} onChange={onPasswordHandler} />
        <button>Login</button>
      </form>
    </div>
  );
}
export default LoginPage;


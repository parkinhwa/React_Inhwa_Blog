import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";
import "../../../css/Register.css"
function RegisterPage() {
  // navigate
  const navigate = useNavigate();

  // react-redux
  const dispatch = useDispatch();

  //useState
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  // handler
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
    // setPassword(event.target.value)
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(
      `Email: ${Email}
	   Password:${Password}`
    );

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야합니다.");
    }

    let body = {
      email: Email,
      name: Name,
      password: Password,
    };

    dispatch(registerUser(body)).then((res) => {
      console.log(`register success: ${res.body}`);
      if (res.payload.success) {
        navigate("/login");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div class="registerpage">
      <form class="register" onSubmit={onSubmitHandler}>
        <span>Email</span>
        <input type="email" placeholder="Email Address" value={Email} onChange={onEmailHandler} />
        <span>Name</span>
        <input type="name" placeholder="Name" value={Name} onChange={onNameHandler} />
        <span>Password</span>
        <input type="password" placeholder="Password" value={Password} onChange={onPasswordHandler} />
        <span>Confirm Password</span>
        <input
          placeholder="Confirm Password"
          type="conpassword"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default RegisterPage;

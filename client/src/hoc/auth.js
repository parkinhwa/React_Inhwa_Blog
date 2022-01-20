import { Axios } from "axios";
import React, { useEffect } from "react";
import { auth } from "../_actions/user_action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//option => null(아무나 접근가능한 페이지), true(로그인한 유저만 출입가능), false(로그인한 유저는 출입불가)
//adminRouten => admin 유저만 들어가길 원하면 true
export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    
    const dispatch = useDispatch();

    // navigate
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);
        //로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            navigate("/login");
          }
        } else {
          //로그인 한 상태
          if (adminRoute && !response.payload.isAdmin) {
            navigate("/");
          } else {
            if (option === false) navigate("/");;
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}

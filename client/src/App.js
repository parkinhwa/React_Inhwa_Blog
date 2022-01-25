import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,

  //Link
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/Sections/LadingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import NavBarPage from "./components/views/NavBar/NavBar";
import Auth from "./hoc/auth";

function App() {
  const Auth_LadingPage = Auth(LandingPage, null);
  const Auth_LoginPage = Auth(LoginPage, false);
  const Auth_RegisterPage = Auth(RegisterPage, false);
  const Auth_NavBarPage = Auth(NavBarPage, false);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Auth_NavBarPage/>} />
        <Route exact path="/home" element={<Auth_LadingPage/>}/>
        <Route exact path="/login" element={<Auth_LoginPage/>} />
        <Route exact path="/register" element={<Auth_RegisterPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

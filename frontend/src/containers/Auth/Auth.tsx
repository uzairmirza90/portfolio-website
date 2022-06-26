import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserSignIn from "../../components/UserSignIn/UserSignIn";
import UserSignUp from "../../components/UserSignUp/UserSignUp";
import { createTheme } from "@mui/material/styles";
import {
  FIELDS_SHOULD_NOT_EMPTY,
  ENTER_EMAIL,
  ENTER_PASSWORD,
  LOGIN_SUCCESS,
  LOCAL_STORAGE_INFO,
  ENTER_CONFIRM_PASSWORD,
  ENTER_NAME,
  PASSWORDS_NOT_MATCH,
  REGISTER_SUCCESS,
  LS_GET_ITEM,
} from "../../utils/constants/constants";
import { login, register } from "../../utils/authFunctions/authFunctions";
import { ConfirmPassword, Email, Name, Password } from "../../utils/types/types";

const theme = createTheme();

const Auth: React.FC = () => {
  const [notify, setNotify] = React.useState<string>("");
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userFormData: FormData = new FormData(event.currentTarget);

    const email: Email = userFormData.get("email");
    const password: Password = userFormData.get("password");

    if (email === "" && password === "")    setNotify(FIELDS_SHOULD_NOT_EMPTY);
    else if (email === "")                  setNotify(ENTER_EMAIL);
    else if (password === "")               setNotify(ENTER_PASSWORD);
    else {
      try {
        await login(email, password);
        setNotify(LOGIN_SUCCESS);
        setLoggedIn(true);

        setTimeout(() => {
          navigate("/profile");
        }, 3000);

      } catch (error: any) {
        setNotify(error.response.data.message);
        console.log(error.response.data.message);
        setLoggedIn(false);
      }
    }
  };

  const handleRegisterSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const userFormData = new FormData(event.currentTarget);

    const name: Name = userFormData.get("name");
    const email: Email = userFormData.get("email");
    const password: Password = userFormData.get("password");
    const confirmPassword: ConfirmPassword = userFormData.get("confirmpassword");

    if (
      name === "" &&
      email === "" &&
      password === "" &&
      confirmPassword === ""
    )                                       setNotify(FIELDS_SHOULD_NOT_EMPTY);
    else if (name === "")                   setNotify(ENTER_NAME);
    else if (email === "")                  setNotify(ENTER_EMAIL);
    else if (password === "")               setNotify(ENTER_PASSWORD);
    else if (confirmPassword === "")        setNotify(ENTER_CONFIRM_PASSWORD);
    else if (password !== confirmPassword)  setNotify(PASSWORDS_NOT_MATCH);
    else {
      try {
        await register(name, email, password)
        setNotify(REGISTER_SUCCESS);
        setLoggedIn(true);

        setTimeout(() => {
          navigate("/profile");
        }, 2500);
        
      } catch (error: any) {
        setNotify(error.response.data.message);
        setLoggedIn(false);
      }
    }
  };

  React.useEffect(() => {
    if (LS_GET_ITEM) {
      navigate("/profile");
    }
  }, [navigate]);

  return (
    <>
      {location.pathname === "/login" ? (
        <UserSignIn
          notify={notify}
          setNotify={setNotify}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          theme={theme}
          handleLoginSubmit={handleLoginSubmit}
        />
      ) : (
        <UserSignUp
          notify={notify}
          setNotify={setNotify}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          theme={theme}
          handleRegisterSubmit={handleRegisterSubmit}
        />
      )}
    </>
  );
};

export default Auth;

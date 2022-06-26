import React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../../containers/Auth/Auth";


const Login = () => {

  const navigate = useNavigate()
  React.useEffect(() => {
    if(localStorage.getItem('userInfo')){
      navigate('/profile')
    }
  }, [navigate])
  return <Auth />;
};

export default Login;

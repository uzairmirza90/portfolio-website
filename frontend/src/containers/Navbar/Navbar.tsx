import React from "react";
import Logo from "../../components/Logo/Logo";
import logoImage from "../../assets/images/logo.jpg";
import NavItem from "../../components/NavItem/NavItem";
import "../Navbar/Navbar.scss";
import Title from "../../components/Title/Title";
import { Nav_Menu } from "../../utils/data/data";
import NavMenuIcon from "../../components/NavMenuIcon/NavMenuIcon";
import { Divider } from "@mui/material";
import ThemeSwitch from "../../components/ThemeSwitch/ThemeSwitch";
import { useNavigate } from "react-router-dom";
import { NavMenuItemInterface } from "../../utils/interfaces/interfaces";

const Navbar: React.FC = () => {
  const [userName, setUserName] = React.useState<string>("")
  const navigate = useNavigate()

  React.useEffect(() => {
    if(localStorage.getItem('userInfo')){
      setUserName(JSON.parse(localStorage.getItem("userInfo") || "").name)
    }
  }, [])
  
  return (
    <>
    <nav className="navbar">
      <div className="title-container" onClick={() => navigate("/")}>
        <Logo 
          logoImage={logoImage} 
          />
        <Title 
          text="Portfolio"
          />
      </div>
      <div className="nav-items">
        
        {Nav_Menu?.map((item: NavMenuItemInterface, index: number) => {
          return <NavItem 
            key={index} 
            text={item.text} 
            path={item.path}
            />;
        })}
        <ThemeSwitch />
      </div>
      <NavMenuIcon />
    </nav>
    <Divider sx={{backgroundColor: 'var(--divider-color)'}}/>
    </>
  );
};

export default Navbar;

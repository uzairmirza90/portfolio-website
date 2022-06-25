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
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar: React.FC = () => {
  const [userName, setUserName] = React.useState<string>("");
  const navigate = useNavigate();
  

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const logoutUser = () => {
    localStorage.removeItem('userInfo')
    handleClose()
    setUserName('')
    navigate('/login')
  }


  React.useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setUserName(JSON.parse(localStorage.getItem("userInfo") || "").name);
    }else {
      setUserName('')
    }
  }, [localStorage.getItem("userInfo")]);

  return (
    <>
      <nav className="navbar">
        <div className="title-container" onClick={() => navigate("/")}>
          <Logo logoImage={logoImage} />
          <Title text="Portfolio" />
        </div>
        <div className="nav-items">
          {Nav_Menu?.map((item: NavMenuItemInterface, index: number) => {
            if (item.text === "Log In" && userName !== "") {
              return (
                <div>
                  <Button
                    variant="contained" endIcon={<KeyboardArrowDownIcon />}
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{
                      backgroundColor: 'rgba(58, 173, 144, 0.837)',
                      fontWeight: '800',
                      '&:hover': {
                        backgroundColor: 'rgba(58, 173, 144, 0.837)'
                      }
                    }}
                  >
                    {userName}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={() => logoutUser()}>Logout</MenuItem>
                  </Menu>
                </div>
              );
            } else {
              return <NavItem key={index} text={item.text} path={item.path} />;
            }
          })}
          <ThemeSwitch />
        </div>
        <NavMenuIcon />
      </nav>
      <Divider sx={{ backgroundColor: "var(--divider-color)" }} />
    </>
  );
};

export default Navbar;

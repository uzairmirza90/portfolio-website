import React from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import { Nav_Menu } from "../../utils/data/data";
import NavItem from "../NavItem/NavItem";
import "./NavMenuIcon.scss";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useNavigate } from "react-router-dom";

const NavMenuIcon = () => {
  const [userName, setUserName] = React.useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate()

  const logoutUser = () => {
    localStorage.removeItem('userInfo')
    setUserName('')
    navigate('/login')
  }

  React.useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setUserName(JSON.parse(localStorage.getItem("userInfo") || "").name);
    } else {
      setUserName("");
    }
  }, [localStorage.getItem("userInfo")]);

  return (
    <div className="nav-icon">
      <ThemeSwitch />
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <DensityMediumOutlinedIcon sx={{ color: "var(--text-color)" }} />
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
        {Nav_Menu.map((item, index) => {
          return (
            <MenuItem
              key={index}
              onClick={handleClose}
              sx={{
                width: 200,
                height: 55,
                backgroundColor: "var(--nav-menu-container)",
              }}
            >
              {item.text === "Log In" && userName !== "" ? (
               <>
                <Typography>Profile</Typography>
                <button onClick={() => logoutUser()}>Logout</button>
               </>
              ) : (
                <NavItem text={item.text} path={item.path} />
              )}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default NavMenuIcon;

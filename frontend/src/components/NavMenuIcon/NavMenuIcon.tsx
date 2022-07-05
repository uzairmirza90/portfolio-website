import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import { Nav_Menu } from "../../utils/data/data";
import "./NavMenuIcon.scss";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useNavigate } from "react-router-dom";
import CallMadeIcon from "@mui/icons-material/CallMade";

const NavMenuIcon = () => {
  const [userName, setUserName] = React.useState<string>("");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path: string) => {
    setAnchorElNav(null);
    navigate(`${path}`);
  };

  const logoutUser = () => {
    localStorage.removeItem("userInfo");
    setUserName("");
    navigate("/login");
  };

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

      <Box className="header-container">
        <AppBar position="static" className="header-bar">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <DensityMediumOutlinedIcon sx={{color: 'var(--text-color)'}}/>
                </IconButton>
                <Menu
                  PaperProps={{
                    style: {
                      width: "100%",
                      paddingLeft: 30,
                      paddingRight: 30,
                      paddingTop: 20,
                      paddingBottom: 20,
                      boxShadow: "none",
                      backgroundColor: "var(--container-color)",
                    },
                  }}
                  className="header-menu"
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={() => {
                    setAnchorElNav(null);
                  }}
                >
                  {Nav_Menu.map((page, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleCloseNavMenu(page.path || "")}
                      sx={{
                        height: 80,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {page.text === "Log In" && userName !== "" ? (
                        <>
                          <Typography color={"var(--text-color)"} fontWeight={600}
                              fontSize={18}>
                            Profile
                          </Typography>
                          <Button
                            variant="contained"
                            onClick={() => logoutUser()}
                            sx={{
                              backgroundColor: "rgba(58, 173, 144, 0.837)",
                              fontWeight: "800",
                              "&:hover": {
                                backgroundColor: "rgba(58, 173, 144, 0.837)",
                              },
                            }}
                          >
                            Log out
                          </Button>
                        </>
                      ) : (
                        <>
                          <Typography
                            textAlign="center"
                            sx={{
                              fontWeight: 700,
                              fontSize: 18,
                              color: "var(--text-color)",
                            }}
                          >
                            {page.text}
                          </Typography>
                          <ListItemIcon>
                            <CallMadeIcon
                              fontSize="small"
                              sx={{ color: "var(--text-color)" }}
                            />
                          </ListItemIcon>
                        </>
                      )}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavMenuIcon;

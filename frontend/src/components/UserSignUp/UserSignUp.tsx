import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/system";
import Logo from "../Logo/Logo";
import signupImage from "../../assets/images/logo.jpg";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import { UserSignUpInterface } from "../../utils/interfaces/interfaces";


const UserSignUp: React.FC<UserSignUpInterface> = ({
  notify,
  setNotify,
  loggedIn,
  setLoggedIn,
  theme,
  handleRegisterSubmit,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <Logo logoImage={signupImage} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {notify !== "" ? (
            <Alert severity={loggedIn ? "success" : "error"}
            sx={{ width: "100%", marginTop: 4 }}
            >{notify}</Alert>
          ) : (
            notify
          )}
          {loggedIn ? (
            <Box sx={{ display: "flex", marginTop: 15 }}>
              <CircularProgress size={50} sx={{color: 'rgba(58, 173, 144, 0.837)'}} />
            </Box>
          ) : (
            <Box
              component="form"
              noValidate
              onSubmit={handleRegisterSubmit}
              sx={{ mt: 3 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
           
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                autoFocus
           
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                autoComplete="new-confirmpassword"
                autoFocus
         
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: 'rgba(58, 173, 144, 0.837)' ,
                '&:hover': {
                  backgroundColor: 'rgba(58, 173, 144, 0.837)'
                }}}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link to={"/login"} style={{textDecoration: 'none'}}>
                    <Typography color='var(--text-color)'>Already have an account? <span style={{color: 'rgba(58, 173, 144, 0.837)', textDecoration: 'underline'}}>Sign In</span></Typography></Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UserSignUp;

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import loginImage from "../../assets/images/logo.jpg";
import { Theme } from "@mui/system";
import { UserSignInInterface } from "../../utils/interfaces/interfaces";
import '../UserSignIn/UserSignIn.scss'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


const UserSignIn: React.FC<UserSignInInterface> = ({
  notify,
  setNotify,
  loggedIn,
  setLoggedIn,
  theme,
  handleLoginSubmit,
}) => {
  return (
    <ThemeProvider theme={lightTheme}>
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
            <Logo logoImage={loginImage} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {notify !== "" ? (
            <Alert
              severity={loggedIn ? "success" : "error"}
              sx={{ width: "100%", marginTop: 4 }}
            >
              {notify}
            </Alert>
          ) : (
            notify
          )}
          {loggedIn ? (
            <Box sx={{ display: "flex", marginTop: 15 }}>
              <CircularProgress size={50} sx={{color: 'rgba(58, 173, 144, 0.837)'}}/>
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleLoginSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
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
                autoComplete="current-password"
              
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 , backgroundColor: 'rgba(58, 173, 144, 0.837)', 
              '&:hover': {
                backgroundColor: 'rgba(58, 173, 144, 0.837)'
              }}}
                
              >
                Sign In
              </Button>
              <Grid container justifyContent={'center'}>
                <Grid item>
                  <Link to="/signup" style={{textDecoration: 'none'}}>
                    <Typography color='var(--text-color)'>"Don't have an account? <span style={{color: 'rgba(58, 173, 144, 0.837)', textDecoration: 'underline'}}>Sign Up</span>"</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UserSignIn;

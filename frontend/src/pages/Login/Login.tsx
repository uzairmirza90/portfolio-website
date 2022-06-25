import React from "react";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../../components/Logo/Logo";
import loginImage from "../../assets/images/logo.jpg";
import axios, { AxiosResponse } from "axios";
import { Navigate, useNavigate, Link, NavigateFunction } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import {
  ENTER_EMAIL,
  ENTER_PASSWORD,
  FIELDS_SHOULD_NOT_EMPTY,
  LOCAL_STORAGE_INFO,
  LOGIN_API_URL,
  LOGIN_SUCCESS,
} from "../../utils/constants/constants";

const theme = createTheme();

const Login = () => {
  const [notify, setNotify] = React.useState<string>("");
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userFormData: FormData = new FormData(event.currentTarget);

    const email: FormDataEntryValue | null = userFormData.get('email')
    const password: FormDataEntryValue | null = userFormData.get('password')

    if (email === "" && password === "") {
      setNotify(FIELDS_SHOULD_NOT_EMPTY);
    } else if (email === "") {
      setNotify(ENTER_EMAIL);
    } else if (password === "") {
      setNotify(ENTER_PASSWORD);
    } else {
      try {
        const userApiData: AxiosResponse = await axios.post(
          LOGIN_API_URL,
          {
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        setNotify(LOGIN_SUCCESS);
        setLoggedIn(true);
        localStorage.setItem(
          LOCAL_STORAGE_INFO,
          JSON.stringify(userApiData.data)
        );

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

  React.useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_INFO)) {
      navigate("/profile");
      console.log(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_INFO) || "").name
      );
    }
  }, [navigate]);

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
            <Logo logoImage={loginImage} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {notify !== "" ? (
            <Alert severity={loggedIn ? "success" : "error"} sx={{width: '100%'}}>{notify}</Alert>
          ) : (
            notify
          )}
          {loggedIn ? (
            <Box sx={{ display: "flex", marginTop: 15 }}>
            <CircularProgress size={60} />
          </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
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
                onChange={() => setNotify("")}
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
                onChange={() => setNotify("")}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#">Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;

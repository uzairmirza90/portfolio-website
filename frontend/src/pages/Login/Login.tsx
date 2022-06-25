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
import { Navigate, useNavigate, Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

const theme = createTheme();

const Login = () => {
  const [error, setError] = React.useState<string>("");
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userFormData: FormData = new FormData(event.currentTarget);

    if (
      userFormData.get("email") === "" &&
      userFormData.get("password") === ""
    ) {
      setError("Fields should not be empty");
    } else if (userFormData.get("email") === "") {
      setError("Please enter your email");
    } else if (userFormData.get("password") === "") {
      setError("Please enter your password");
    } else {
      try {
        const userApiData: AxiosResponse = await axios.post(
          "/api/users/login",
          {
            email: userFormData.get("email"),
            password: userFormData.get("password"),
          },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        setError("Login Successful!");
        setLoggedIn(true);
        localStorage.setItem("userInfo", JSON.stringify(userApiData.data));

        setTimeout(() => {
          navigate("/profile");
        }, 4000);

      } catch (error: any) {
        setError(error.response.data.message);
        console.log(error.response.data.message);
        setLoggedIn(false);
      }
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      navigate("/profile");
      console.log(JSON.parse(localStorage.getItem("userInfo") || "").name);
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
          {error !== "" ? (
            <Alert severity={loggedIn ? "success" : "error"}>{error}</Alert>
          ) : (
            error
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
                onChange={() => setError("")}
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
                onChange={() => setError("")}
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

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
import Logo from "../../components/Logo/Logo";
import signupImage from "../../assets/images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import {
  ENTER_CONFIRM_PASSWORD,
  ENTER_EMAIL,
  ENTER_NAME,
  ENTER_PASSWORD,
  FIELDS_SHOULD_NOT_EMPTY,
  LOCAL_STORAGE_INFO,
  PASSWORDS_NOT_MATCH,
  REGISTER_API_URL,
  REGISTER_SUCCESS,
} from "../../utils/constants/constants";

const theme = createTheme();

const SignUp = () => {
  const [notify, setNotify] = React.useState<string>("");
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userFormData = new FormData(event.currentTarget);

    const name: FormDataEntryValue | null = userFormData.get("name");
    const email: FormDataEntryValue | null = userFormData.get("email");
    const password: FormDataEntryValue | null = userFormData.get("password");
    const confirmPassword: FormDataEntryValue | null = userFormData.get("confirmpassword");

    if (name === "" && email === "" && password === "" && confirmPassword === "") {
      setNotify(FIELDS_SHOULD_NOT_EMPTY);
    } else if (name === "") {
      setNotify(ENTER_NAME);
    } else if (email === "") {
      setNotify(ENTER_EMAIL);
    } else if (password === "") {
      setNotify(ENTER_PASSWORD);
    } else if (confirmPassword === "") {
      setNotify(ENTER_CONFIRM_PASSWORD);
    } else if (password !== confirmPassword) {
      setNotify(PASSWORDS_NOT_MATCH);
    } else {
      try {
        const userApiData = await axios.post(REGISTER_API_URL, {
            name: name,
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        console.log(userApiData.data);
        setNotify(REGISTER_SUCCESS);
        setLoggedIn(true);
        localStorage.setItem(LOCAL_STORAGE_INFO, JSON.stringify(userApiData.data));

        setTimeout(() => {navigate("/profile")}, 2500);

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
            <Logo logoImage={signupImage} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {notify !== "" ? (
            <Alert severity={loggedIn ? "success" : "error"}>{notify}</Alert>
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
              noValidate
              onSubmit={handleSubmit}
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
                onChange={() => setNotify("")}
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
                    autoComplete="new-password"
                    autoFocus
                onChange={() => setNotify("")}
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
                onChange={() => setNotify("")}
                  />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={"/login"}>Already have an account? Sign in</Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;

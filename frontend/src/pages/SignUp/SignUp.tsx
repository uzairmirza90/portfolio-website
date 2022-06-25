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


const theme = createTheme();

const SignUp = () => {
  const [error, setError] = React.useState<string>("");
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userFormData = new FormData(event.currentTarget);

    if (
      userFormData.get("name") === "" &&
      userFormData.get("email") === "" &&
      userFormData.get("password") === "" &&
      userFormData.get("confirmpassword") === ""
    ) {
      setError("Fields should not be empty");
    } else if (userFormData.get("name") === "") {
      setError("Please enter you name!");
    } else if (userFormData.get("email") === "") {
      setError("Please enter your email");
    } else if (userFormData.get("password") === "") {
      setError("Please enter you password");
    } else if (userFormData.get("confirmpassword") === "") {
      setError("Please enter you confirm password");
    } else if (
      userFormData.get("password") !== userFormData.get("confirmpassword")
    ) {
      setError("Passwords do not match!");
    } else {
      try {
        const userApiData = await axios.post(
          "/api/users/register",
          {
            name: userFormData.get("name"),
            email: userFormData.get("email"),
            password: userFormData.get("password"),
          },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        console.log(userApiData.data);
        setError("Register Successful!");
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
            <Logo logoImage={signupImage} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
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
          )
        : (
<Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{
                    color: 'red'
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  autoComplete="new-confirmpassword"
                />
              </Grid>
            </Grid>
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
        ) 
        }
          
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;

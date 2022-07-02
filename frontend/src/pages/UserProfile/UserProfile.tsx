import { Grid, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [userInfo, setUserInfo] = React.useState<string>("");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setUserInfo(JSON.parse(localStorage.getItem("userInfo") || "").name);
    }
  }, []);

  React.useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, []);
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
      <div style={{ display: "flex" }}>
        <h1 style={{ marginRight: "20px" }}>Welcome to the Portfolio!</h1>
        <h1 style={{ color: "rgba(58, 173, 144, 0.837)" }}>
          {userInfo.toUpperCase()}
        </h1>
      </div>
    </Box>
  );
};

export default UserProfile;

import { Box } from "@mui/material";
// import React from "react";

const PageNotFound = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: 20 }}
    >
      <div className="sorry">
        <p
          style={{
            color: "rgba(58, 173, 144, 0.837)",
            fontSize: 50,
            fontWeight: 600,
            marginRight: 30,
          }}
        >
          Sorry !!!
        </p>
      </div>
      <div className="page-not-found">
        <p style={{ fontSize: 40, fontWeight: 500 }}>Page Not Found</p>
      </div>
    </Box>
  );
};

export default PageNotFound;

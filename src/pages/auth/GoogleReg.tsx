import React from "react";
// import googleIcon from "../../assets/images/google-icon-logo-svgrepo-com.svg";
import { GoogleIcon } from "../../assets/customIcons";
import { Button } from "@mui/material";
const clientId =
  "784544161259-kgks7ehf9ese00a3st5iii3hmtcefvs1.apps.googleusercontent.com"; // Replace with your Google OAuth client ID
const redirectUri = "http://localhost:4002/api/v1/auth/callback/google";
const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=${encodeURIComponent(
  redirectUri
)}&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&state=signup&client_id=${clientId}`;

const GoogleReg: React.FC = () => {
  const handleAuth = () => {
    window.location.href = googleAuthUrl;
  };

  return (
    <Button
      type="submit"
      fullWidth
      variant="outlined"
      color="secondary"
      onClick={handleAuth}
      startIcon={<GoogleIcon />}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleReg;

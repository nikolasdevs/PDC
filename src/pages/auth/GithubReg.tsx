import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Auth.css";

const clientId = "Iv23litYl9olUvHDDcLZ"; // Replace with your GitHub OAuth client ID
const redirectUri = "http://localhost:4002/api/v1/auth/callback/github";
const githubAuthUrl = `https://github.com/login/oauth/authorize?response_type=code&redirect_uri=${encodeURIComponent(
  redirectUri
)}&scope=user:email&state=signup&client_id=${clientId}`;

const GithubReg: React.FC = () => {
  const handleAuth = () => {
    window.location.href = githubAuthUrl;
  };

  return (
  
      <Button
        type="submit"
        fullWidth
        variant="outlined"
        color="secondary"
        onClick={handleAuth}
        startIcon={<GitHubIcon />}
      >
        Sign in with Github
      </Button>
     
   
  );
};

export default GithubReg;

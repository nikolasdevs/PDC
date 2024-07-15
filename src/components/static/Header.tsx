import { Link } from "react-router-dom";

import Logo from "../../assets/images/PDClogo.svg";
import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  AppBar,
  Box,
  Container,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  Drawer,
  Divider,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "0",
        bgcolor: "transparent",
        backgroundImage: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            marginTop: 2,
            height: "5rem",
            justifyContent: "space-between",
            flexShrink: 0,
            borderRadius: "0px",
            bgcolor: "transparent",
            backdropFilter: "blur(18px)",
            boxShadow:
              "0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)",
            ...theme.applyStyles("dark", {
              bgcolor: "hsla(220, 0%, 0%, 0.7)",
              boxShadow:
                "0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)",
            }),
          })}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              ml: "-18px",
              px: 0,
            }}
          >
            <Link to="/home">
              <img src={Logo} alt="logo" />
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <MenuItem>
              <Link to="/home">
                <Typography variant="body1" color="text.primary">
                  Home
                </Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/challenges">
                <Typography variant="body1" color="text.primary">
                  Challenges
                </Typography>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to="/blog">
                <Typography variant="body2" color="text.primary">
                  Blog
                </Typography>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to="/gopro">
                <Typography variant="body2" color="text.primary">
                  Go Pro
                </Typography>
              </Link>
            </MenuItem>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Button
              color="primary"
              variant="text"
              size="small"
              component="a"
              href="/login"
            >
              Sign in
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="small"
              component="a"
              href="/register"
            >
              Join us
            </Button>
          </Box>

          <Box sx={{ display: { sm: "", md: "none" } }}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: "30px", p: "4px" }}
            >
              <MenuIcon />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: "60dvw",
                  p: 2,
                  mb: 4,
                  backgroundColor: "background.paper",
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    flexGrow: 1,
                    marginBottom:4,
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem>
                  {" "}
                  <Link to="/home">Home</Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link to="/challenges">Challenges</Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link to="/blog">Blog</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/gopro">Go Pro</Link>
                </MenuItem>

                <Divider />

                <MenuItem>
                  <Button
                    color="primary"
                    variant="contained"
                    component="a"
                    href="/register/"
                    target="_blank"
                    sx={{ width: "100%" }}
                  >
                    Join us
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    color="primary"
                    variant="outlined"
                    component="a"
                    href="/login/"
                    target="_blank"
                    sx={{ width: "100%" }}
                  >
                    Sign in
                  </Button>
                </MenuItem>
              </Box>{" "}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

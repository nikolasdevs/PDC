import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import {
  Badge,
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  Menu,
  MenuItem,
  Paper,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./ListItems";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogOut from "../../components/static/LogOut";
import { RootState } from "../../app/store";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Copyright(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Copyright © "}
      <Link href="/">Your Website</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: string) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const LoginTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  // const usersName = useSelector(
  //   (state: RootState) =>
  //     state.auth.user?.name.charAt(0).toUpperCase() +
  //     state.auth.user?.name.slice(1)
  // );
  // console.log(usersName);

  useEffect(() => {
    const checkAuthStatus = async () => {
      if (!isAuthenticated) {
        navigate("/login");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating some async operation
        setIsLoading(false);
      }
    };
    checkAuthStatus();
  }, [isAuthenticated, navigate]);

  // const welcome = `Welcome ${usersName}`;

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuId = "primary-search-account-menu";
  const MenuPopupState = () => {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <KeyboardArrowDownIcon
              {...bindTrigger(popupState)}
              cursor={"pointer"}
            />
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Profile</MenuItem>
              <MenuItem onClick={popupState.close}>My account</MenuItem>
              <MenuItem onClick={popupState.close}>
                <LogOut />
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  };

  return (
    <Stack>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Oval
            height={100}
            width={100}
            color="#00BFFF"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#333"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <ThemeProvider theme={LoginTheme}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}>
              <Toolbar
                sx={{
                  pr: "24px", // keep right padding when drawer closed
                }}
              >
                <IconButton
                  edge="start"
                  aria-label="open drawer"
                  onClick={toggleDrawer}
                  sx={{
                    marginRight: "36px",
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h6"
                  noWrap
                  sx={{ flexGrow: 1 }}
                >
                  Profile Page
                </Typography>

                <Box>
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Box
                      sx={{
                        display: { xs: "none", sm: "flex" },
                        alignItems: "center",
                      }}
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      color="inherit"
                    >
                      {" "}
                      <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                          <NotificationsIcon />
                        </Badge>
                      </IconButton>
                      <IconButton size="large" edge="end">
                        <AccountCircle />
                      </IconButton>
                      <Typography
                        variant="body2"
                        noWrap
                        component="div"
                        sx={{
                          display: { xs: "none", sm: "block" },
                          marginLeft: 2,
                          cursor: "pointer",
                        }}
                      >
                        {/* {<Typography>{welcome}!</Typography>} */}
                      </Typography>{" "}
                      <MenuPopupState />
                    </Box>
                  </Box>
                </Box>
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
              <Toolbar
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  px: [1],
                }}
              >
                <IconButton onClick={toggleDrawer}>
                  <ChevronLeftIcon />
                </IconButton>
              </Toolbar>
              <Divider />
              <List component="nav">
                {mainListItems}
                <Divider sx={{ my: 1 }} />
                {secondaryListItems}
              </List>
            </Drawer>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                height: "100vh",
                overflow: "auto",
              }}
            >
              <Toolbar />

              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                  {/* Chart */}
                  <Grid item xs={12} md={8} lg={9}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 240,
                      }}
                    >
                      {/* <Chart /> */}
                    </Paper>
                  </Grid>
                  {/* Recent Deposits */}
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 240,
                      }}
                    >
                      {/* <Deposits /> */}
                      {/* <Typography>Hello {usersName}</Typography> */}
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={8} lg={9}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 240,
                      }}
                    >
                      {/* <Chart /> */}
                    </Paper>
                  </Grid>
                  {/* Recent Deposits */}
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 240,
                      }}
                    >
                      {/* <Deposits /> */}
                    </Paper>
                  </Grid>
                  {/* Recent Orders */}
                  <Grid item xs={12}>
                    <Paper
                      sx={{ p: 2, display: "flex", flexDirection: "column" }}
                    >
                      {/* <Orders /> */}
                    </Paper>
                  </Grid>
                </Grid>
                <Copyright />
              </Container>
            </Box>
          </Box>
        </ThemeProvider>
      )}
    </Stack>
  );
};

export default Dashboard;

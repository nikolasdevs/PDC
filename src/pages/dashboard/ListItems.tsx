import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BookIcon from "@mui/icons-material/Book";
import ForumIcon from "@mui/icons-material/Forum";
import FitbitIcon from "@mui/icons-material/Fitbit";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import InfoIcon from "@mui/icons-material/Info";

import LogOut from "../../components/static/LogOut";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Members" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FitbitIcon />
      </ListItemIcon>
      <ListItemText primary="Challenges" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LeaderboardIcon />
      </ListItemIcon>
      <ListItemText primary="LeaderBoard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ForumIcon />
      </ListItemIcon>
      <ListItemText primary="Forum" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BookIcon />
      </ListItemIcon>
      <ListItemText primary="Blog" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset></ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Support" />
    </ListItemButton>
    <ListItemButton>
      
      <LogOut />
    </ListItemButton>
  </React.Fragment>
);

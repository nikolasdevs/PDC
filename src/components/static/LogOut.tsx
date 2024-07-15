import { Box, ListItemIcon } from "@mui/material";
import { logOut } from "../../reducers/userSlice";
import { useDispatch } from "react-redux";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const LogOut = () => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Box
      onClick={onLogOut}
      sx={{
        display: "flex",
      }}
    >
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      Sign Out
    </Box>
  );
};

export default LogOut;

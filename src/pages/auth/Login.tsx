import * as React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
  Divider,
  Stack,
  styled,
  FormControl,
} from "@mui/material";

import { Card as MuiCard } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import ForgotPassword from "./ForgotPassword";

import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useFormik } from "formik";
import { getCurrentUser } from "../../reducers/userSlice";
import GoogleReg from "./GoogleReg";
import GithubReg from "./GithubReg";
import { SignInContainer } from "./ContextTheme";

interface LoginData {
  name: string;
  email: string;
  password: string;
  profilePic: string;
}

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  gap: theme.spacing(4),
  width: "100%",
  padding: theme.spacing(2),
  boxShadow:
    theme.palette.mode === "light"
      ? "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px"
      : "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
    width: "450px",
  },
}));

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(4, "Password should be of minimum 4 characters length")
    .required("Password is required"),
});

const Login: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const errorMessage = useSelector()
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const auth = useSelector((state: RootState) => state.auth);
  const formik = useFormik<LoginData>({
    initialValues: { name: "", email: "", password: "", profilePic: "" },
    validationSchema,
    onSubmit: async (data: LoginData) => {
      dispatch(getCurrentUser(data) as any);
    },
  });

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SignInContainer>
      <Stack
        direction="row"
        sx={{
          position: { xs: "static", sm: "fixed" },
          width: "fit",
          left: "0",

          p: { xs: 2, sm: 4 },
          zIndex: "10000",
        }}
      >
        <Button startIcon={<ArrowBackRoundedIcon />} component="a" href="/">
          Back
        </Button>
      </Stack>
      <Stack
        justifyContent="center"
        sx={{ height: { xs: "100%", sm: "100dvh" }, p: 2 }}
      >
        <Card>
          {/* <Logo /> */}
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <FormControl>
              {["email", "password"].map((field) => (
                <TextField
                  key={field}
                  fullWidth
                  id={field}
                  name={field}
                  type={field === "password" ? "password" : "text"}
                  placeholder={
                    field === "password" ? "••••••" : "your@email.com"
                  }
                  value={formik.values[field as keyof typeof formik.values]} // Add index signature
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched[field as keyof typeof formik.values] &&
                    Boolean(formik.errors[field as keyof typeof formik.values])
                  }
                  helperText={
                    formik.touched[field as keyof typeof formik.values] &&
                    formik.errors[field as keyof typeof formik.values]
                  }
                  margin="normal"
                  InputProps={{
                    sx: {
                      paddingBlock: "1.5rem", // Adjust the padding here
                    },
                  }}
                />
              ))}
            </FormControl>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Link
                component="button"
                onClick={handleClickOpen}
                variant="body2"
              >
                Forgot your password?
              </Link>
            </Box>

            <ForgotPassword open={open} handleClose={handleClose} />

            <Button type="submit" fullWidth variant="contained">
              {auth.status === "loading" ? "Loading..." : "Login"}
            </Button>

            {auth.error && <Typography color="error">{auth.error}</Typography>}
            {auth.status === "succeeded" && (
              <Typography color="primary">Login successful!</Typography>
            )}

            <Link href="/register" variant="body2" sx={{ alignSelf: "center" }}>
              Don&apos;t have an account? Sign up
            </Link>
          </Box>

          <Divider>or</Divider>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <GoogleReg />
            <GithubReg />
          </Box>
        </Card>
      </Stack>
    </SignInContainer>
  );
};

export default Login;

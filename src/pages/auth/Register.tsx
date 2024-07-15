import * as React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Link,
  Divider,
  Stack,
  styled,
} from "@mui/material";

import { Card as MuiCard } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useFormik } from "formik";
import { logOut, signupUser } from "../../reducers/userSlice";
import GoogleReg from "./GoogleReg";
import GithubReg from "./GithubReg";
import { SignInContainer } from "./ContextTheme";

interface SignupInput {
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
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(4, "Password should be of minimum 4 characters length")
    .required("Password is required"),
});

const Register: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", profilePic:'' },
    validationSchema,
    onSubmit: async (data: SignupInput) => {
      dispatch(signupUser(data) as any);
    },
  });

  React.useEffect(() => {
    if (auth.status === "succeeded") {
      dispatch(logOut());
      alert(`User Register Successfully`);
      navigate("/login");
    }
  }, [auth, navigate, dispatch]);

  return (
    <SignInContainer direction="column" justifyContent="space-between">
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
            {["name", "email", "password"].map((field) => (
              <TextField
                key={field}
                fullWidth
                id={field}
                name={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                type={field === "password" ? "password" : "text"}
                value={formik.values[field as keyof typeof formik.values]}
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
              />
            ))}

            <Box
              sx={{
                marginTop: "1.5rem",
              }}
            >
              <Button
                variant="contained"
                fullWidth
                type="submit"
                className=" auth-button"
              >
                {auth.status === "loading" ? "Loading..." : "Register"}
              </Button>

              {auth.error && (
                <Typography color="error">{auth.error}</Typography>
              )}
              {auth.status === "succeeded" && (
                <Typography color="primary">
                  Registration successful!
                </Typography>
              )}
            </Box>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
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

export default Register;

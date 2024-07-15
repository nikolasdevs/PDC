import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../components/utils/baseURL";
import { RootState } from "../app/store";
import { AxiosError } from "axios";

// Define the types for the state
interface User {
  
  name: string;
  email: string;
  password: string;
  profilePic: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (data: User, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/auth/signup/email`, data);
      const token = response.data.data.token;
      localStorage.setItem("accessToken", token);
      return response.data;
    } catch (err: unknown) {
      const axiosError = err as AxiosError;
      if (axiosError.response && axiosError.response.data) {
        return thunkAPI.rejectWithValue(axiosError.response.data);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (data: User, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/auth/signin/email`, data);
      const token = response.data.data.token;

      localStorage.setItem("accessToken", token);

      const userResponse = await axiosInstance.get(`/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const profile = userResponse.data.data.profile.email;
      console.log(profile);

      return userResponse.data;
    } catch (err: unknown) {
      const axiosError = err as AxiosError;
      if (axiosError.response && axiosError.response.data) {
        return thunkAPI.rejectWithValue(axiosError.response.data);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

const loadState = (): AuthState => {
  try {
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (token && user) {
      return {
        user,
        token,
        isAuthenticated: true,
        status: "idle",
        error: null,
      };
    }
    return initialState;
  } catch (err) {
    return initialState;
  }
};

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
  status: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadState(),
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; accessToken: string }>
    ) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.isAuthenticated = true;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state) => {
        state.status = "failed";
        state.error = "Signup failed";
      })

      .addCase(getCurrentUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getCurrentUser.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.status = "succeeded";
          state.user = action.payload;
          state.isAuthenticated = true;
          localStorage.setItem("user", JSON.stringify(action.payload));
        }
      )
      .addCase(getCurrentUser.rejected, (state) => {
        state.status = "failed";
        state.error = "Login credentials do not match";
        state.user = null;
      });
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectAuthStatus = (state: RootState) => state.auth.status;
export const selectAuthError = (state: RootState) => state.auth.error;
export default authSlice.reducer;

// export const selectCurrentUser = (state: { auth: AuthState }) =>
//   state.auth.user;
// export const selectCurrentToken = (state: { auth: AuthState }) =>
//   state.auth.token;

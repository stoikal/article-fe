import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import AuthService, { LoginCreds, RegisterCreds } from "../services/auth.service";

interface User {
  access_token?: string;
  current_user?: {
    id: number,
    username: string,
    email: string,
    role: 'visitor' | 'author',
  }
}

interface AuthState {
  user: User;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AuthState = {
  user: {},
  status: 'idle',
}

export const login = createAsyncThunk(
  'auth/login',
  async (payload: LoginCreds) => {
    const response = await AuthService.login(payload);

    return response;
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (payload: RegisterCreds) => {
    const response = await AuthService.register(payload);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(login.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(login.fulfilled, (state, action) => {
      const { access_token, current_user } = action.payload;
      state.status = 'idle';
      state.user = { access_token, current_user };
    })
    .addCase(login.rejected, (state) => {
      state.status = 'failed';
    })
    .addCase(register.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(register.fulfilled, (state, action) => {
      state.status = 'idle';
      console.log("extra register", action.payload)
    })
    .addCase(register.rejected, (state) => {
      state.status = 'failed';
    })
  }
})

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

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

export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}


export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(incrementAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(incrementAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      // state.user = action.payload;
    });
  }
})
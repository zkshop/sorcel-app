import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthData, isLoggedIn, loginWithEmail, logout } from 'auth';

type AuthSliceType = AuthData & { loading: boolean };

const initialState: AuthSliceType = {
  email: null,
  issuer: null,
  phoneNumber: null,
  publicAddress: null,
  loading: false,
};

export const login = createAsyncThunk(
  'auth/login',
  async (email: string) => await loginWithEmail(email),
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async () => await isLoggedIn(),
);

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  await logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (_, action) => ({
      ...action.payload,
      loading: false,
    }));

    builder.addCase(login.pending, (state) => ({ ...state, loading: true }));

    builder.addCase(getCurrentUser.fulfilled, (_, action) => ({
      ...action.payload,
      loading: false,
    }));

    builder.addCase(getCurrentUser.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getCurrentUser.rejected, (state) => ({ ...state, loading: false }));
    builder.addCase(logoutUser.pending, () => ({ ...initialState, loading: false }));
  },
});

export default authSlice.reducer;

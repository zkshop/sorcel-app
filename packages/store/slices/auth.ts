import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AuthData, PaperWallet } from '@3shop/domains';
import { AuthService } from '@3shop/domains';
import { UserAuthenticationClient } from '@3shop/infra';

type AuthType = 'paper' | 'magic' | 'WALLET';

type AuthSliceType = AuthData & { loading: boolean; type?: AuthType };
const Auth = AuthService(UserAuthenticationClient());

const initialState: AuthSliceType = {
  email: null,
  issuer: null,
  phoneNumber: null,
  publicAddress: null,
  loading: false,
};

export const getPaperWallet = async (code: string) => {
  const res = await axios.post<PaperWallet>('/api/get-paper-wallet', {
    code,
  });

  return res.data;
};

export const loginWithPaper = createAsyncThunk(
  'auth/login-with-paper',
  async (code: string) => await getPaperWallet(code),
);

export const login = createAsyncThunk(
  'auth/login',
  async (email: string) => await Auth.loginWithEmail(email),
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async () => await Auth.refresh(),
);

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  await Auth.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (_, action) => ({
      ...action.payload,
      loading: false,
      type: 'magic',
    }));

    builder.addCase(login.pending, (state) => ({ ...state, loading: true }));

    builder.addCase(getCurrentUser.fulfilled, (_, action) => ({
      ...action.payload,
      loading: false,
    }));

    builder.addCase(getCurrentUser.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getCurrentUser.rejected, (state) => ({ ...state, loading: false }));
    builder.addCase(logoutUser.pending, () => initialState);

    builder.addCase(loginWithPaper.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(loginWithPaper.rejected, (state) => ({ ...state, loading: false }));
    builder.addCase(loginWithPaper.fulfilled, (state, action) => ({
      ...state,
      publicAddress: action.payload.walletAddress,
      email: action.payload.email,
      loading: false,
      type: 'paper',
    }));
  },
});

export default authSlice.reducer;

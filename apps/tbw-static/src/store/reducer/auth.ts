import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserAuthenticationClient } from '../../clients/auth';
import { AuthClient, AuthData, AuthServiceType, AuthType, PaperWallet } from './auth.type';

export function AuthService(client: AuthClient): AuthServiceType {
  return {
    loginWithEmail: async (email) => await client.login(email),
    refresh: async () => await client.verifyUser(),
    logout: async () => {
      await client.logout();
    },
    loginWithPaper: async (code) => await client.loginWithPaper(code),
  };
}

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
    // getCurrentUser
    builder.addCase(getCurrentUser.fulfilled, (_, action) => ({
      ...action.payload,
      loading: false,
    }));
    builder.addCase(getCurrentUser.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getCurrentUser.rejected, (state) => ({ ...state, loading: false }));
    builder.addCase(logoutUser.pending, () => initialState);

    // loginWithPaper
    builder.addCase(loginWithPaper.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(loginWithPaper.rejected, (state) => ({ ...state, loading: false }));
    builder.addCase(loginWithPaper.fulfilled, (state, action) => ({
      ...state,
      publicAddress: action.payload.walletAddress,
      email: action.payload.email,
      loading: false,
      type: 'PAPER',
    }));
  },
});

export default authSlice.reducer;

import { envVars } from '@3shop/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AuthData, AuthType, PaperWallet } from './auth.type';

type AuthSliceType = AuthData & { loading: boolean; type?: AuthType };

const initialState: AuthSliceType = {
  email: null,
  issuer: null,
  phoneNumber: null,
  publicAddress: null,
  loading: false,
};

export const getPaperWallet = async (code: string) => {
  const url = `${envVars.PUBLIC_FUNCTIONS_URL}/api/shop/get-paper-wallet`;
  const res = await axios.post<PaperWallet>(url, {
    code,
  });

  return res.data;
};

export const loginWithPaper = createAsyncThunk(
  'auth/login-with-paper',
  async (code: string) => await getPaperWallet(code),
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
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

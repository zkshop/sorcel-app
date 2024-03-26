import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {settings as UserSettings} from '../../../apps/admin/src/hooks/useUserSettings';

type UserSettingsState = {
  settings: UserSettings | null;
  loading: boolean;
};

const initialState: UserSettingsState = {
  settings: null,
  loading: false,
};

const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {
    setUserSettings: (state, action: PayloadAction<UserSettings | null>) => {
      state.settings = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setUserSettings, setLoading } = userSettingsSlice.actions;
export default userSettingsSlice.reducer;

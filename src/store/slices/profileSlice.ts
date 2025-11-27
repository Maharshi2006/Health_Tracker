import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProfileState {
  avatar: string;
  name: string;
  age: string;
  waterGoal: number;
  stepsGoal: number;
  sleepGoal: number;
  isOnboarded: boolean;
}

const initialState: ProfileState = {
  avatar: '😊',
  name: '',
  age: '',
  waterGoal: 8,
  stepsGoal: 10000,
  sleepGoal: 8,
  isOnboarded: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Partial<ProfileState>>) => {
      return { ...state, ...action.payload };
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAge: (state, action: PayloadAction<string>) => {
      state.age = action.payload;
    },
    setWaterGoal: (state, action: PayloadAction<number>) => {
      state.waterGoal = action.payload;
    },
    setStepsGoal: (state, action: PayloadAction<number>) => {
      state.stepsGoal = action.payload;
    },
    setSleepGoal: (state, action: PayloadAction<number>) => {
      state.sleepGoal = action.payload;
    },
    setOnboarded: (state, action: PayloadAction<boolean>) => {
      state.isOnboarded = action.payload;
    },
    resetProfile: () => initialState,
  },
});

export const {
  setProfile,
  setAvatar,
  setName,
  setAge,
  setWaterGoal,
  setStepsGoal,
  setSleepGoal,
  setOnboarded,
  resetProfile,
} = profileSlice.actions;

export const selectProfile = (state: { profile: ProfileState }) =>
  state.profile;
export const selectGoals = (state: { profile: ProfileState }) => ({
  waterGoal: state.profile.waterGoal,
  stepsGoal: state.profile.stepsGoal,
  sleepGoal: state.profile.sleepGoal,
});
export const selectIsOnboarded = (state: { profile: ProfileState }) =>
  state.profile.isOnboarded;

export default profileSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ActivityType = 'water' | 'steps' | 'sleep';

export interface ActivityLog {
  id: string;
  type: ActivityType;
  value: number;
  unit: string;
  time: string;
  date: string;
  notes?: string;
  timestamp: number;
}

interface ActivityState {
  logs: ActivityLog[];
}

const initialState: ActivityState = {
  logs: [],
};

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    addActivity: (
      state,
      action: PayloadAction<Omit<ActivityLog, 'id' | 'timestamp'>>,
    ) => {
      const newLog: ActivityLog = {
        ...action.payload,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
      };
      state.logs.unshift(newLog);
    },
    removeActivity: (state, action: PayloadAction<string>) => {
      state.logs = state.logs.filter(log => log.id !== action.payload);
    },
    clearAllActivities: state => {
      state.logs = [];
    },
  },
});

export const { addActivity, removeActivity, clearAllActivities } =
  activitySlice.actions;

export const selectAllActivities = (state: { activity: ActivityState }) =>
  state.activity.logs;

export const selectActivitiesByType = (
  state: { activity: ActivityState },
  type: ActivityType,
) => state.activity.logs.filter(log => log.type === type);

export const selectTodayActivities = (state: { activity: ActivityState }) => {
  const today = new Date().toDateString();
  return state.activity.logs.filter(
    log => new Date(log.timestamp).toDateString() === today,
  );
};

export const selectLast7DaysActivities = (state: {
  activity: ActivityState;
}) => {
  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  return state.activity.logs.filter(log => log.timestamp >= sevenDaysAgo);
};

export const selectTodayStats = (state: { activity: ActivityState }) => {
  const todayLogs = selectTodayActivities(state);

  const waterLogs = todayLogs.filter(log => log.type === 'water');
  const stepsLogs = todayLogs.filter(log => log.type === 'steps');
  const sleepLogs = todayLogs.filter(log => log.type === 'sleep');

  return {
    water: waterLogs.reduce((sum, log) => sum + log.value, 0),
    steps: stepsLogs.reduce((sum, log) => sum + log.value, 0),
    sleep: sleepLogs.reduce((sum, log) => sum + log.value, 0),
  };
};

export const selectWeeklyStats = (state: { activity: ActivityState }) => {
  const weekLogs = selectLast7DaysActivities(state);

  const waterLogs = weekLogs.filter(log => log.type === 'water');
  const stepsLogs = weekLogs.filter(log => log.type === 'steps');
  const sleepLogs = weekLogs.filter(log => log.type === 'sleep');

  const uniqueDays = new Set(
    weekLogs.map(log => new Date(log.timestamp).toDateString()),
  );

  return {
    totalLogs: weekLogs.length,
    daysActive: uniqueDays.size,
    totalWater: waterLogs.reduce((sum, log) => sum + log.value, 0),
    totalSteps: stepsLogs.reduce((sum, log) => sum + log.value, 0),
    totalSleep: sleepLogs.reduce((sum, log) => sum + log.value, 0),
  };
};

export default activitySlice.reducer;

export {
  default as activityReducer,
  addActivity,
  removeActivity,
  clearAllActivities,
  selectAllActivities,
  selectActivitiesByType,
  selectTodayActivities,
  selectLast7DaysActivities,
  selectTodayStats,
  selectWeeklyStats,
} from './activitySlice';

export type { ActivityLog, ActivityType } from './activitySlice';

export {
  default as profileReducer,
  setProfile,
  setAvatar,
  setName,
  setAge,
  setWaterGoal,
  setStepsGoal,
  setSleepGoal,
  setOnboarded,
  resetProfile,
  selectProfile,
  selectGoals,
  selectIsOnboarded,
} from './profileSlice';

export type { ProfileState } from './profileSlice';

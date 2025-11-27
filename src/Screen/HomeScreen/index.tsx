import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  selectTodayStats,
  addActivity,
  ActivityLog,
} from '../../store/slices/activitySlice';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const profile = useAppSelector(state => state.profile);
  const userName = profile.name || 'User';
  const userAvatar = profile.avatar || '😊';
  const waterGoal = profile.waterGoal;
  const stepsGoal = profile.stepsGoal;
  const sleepGoal = profile.sleepGoal;

  const todayStats = useAppSelector(selectTodayStats);
  const waterIntake = todayStats.water;
  const stepsWalked = todayStats.steps;
  const sleepHours = todayStats.sleep;

  const getCurrentDate = () => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const date = new Date();
    return `${days[date.getDay()]}, ${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const getCurrentDateString = () => {
    return new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const waterProgress = Math.min((waterIntake / waterGoal) * 100, 100);
  const stepsProgress = Math.min((stepsWalked / stepsGoal) * 100, 100);
  const sleepProgress = Math.min((sleepHours / sleepGoal) * 100, 100);

  const handleLogWater = () => {
    const activityData: Omit<ActivityLog, 'id' | 'timestamp'> = {
      type: 'water',
      value: 1,
      unit: 'glasses',
      time: getCurrentTime(),
      date: getCurrentDateString(),
      notes: 'Quick log from home',
    };
    dispatch(addActivity(activityData));
  };

  const handleLogSteps = () => {
    const activityData: Omit<ActivityLog, 'id' | 'timestamp'> = {
      type: 'steps',
      value: 500,
      unit: 'steps',
      time: getCurrentTime(),
      date: getCurrentDateString(),
      notes: 'Quick log from home',
    };
    dispatch(addActivity(activityData));
  };

  const handleLogSleep = () => {
    const activityData: Omit<ActivityLog, 'id' | 'timestamp'> = {
      type: 'sleep',
      value: 1,
      unit: 'hours',
      time: getCurrentTime(),
      date: getCurrentDateString(),
      notes: 'Quick log from home',
    };
    dispatch(addActivity(activityData));
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FE" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.avatar}>{userAvatar}</Text>
          <View style={styles.headerTextContainer}>
            <Text style={styles.welcomeText}>Welcome back, {userName}!</Text>
            <Text style={styles.dateText}>{getCurrentDate()}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIconBlue}>
              <Text style={styles.cardIconText}>💧</Text>
            </View>
            <Text style={styles.cardTitle}>Water Intake</Text>
          </View>
          <Text style={styles.progressText}>
            <Text style={styles.progressValue}>{waterIntake}</Text>
            <Text style={styles.progressGoal}> / {waterGoal} glasses</Text>
          </Text>
          <View style={styles.progressBarContainer}>
            <View
              style={[styles.progressBarBlue, { width: `${waterProgress}%` }]}
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIconGreen}>
              <Text style={styles.cardIconText}>👣</Text>
            </View>
            <Text style={styles.cardTitleGreen}>Steps Walked</Text>
          </View>
          <Text style={styles.progressText}>
            <Text style={styles.progressValueGreen}>
              {stepsWalked.toLocaleString()}
            </Text>
            <Text style={styles.progressGoal}>
              {' '}
              / {stepsGoal.toLocaleString()} steps
            </Text>
          </Text>
          <View style={styles.progressBarContainer}>
            <View
              style={[styles.progressBarGreen, { width: `${stepsProgress}%` }]}
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIconPurple}>
              <Text style={styles.cardIconText}>🌙</Text>
            </View>
            <Text style={styles.cardTitlePurple}>Sleep Hours</Text>
          </View>
          <Text style={styles.progressText}>
            <Text style={styles.progressValuePurple}>{sleepHours}</Text>
            <Text style={styles.progressGoal}> / {sleepGoal} hours</Text>
          </Text>
          <View style={styles.progressBarContainer}>
            <View
              style={[styles.progressBarPurple, { width: `${sleepProgress}%` }]}
            />
          </View>
        </View>

        <View style={styles.quickActionsContainer}>
          <Text style={styles.quickActionsTitle}>Quick Actions</Text>

          <TouchableOpacity
            style={styles.quickActionItem}
            onPress={handleLogWater}
          >
            <View style={styles.quickActionLeft}>
              <View style={styles.quickActionIconBlue}>
                <Text style={styles.quickActionIconText}>💧</Text>
              </View>
              <Text style={styles.quickActionText}>Log Water Intake</Text>
            </View>
            <Text style={styles.quickActionPlus}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionItemGreen}
            onPress={handleLogSteps}
          >
            <View style={styles.quickActionLeft}>
              <View style={styles.quickActionIconGreen}>
                <Text style={styles.quickActionIconText}>👣</Text>
              </View>
              <Text style={styles.quickActionTextGreen}>Log Steps Walked</Text>
            </View>
            <Text style={styles.quickActionPlusGreen}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionItemPurple}
            onPress={handleLogSleep}
          >
            <View style={styles.quickActionLeft}>
              <View style={styles.quickActionIconPurple}>
                <Text style={styles.quickActionIconText}>🌙</Text>
              </View>
              <Text style={styles.quickActionTextPurple}>Log Sleep Hours</Text>
            </View>
            <Text style={styles.quickActionPlusPurple}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

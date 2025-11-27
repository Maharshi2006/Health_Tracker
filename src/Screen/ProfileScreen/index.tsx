import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import { AppStackScreenProps } from '../../models/NavigationType';
import styles from './style';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setProfile as setReduxProfile } from '../../store/slices/profileSlice';
import { selectWeeklyStats } from '../../store/slices/activitySlice';
import { colors } from '../../config/colors';
import { emojis } from '../../config/images';

type ProfileScreenPropsTypeDefine = AppStackScreenProps<'Profile'>;

const AVATARS = emojis.avatars.slice(0, 8);

interface ProfileData {
  avatar: string;
  name: string;
  age: string;
  waterGoal: number;
  stepsGoal: number;
  sleepGoal: number;
}

const ProfileScreen = ({}: ProfileScreenPropsTypeDefine) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const reduxProfile = useAppSelector(state => state.profile);

  const weeklyStats = useAppSelector(selectWeeklyStats);

  const [profile, setProfile] = useState<ProfileData>({
    avatar: reduxProfile.avatar,
    name: reduxProfile.name,
    age: reduxProfile.age.toString(),
    waterGoal: reduxProfile.waterGoal,
    stepsGoal: reduxProfile.stepsGoal,
    sleepGoal: reduxProfile.sleepGoal,
  });

  useEffect(() => {
    setProfile({
      avatar: reduxProfile.avatar,
      name: reduxProfile.name,
      age: reduxProfile.age.toString(),
      waterGoal: reduxProfile.waterGoal,
      stepsGoal: reduxProfile.stepsGoal,
      sleepGoal: reduxProfile.sleepGoal,
    });
  }, [reduxProfile]);

  const [tempProfile, setTempProfile] = useState<ProfileData>(profile);

  const handleEdit = () => {
    setTempProfile(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  const handleSave = () => {
    dispatch(
      setReduxProfile({
        avatar: tempProfile.avatar,
        name: tempProfile.name,
        age: tempProfile.age,
        waterGoal: tempProfile.waterGoal,
        stepsGoal: tempProfile.stepsGoal,
        sleepGoal: tempProfile.sleepGoal,
      }),
    );

    setProfile(tempProfile);
    setIsEditing(false);
    Alert.alert('Success', 'Profile updated successfully!');
  };

  const getWaterProgress = () => {
    const daysActive = weeklyStats.daysActive || 1;
    return weeklyStats.totalWater / daysActive / profile.waterGoal;
  };

  const getStepsProgress = () => {
    const daysActive = weeklyStats.daysActive || 1;
    return weeklyStats.totalSteps / daysActive / profile.stepsGoal;
  };

  const getSleepProgress = () => {
    const daysActive = weeklyStats.daysActive || 1;
    return weeklyStats.totalSleep / daysActive / profile.sleepGoal;
  };

  const renderViewMode = () => (
    <>
      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{profile.avatar}</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{profile.name}</Text>
          <Text style={styles.profileAge}>{profile.age} years old</Text>
        </View>
      </View>

      <View style={styles.statsGrid}>
        <View style={[styles.statCard, styles.statCardPurple]}>
          <Text style={styles.statIcon}>{emojis.chart}</Text>
          <Text style={styles.statLabel}>Total{'\n'}Logs</Text>
          <Text style={[styles.statValue, styles.statValuePurple]}>
            {weeklyStats.totalLogs}
          </Text>
        </View>
        <View style={[styles.statCard, styles.statCardGreen]}>
          <Text style={styles.statIcon}>{emojis.calendar}</Text>
          <Text style={styles.statLabel}>Days{'\n'}Active</Text>
          <Text style={[styles.statValue, styles.statValueGreen]}>
            {weeklyStats.daysActive}
          </Text>
        </View>
      </View>

      <View style={styles.statsGrid}>
        <View style={[styles.statCard, styles.statCardBlue]}>
          <Text style={styles.statIcon}>{emojis.water}</Text>
          <Text style={[styles.statLabel, styles.statLabelBlue]}>
            Total{'\n'}Water
          </Text>
          <Text style={[styles.statValue, styles.statValueBlue]}>
            {weeklyStats.totalWater} glasses
          </Text>
        </View>
        <View style={[styles.statCard, styles.statCardPink]}>
          <Text style={styles.statIcon}>{emojis.steps}</Text>
          <Text style={[styles.statLabel, styles.statLabelPink]}>
            Total{'\n'}Steps
          </Text>
          <Text style={[styles.statValue, styles.statValuePink]}>
            {weeklyStats.totalSteps.toLocaleString()}
          </Text>
        </View>
      </View>

      <View style={styles.goalsSection}>
        <View style={styles.goalsSectionHeader}>
          <Text style={styles.goalsSectionIcon}>✨</Text>
          <Text style={styles.goalsSectionTitle}>Daily Goals</Text>
        </View>

        <View style={styles.goalCard}>
          <View style={styles.goalHeader}>
            <View style={[styles.goalIcon, styles.goalIconWater]}>
              <Text style={styles.goalIconText}>💧</Text>
            </View>
            <Text style={styles.goalTitle}>Water Goal</Text>
            <View style={styles.goalValueBadge}>
              <Text style={styles.goalValueText}>
                {profile.waterGoal} glasses
              </Text>
            </View>
          </View>
          <View style={styles.goalProgressContainer}>
            <View
              style={[
                styles.goalProgressBar,
                styles.goalProgressWater,
                { width: `${Math.min(getWaterProgress() * 100, 100)}%` },
              ]}
            />
          </View>
        </View>

        <View style={styles.goalCard}>
          <View style={styles.goalHeader}>
            <View style={[styles.goalIcon, styles.goalIconSteps]}>
              <Text style={styles.goalIconText}>👟</Text>
            </View>
            <Text style={styles.goalTitle}>Steps Goal</Text>
            <View style={[styles.goalValueBadge, styles.goalValueBadgeGreen]}>
              <Text style={[styles.goalValueText, styles.goalValueTextGreen]}>
                {profile.stepsGoal.toLocaleString()} steps
              </Text>
            </View>
          </View>
          <View style={styles.goalProgressContainer}>
            <View
              style={[
                styles.goalProgressBar,
                styles.goalProgressSteps,
                { width: `${Math.min(getStepsProgress() * 100, 100)}%` },
              ]}
            />
          </View>
        </View>

        <View style={styles.goalCard}>
          <View style={styles.goalHeader}>
            <View style={[styles.goalIcon, styles.goalIconSleep]}>
              <Text style={styles.goalIconText}>🌙</Text>
            </View>
            <Text style={styles.goalTitle}>Sleep Goal</Text>
            <View style={[styles.goalValueBadge, styles.goalValueBadgePurple]}>
              <Text style={[styles.goalValueText, styles.goalValueTextPurple]}>
                {profile.sleepGoal} hours
              </Text>
            </View>
          </View>
          <View style={styles.goalProgressContainer}>
            <View
              style={[
                styles.goalProgressBar,
                styles.goalProgressSleep,
                { width: `${getSleepProgress() * 100}%` },
              ]}
            />
          </View>
        </View>
      </View>
    </>
  );

  const renderEditMode = () => (
    <>
      <View style={styles.editSection}>
        <Text style={styles.editSectionTitle}>Choose Avatar</Text>
        <View style={styles.avatarGrid}>
          {AVATARS.map((avatar, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.avatarOption,
                tempProfile.avatar === avatar && styles.avatarOptionSelected,
              ]}
              onPress={() => setTempProfile({ ...tempProfile, avatar })}
            >
              <Text style={styles.avatarOptionText}>{avatar}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.editInputsRow}>
        <View style={styles.editInputGroup}>
          <Text style={styles.editInputLabel}>Name</Text>
          <TextInput
            style={styles.editInput}
            value={tempProfile.name}
            onChangeText={text =>
              setTempProfile({ ...tempProfile, name: text })
            }
            placeholder="Enter name"
          />
        </View>
        <View style={styles.editInputGroupSmall}>
          <Text style={styles.editInputLabel}>Age</Text>
          <TextInput
            style={styles.editInput}
            value={tempProfile.age}
            onChangeText={text => setTempProfile({ ...tempProfile, age: text })}
            placeholder="Age"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.goalsSection}>
        <View style={styles.goalsSectionHeader}>
          <Text style={styles.goalsSectionIcon}>✨</Text>
          <Text style={styles.goalsSectionTitle}>Daily Goals</Text>
        </View>

        <View style={styles.goalCard}>
          <View style={styles.goalHeader}>
            <View style={[styles.goalIcon, styles.goalIconWater]}>
              <Text style={styles.goalIconText}>💧</Text>
            </View>
            <Text style={styles.goalTitle}>Water Goal</Text>
            <View style={styles.goalValueBadge}>
              <Text style={styles.goalValueText}>
                {tempProfile.waterGoal} glasses
              </Text>
            </View>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={20}
            step={1}
            value={tempProfile.waterGoal}
            onValueChange={value =>
              setTempProfile({ ...tempProfile, waterGoal: value })
            }
            minimumTrackTintColor="#3B82F6"
            maximumTrackTintColor="#E5E7EB"
            thumbTintColor="#3B82F6"
          />
          <View style={styles.sliderLabels}>
            <Text style={styles.sliderLabelText}>1</Text>
            <Text style={styles.sliderLabelText}>20</Text>
          </View>
        </View>

        <View style={styles.goalCard}>
          <View style={styles.goalHeader}>
            <View style={[styles.goalIcon, styles.goalIconSteps]}>
              <Text style={styles.goalIconText}>👟</Text>
            </View>
            <Text style={styles.goalTitle}>Steps Goal</Text>
            <View style={[styles.goalValueBadge, styles.goalValueBadgeGreen]}>
              <Text style={[styles.goalValueText, styles.goalValueTextGreen]}>
                {tempProfile.stepsGoal.toLocaleString()} steps
              </Text>
            </View>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={1000}
            maximumValue={50000}
            step={1000}
            value={tempProfile.stepsGoal}
            onValueChange={value =>
              setTempProfile({ ...tempProfile, stepsGoal: value })
            }
            minimumTrackTintColor="#10B981"
            maximumTrackTintColor="#E5E7EB"
            thumbTintColor="#10B981"
          />
          <View style={styles.sliderLabels}>
            <Text style={styles.sliderLabelText}>1000</Text>
            <Text style={styles.sliderLabelText}>50000</Text>
          </View>
        </View>

        <View style={styles.goalCard}>
          <View style={styles.goalHeader}>
            <View style={[styles.goalIcon, styles.goalIconSleep]}>
              <Text style={styles.goalIconText}>🌙</Text>
            </View>
            <Text style={styles.goalTitle}>Sleep Goal</Text>
            <View style={[styles.goalValueBadge, styles.goalValueBadgePurple]}>
              <Text style={[styles.goalValueText, styles.goalValueTextPurple]}>
                {tempProfile.sleepGoal} hours
              </Text>
            </View>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={4}
            maximumValue={12}
            step={0.5}
            value={tempProfile.sleepGoal}
            onValueChange={value =>
              setTempProfile({ ...tempProfile, sleepGoal: value })
            }
            minimumTrackTintColor={colors.purple}
            maximumTrackTintColor={colors.gray200}
            thumbTintColor={colors.purple}
          />
          <View style={styles.sliderLabels}>
            <Text style={styles.sliderLabelText}>4</Text>
            <Text style={styles.sliderLabelText}>12</Text>
          </View>
        </View>
      </View>
    </>
  );

  return (
    <KeyboardAvoidingView
      style={styles.flexContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
          {isEditing ? (
            <View style={styles.headerActions}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleCancel}
              >
                <Text style={styles.cancelButtonIcon}>{emojis.close}</Text>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonIcon}>{emojis.save}</Text>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
              <Text style={styles.editButtonIcon}>{emojis.edit}</Text>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          )}
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {isEditing ? renderEditMode() : renderViewMode()}

          <View style={styles.bottomSpacer} />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppStackScreenProps } from '../../models/NavigationType';
import styles from './style';
import Slider from '@react-native-community/slider';
import { useAppDispatch } from '../../store/hooks';
import { setProfile, setOnboarded } from '../../store/slices/profileSlice';
import { colors } from '../../config/colors';
import { emojis } from '../../config/images';

type SetupProfileScreenPropsTypeDefine = AppStackScreenProps<'SetupProfile'>;

const avatars = emojis.avatars.slice(0, 8);

const SetupProfileScreen = ({
  navigation: _navigation,
}: SetupProfileScreenPropsTypeDefine) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const [selectedAvatar, setSelectedAvatar] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [waterGoal, setWaterGoal] = useState(8);
  const [stepsGoal, setStepsGoal] = useState(10000);
  const [sleepGoal, setSleepGoal] = useState(8);

  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');

  const validateName = (value: string): boolean => {
    if (!value.trim()) {
      setNameError('Name is required');
      return false;
    }
    if (value.trim().length < 2) {
      setNameError('Name must be at least 2 characters');
      return false;
    }
    if (value.trim().length > 50) {
      setNameError('Name must be less than 50 characters');
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
      setNameError('Name can only contain letters and spaces');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateAge = (value: string): boolean => {
    if (!value.trim()) {
      setAgeError('Age is required');
      return false;
    }
    const ageNum = parseInt(value, 10);
    if (isNaN(ageNum)) {
      setAgeError('Please enter a valid number');
      return false;
    }
    if (ageNum < 1 || ageNum > 120) {
      setAgeError('Age must be between 1 and 120');
      return false;
    }
    setAgeError('');
    return true;
  };

  const handleNameChange = (value: string) => {
    setName(value);
    if (nameError) {
      validateName(value);
    }
  };

  const handleAgeChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setAge(numericValue);
    if (ageError) {
      validateAge(numericValue);
    }
  };

  const handleCompleteSetup = () => {
    const isNameValid = validateName(name);
    const isAgeValid = validateAge(age);

    if (!isNameValid || !isAgeValid) {
      Alert.alert(
        'Validation Error',
        'Please fill in all required fields correctly.',
        [{ text: 'OK' }],
      );
      return;
    }

    dispatch(
      setProfile({
        avatar: avatars[selectedAvatar],
        name: name.trim(),
        age: age,
        waterGoal: waterGoal,
        stepsGoal: stepsGoal,
        sleepGoal: sleepGoal,
      }),
    );

    dispatch(setOnboarded(true));

    _navigation.navigate('BottomTab');
  };

  return (
    <KeyboardAvoidingView
      style={styles.flexContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
    >
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.profileIconContainer}>
            <View style={styles.profileIconBox}>
              <Text style={styles.profileIconText}>{emojis.profile}</Text>
            </View>
            <View style={styles.editBadge}>
              <Text style={styles.editBadgeText}>{emojis.edit}</Text>
            </View>
          </View>

          <Text style={styles.title}>Set Up Your Profile</Text>

          <Text style={styles.subtitle}>
            Let's personalize your health journey
          </Text>

          <Text style={styles.sectionTitle}>Choose Your Avatar</Text>
          <View style={styles.avatarContainer}>
            {avatars.map((avatar, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.avatarItem,
                  selectedAvatar === index && styles.avatarItemSelected,
                ]}
                onPress={() => setSelectedAvatar(index)}
              >
                <Text style={styles.avatarText}>{avatar}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.inputLabel}>Your Name</Text>
          <View
            style={[
              styles.inputContainer,
              nameError ? styles.inputContainerError : null,
            ]}
          >
            <TextInput
              style={styles.textInput}
              placeholder="Enter your name"
              placeholderTextColor={colors.gray400}
              value={name}
              onChangeText={handleNameChange}
              onBlur={() => validateName(name)}
              maxLength={50}
            />
          </View>
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

          <Text style={styles.inputLabel}>Your Age</Text>
          <View
            style={[
              styles.inputContainer,
              ageError ? styles.inputContainerError : null,
            ]}
          >
            <TextInput
              style={styles.textInput}
              placeholder="Enter your age"
              placeholderTextColor={colors.gray400}
              keyboardType="numeric"
              value={age}
              onChangeText={handleAgeChange}
              onBlur={() => validateAge(age)}
              maxLength={3}
            />
          </View>
          {ageError ? <Text style={styles.errorText}>{ageError}</Text> : null}

          <Text style={styles.goalsTitle}>Set Your Daily Goals</Text>

          <View style={styles.goalCard}>
            <View style={styles.goalHeader}>
              <View style={styles.goalIconBlue}>
                <Text style={styles.goalIconText}>{emojis.water}</Text>
              </View>
              <Text style={styles.goalLabel}>Daily Water{'\n'}Goal</Text>
              <View style={styles.goalValueBox}>
                <Text style={styles.goalValue}>{waterGoal}</Text>
                <Text style={styles.goalUnit}>glasses</Text>
              </View>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={20}
              step={1}
              value={waterGoal}
              onValueChange={setWaterGoal}
              minimumTrackTintColor={colors.primary}
              maximumTrackTintColor={colors.gray200}
              thumbTintColor={colors.primary}
            />
            <View style={styles.sliderLabels}>
              <Text style={styles.sliderLabelText}>1</Text>
              <Text style={styles.sliderLabelText}>20</Text>
            </View>
          </View>

          <View style={styles.goalCardGreen}>
            <View style={styles.goalHeader}>
              <View style={styles.goalIconGreen}>
                <Text style={styles.goalIconText}>{emojis.stepsAlt}</Text>
              </View>
              <Text style={styles.goalLabel}>Daily Steps{'\n'}Goal</Text>
              <View style={styles.goalValueBoxGreen}>
                <Text style={styles.goalValueGreen}>{stepsGoal}</Text>
                <Text style={styles.goalUnitGreen}>steps</Text>
              </View>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={1000}
              maximumValue={50000}
              step={1000}
              value={stepsGoal}
              onValueChange={setStepsGoal}
              minimumTrackTintColor={colors.success}
              maximumTrackTintColor={colors.gray200}
              thumbTintColor={colors.success}
            />
            <View style={styles.sliderLabels}>
              <Text style={styles.sliderLabelText}>1000</Text>
              <Text style={styles.sliderLabelText}>50000</Text>
            </View>
          </View>

          <View style={styles.goalCardPurple}>
            <View style={styles.goalHeader}>
              <View style={styles.goalIconPurple}>
                <Text style={styles.goalIconText}>{emojis.sleep}</Text>
              </View>
              <Text style={styles.goalLabel}>Daily Sleep{'\n'}Goal</Text>
              <View style={styles.goalValueBoxPurple}>
                <Text style={styles.goalValuePurple}>{sleepGoal}</Text>
                <Text style={styles.goalUnitPurple}>hours</Text>
              </View>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={4}
              maximumValue={12}
              step={1}
              value={sleepGoal}
              onValueChange={setSleepGoal}
              minimumTrackTintColor={colors.secondary}
              maximumTrackTintColor={colors.gray200}
              thumbTintColor={colors.secondary}
            />
            <View style={styles.sliderLabels}>
              <Text style={styles.sliderLabelText}>4</Text>
              <Text style={styles.sliderLabelText}>12</Text>
            </View>
          </View>
        </ScrollView>

        <View
          style={[
            styles.bottomContainer,
            { paddingBottom: Math.max(insets.bottom, 20) + 10 },
          ]}
        >
          <TouchableOpacity
            style={styles.completeButton}
            onPress={handleCompleteSetup}
          >
            <Text style={styles.completeButtonIcon}>{emojis.sparkle}</Text>
            <Text style={styles.completeButtonText}>Complete Setup</Text>
            <Text style={styles.completeButtonArrow}>{emojis.arrow}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SetupProfileScreen;

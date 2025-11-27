import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppStackScreenProps } from '../../models/NavigationType';
import {
  LogActivityModal,
  ActivityType,
  LogActivityData,
} from '../../component';
import { useAppDispatch } from '../../store/hooks';
import { addActivity } from '../../store/slices';
import styles from './style';

type ActivityLogScreenPropsTypeDefine = AppStackScreenProps<'ActivityLog'>;

const getActivityUnit = (type: ActivityType): string => {
  switch (type) {
    case 'water':
      return 'glasses';
    case 'steps':
      return 'steps';
    case 'sleep':
      return 'hours';
    default:
      return '';
  }
};

const ActivityLogScreen = ({}: ActivityLogScreenPropsTypeDefine) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const [activeModal, setActiveModal] = useState<ActivityType | null>(null);

  const openModal = (type: ActivityType) => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleSave = (data: LogActivityData, type: ActivityType) => {
    const value = parseFloat(data.value);

    if (isNaN(value) || value <= 0) {
      Alert.alert('Invalid Input', 'Please enter a valid number');
      return;
    }

    const today = new Date();
    const dateString = today.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });

    dispatch(
      addActivity({
        type,
        value,
        unit: getActivityUnit(type),
        time: data.time,
        date: dateString,
        notes: data.notes || undefined,
      }),
    );

    Alert.alert(
      'Success',
      `${type.charAt(0).toUpperCase() + type.slice(1)} activity logged!`,
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Log Activity</Text>
        <Text style={styles.headerSubtitle}>Choose what you want to track</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.activityCard}>
          <View style={styles.cardIconContainer}>
            <View style={[styles.cardIcon, styles.cardIconWater]}>
              <Text style={styles.cardIconText}>💧</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>Water Intake</Text>
          <Text style={styles.cardDescription}>Log your water consumption</Text>
          <TouchableOpacity
            style={[styles.logButton, styles.logButtonWater]}
            onPress={() => openModal('water')}
          >
            <Text style={styles.logButtonText}>Log Water Intake</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activityCard}>
          <View style={styles.cardIconContainer}>
            <View style={[styles.cardIcon, styles.cardIconSteps]}>
              <Text style={styles.cardIconText}>👟</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>Steps</Text>
          <Text style={styles.cardDescription}>Track your steps walked</Text>
          <TouchableOpacity
            style={[styles.logButton, styles.logButtonSteps]}
            onPress={() => openModal('steps')}
          >
            <Text style={styles.logButtonText}>Log Steps</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activityCard}>
          <View style={styles.cardIconContainer}>
            <View style={[styles.cardIcon, styles.cardIconSleep]}>
              <Text style={styles.cardIconText}>🌙</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>Sleep</Text>
          <Text style={styles.cardDescription}>Record your sleep hours</Text>
          <TouchableOpacity
            style={[styles.logButton, styles.logButtonSleep]}
            onPress={() => openModal('sleep')}
          >
            <Text style={styles.logButtonText}>Log Sleep</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      <LogActivityModal
        visible={activeModal !== null}
        activityType={activeModal}
        onClose={closeModal}
        onSave={handleSave}
      />
    </View>
  );
};

export default ActivityLogScreen;

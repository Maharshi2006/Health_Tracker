import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './style';

export type ActivityType = 'water' | 'steps' | 'sleep';

export interface LogActivityData {
  value: string;
  time: string;
  notes: string;
}

export interface ActivityConfig {
  title: string;
  icon: string;
  iconStyle: StyleProp<ViewStyle>;
  label: string;
  placeholder: string;
  buttonStyle: StyleProp<ViewStyle>;
}

interface LogActivityModalProps {
  visible: boolean;
  activityType: ActivityType | null;
  onClose: () => void;
  onSave: (data: LogActivityData, type: ActivityType) => void;
  customConfig?: Partial<ActivityConfig>;
}

const getDefaultConfig = (type: ActivityType | null): ActivityConfig | null => {
  switch (type) {
    case 'water':
      return {
        title: 'Log Water Intake',
        icon: '💧',
        iconStyle: styles.modalIconWater,
        label: 'Water Intake (glasses)',
        placeholder: 'Enter number of glasses',
        buttonStyle: styles.saveButtonWater,
      };
    case 'steps':
      return {
        title: 'Log Steps Walked',
        icon: '👟',
        iconStyle: styles.modalIconSteps,
        label: 'Steps Walked (steps)',
        placeholder: 'Enter number of steps',
        buttonStyle: styles.saveButtonSteps,
      };
    case 'sleep':
      return {
        title: 'Log Sleep Hours',
        icon: '🌙',
        iconStyle: styles.modalIconSleep,
        label: 'Sleep Hours (hours)',
        placeholder: 'Enter hours of sleep',
        buttonStyle: styles.saveButtonSleep,
      };
    default:
      return null;
  }
};

const LogActivityModal: React.FC<LogActivityModalProps> = ({
  visible,
  activityType,
  onClose,
  onSave,
  customConfig,
}) => {
  const [logData, setLogData] = useState<LogActivityData>({
    value: '',
    time: '',
    notes: '',
  });

  useEffect(() => {
    if (visible) {
      setLogData({
        value: '',
        time: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }),
        notes: '',
      });
    }
  }, [visible]);

  const handleSave = () => {
    if (activityType) {
      onSave(logData, activityType);
    }
    onClose();
  };

  const handleClose = () => {
    setLogData({ value: '', time: '', notes: '' });
    onClose();
  };

  const defaultConfig = getDefaultConfig(activityType);
  const config = defaultConfig ? { ...defaultConfig, ...customConfig } : null;

  if (!config) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.modalOverlay}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <View style={styles.modalHeaderLeft}>
              <View style={[styles.modalIcon, config.iconStyle]}>
                <Text style={styles.modalIconText}>{config.icon}</Text>
              </View>
              <Text style={styles.modalTitle}>{config.title}</Text>
            </View>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.modalContent}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>{config.label}</Text>
              <TextInput
                style={styles.textInput}
                placeholder={config.placeholder}
                placeholderTextColor="#9CA3AF"
                value={logData.value}
                onChangeText={text => setLogData({ ...logData, value: text })}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Time of Logging</Text>
              <View style={styles.timeInput}>
                <Text style={styles.timeText}>{logData.time}</Text>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Notes (Optional)</Text>
              <TextInput
                style={[styles.textInput, styles.notesInput]}
                placeholder="Add any additional notes..."
                placeholderTextColor="#9CA3AF"
                value={logData.notes}
                onChangeText={text => setLogData({ ...logData, notes: text })}
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
            </View>
          </View>

          <View style={styles.modalFooter}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.saveButton, config.buttonStyle]}
              onPress={handleSave}
            >
              <Text style={styles.saveButtonText}>✓</Text>
              <Text style={styles.saveButtonLabel}>Save{'\n'}Activity</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default LogActivityModal;

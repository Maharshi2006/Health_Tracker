import {
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
  SectionList,
} from 'react-native';
import React, { useState, useCallback, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppStackScreenProps } from '../../models/NavigationType';
import { useAppSelector } from '../../store/hooks';
import { selectAllActivities, ActivityLog } from '../../store/slices';
import styles from './style';

type HistoryScreenPropsTypeDefine = AppStackScreenProps<'History'>;

type ActivityType = 'water' | 'steps' | 'sleep';

interface HistorySection {
  title: string;
  data: ActivityLog[];
}

const getActivityIcon = (type: ActivityType): string => {
  switch (type) {
    case 'water':
      return '💧';
    case 'steps':
      return '👟';
    case 'sleep':
      return '🌙';
    default:
      return '📊';
  }
};

const getActivityIconStyle = (type: ActivityType) => {
  switch (type) {
    case 'water':
      return styles.iconWater;
    case 'steps':
      return styles.iconSteps;
    case 'sleep':
      return styles.iconSleep;
    default:
      return styles.iconWater;
  }
};

const getActivityTitle = (type: ActivityType): string => {
  switch (type) {
    case 'water':
      return 'Water';
    case 'steps':
      return 'Steps';
    case 'sleep':
      return 'Sleep';
    default:
      return 'Activity';
  }
};

const getTitleColor = (type: ActivityType) => {
  switch (type) {
    case 'water':
      return styles.titleWater;
    case 'steps':
      return styles.titleSteps;
    case 'sleep':
      return styles.titleSleep;
    default:
      return styles.titleWater;
  }
};

const getNotesColor = (type: ActivityType) => {
  switch (type) {
    case 'water':
      return styles.notesWater;
    case 'steps':
      return styles.notesSteps;
    case 'sleep':
      return styles.notesSleep;
    default:
      return styles.notesWater;
  }
};

const formatDateTitle = (timestamp: number): string => {
  const date = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  } else {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
  }
};

const HistoryScreen = ({}: HistoryScreenPropsTypeDefine) => {
  const insets = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const activities = useAppSelector(selectAllActivities);

  const groupedActivities = useMemo(() => {
    const groups: { [key: string]: ActivityLog[] } = {};

    activities.forEach(activity => {
      const dateKey = new Date(activity.timestamp).toDateString();
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(activity);
    });

    const sections: HistorySection[] = Object.entries(groups)
      .map(([dateKey, data]) => ({
        title: formatDateTitle(new Date(dateKey).getTime()),
        data: data.sort((a, b) => b.timestamp - a.timestamp),
        dateKey,
      }))
      .sort(
        (a, b) => new Date(b.dateKey).getTime() - new Date(a.dateKey).getTime(),
      );

    return sections;
  }, [activities]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const handleRefreshButton = () => {
    onRefresh();
  };

  const getTotalActivities = () => {
    const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    return activities.filter(a => a.timestamp >= sevenDaysAgo).length;
  };

  const renderActivityItem = ({ item }: { item: ActivityLog }) => (
    <View style={styles.activityItem}>
      <View style={[styles.activityIcon, getActivityIconStyle(item.type)]}>
        <Text style={styles.activityIconText}>
          {getActivityIcon(item.type)}
        </Text>
      </View>
      <View style={styles.activityContent}>
        <Text style={[styles.activityTitle, getTitleColor(item.type)]}>
          {getActivityTitle(item.type)}
        </Text>
        <Text style={styles.activityValue}>
          {item.value} {item.unit}
        </Text>
        {item.notes && (
          <Text style={[styles.activityNotes, getNotesColor(item.type)]}>
            "{item.notes}"
          </Text>
        )}
      </View>
      <Text style={styles.activityTime}>{item.time}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }: { section: HistorySection }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
    </View>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>📝</Text>
      <Text style={styles.emptyTitle}>No Activities Yet</Text>
      <Text style={styles.emptyText}>
        Start logging your activities to see them here!
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activity History</Text>
        <TouchableOpacity
          style={styles.refreshButton}
          onPress={handleRefreshButton}
          disabled={refreshing}
        >
          <Text style={styles.refreshIcon}>🔄</Text>
          <Text style={styles.refreshText}>Refresh</Text>
        </TouchableOpacity>
      </View>

      <SectionList
        sections={groupedActivities}
        keyExtractor={item => item.id}
        renderItem={renderActivityItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={[
          styles.listContent,
          groupedActivities.length === 0 && styles.emptyListContent,
        ]}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#3B82F6']}
            tintColor="#3B82F6"
          />
        }
        ListEmptyComponent={renderEmptyList}
        ListFooterComponent={
          groupedActivities.length > 0 ? (
            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>Last 7 Days Summary</Text>
              <Text style={styles.summaryText}>
                You've logged {getTotalActivities()} activities in the past
                week. Keep up the great work!
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default HistoryScreen;

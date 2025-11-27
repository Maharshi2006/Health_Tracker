import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FE',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  avatar: {
    fontSize: 40,
    marginRight: 12,
  },
  headerTextContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
  },
  dateText: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardIconBlue: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardIconGreen: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#ECFDF5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardIconPurple: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F5F3FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardIconText: {
    fontSize: 22,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3B82F6',
  },
  cardTitleGreen: {
    fontSize: 18,
    fontWeight: '600',
    color: '#10B981',
  },
  cardTitlePurple: {
    fontSize: 18,
    fontWeight: '600',
    color: '#8B5CF6',
  },

  progressText: {
    marginBottom: 12,
  },
  progressValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3B82F6',
  },
  progressValueGreen: {
    fontSize: 24,
    fontWeight: '700',
    color: '#10B981',
  },
  progressValuePurple: {
    fontSize: 24,
    fontWeight: '700',
    color: '#8B5CF6',
  },
  progressGoal: {
    fontSize: 16,
    color: '#6B7280',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarBlue: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 4,
  },
  progressBarGreen: {
    height: '100%',
    backgroundColor: '#10B981',
    borderRadius: 4,
  },
  progressBarPurple: {
    height: '100%',
    backgroundColor: '#8B5CF6',
    borderRadius: 4,
  },

  quickActionsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  quickActionsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  quickActionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  quickActionItemGreen: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ECFDF5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
  },
  quickActionItemPurple: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F3FF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 0,
    borderLeftWidth: 4,
    borderLeftColor: '#8B5CF6',
  },
  quickActionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quickActionIconBlue: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  quickActionIconGreen: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  quickActionIconPurple: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  quickActionIconText: {
    fontSize: 18,
  },
  quickActionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B82F6',
  },
  quickActionTextGreen: {
    fontSize: 16,
    fontWeight: '600',
    color: '#10B981',
  },
  quickActionTextPurple: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
  },
  quickActionPlus: {
    fontSize: 24,
    fontWeight: '600',
    color: '#3B82F6',
  },
  quickActionPlusGreen: {
    fontSize: 24,
    fontWeight: '600',
    color: '#10B981',
  },
  quickActionPlusPurple: {
    fontSize: 24,
    fontWeight: '600',
    color: '#8B5CF6',
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1F2937',
  },
  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 6,
  },
  refreshIcon: {
    fontSize: 14,
  },
  refreshText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3B82F6',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  sectionHeader: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B82F6',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  activityIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconWater: {
    backgroundColor: '#DBEAFE',
  },
  iconSteps: {
    backgroundColor: '#D1FAE5',
  },
  iconSleep: {
    backgroundColor: '#F3E8FF',
  },
  activityIconText: {
    fontSize: 20,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  titleWater: {
    color: '#3B82F6',
  },
  titleSteps: {
    color: '#10B981',
  },
  titleSleep: {
    color: '#A855F7',
  },
  activityValue: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2,
  },
  activityNotes: {
    fontSize: 13,
    fontStyle: 'italic',
    marginTop: 2,
  },
  notesWater: {
    color: '#3B82F6',
  },
  notesSteps: {
    color: '#10B981',
  },
  notesSleep: {
    color: '#A855F7',
  },
  activityTime: {
    fontSize: 13,
    color: '#9CA3AF',
    marginLeft: 8,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  emptyListContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  activityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
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
  cardIconContainer: {
    marginBottom: 16,
  },
  cardIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIconWater: {
    backgroundColor: '#DBEAFE',
  },
  cardIconSteps: {
    backgroundColor: '#D1FAE5',
  },
  cardIconSleep: {
    backgroundColor: '#F3E8FF',
  },
  cardIconText: {
    fontSize: 32,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  logButton: {
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  logButtonWater: {
    backgroundColor: '#3B82F6',
  },
  logButtonSteps: {
    backgroundColor: '#10B981',
  },
  logButtonSleep: {
    backgroundColor: '#A855F7',
  },
  logButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  bottomSpacer: {
    height: 100,
  },
});

export default styles;

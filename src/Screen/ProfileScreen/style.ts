import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundAlt,
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
    color: colors.primary,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  editButtonIcon: {
    fontSize: 14,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  cancelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 4,
  },
  cancelButtonIcon: {
    fontSize: 12,
    color: '#6B7280',
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3B82F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  saveButtonIcon: {
    fontSize: 14,
  },
  saveButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  bottomSpacer: {
    height: 100,
  },

  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 40,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  profileAge: {
    fontSize: 15,
    color: '#6B7280',
  },

  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  statCardPurple: {
    borderLeftWidth: 4,
    borderLeftColor: '#8B5CF6',
  },
  statCardGreen: {
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
  },
  statCardBlue: {
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  statCardPink: {
    borderLeftWidth: 4,
    borderLeftColor: '#EC4899',
  },
  statIcon: {
    fontSize: 20,
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 4,
    lineHeight: 16,
  },
  statLabelBlue: {
    color: '#3B82F6',
  },
  statLabelPink: {
    color: '#EC4899',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  statValuePurple: {
    color: '#8B5CF6',
  },
  statValueGreen: {
    color: '#10B981',
  },
  statValueBlue: {
    color: '#3B82F6',
  },
  statValuePink: {
    color: '#EC4899',
  },

  goalsSection: {
    marginTop: 20,
  },
  goalsSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  goalsSectionIcon: {
    fontSize: 18,
  },
  goalsSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  goalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  goalIconWater: {
    backgroundColor: '#DBEAFE',
  },
  goalIconSteps: {
    backgroundColor: '#D1FAE5',
  },
  goalIconSleep: {
    backgroundColor: '#F3E8FF',
  },
  goalIconText: {
    fontSize: 18,
  },
  goalTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: '#374151',
  },
  goalValueBadge: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  goalValueBadgeGreen: {
    backgroundColor: '#ECFDF5',
  },
  goalValueBadgePurple: {
    backgroundColor: '#FAF5FF',
  },
  goalValueText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#3B82F6',
  },
  goalValueTextGreen: {
    color: '#10B981',
  },
  goalValueTextPurple: {
    color: '#A855F7',
  },
  goalProgressContainer: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  goalProgressBar: {
    height: '100%',
    borderRadius: 4,
  },
  goalProgressWater: {
    backgroundColor: '#3B82F6',
  },
  goalProgressSteps: {
    backgroundColor: '#10B981',
  },
  goalProgressSleep: {
    backgroundColor: '#A855F7',
  },

  editSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  editSectionTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 12,
    textAlign: 'center',
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  avatarOption: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarOptionSelected: {
    backgroundColor: '#8B5CF6',
  },
  avatarOptionText: {
    fontSize: 24,
  },
  editInputsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  editInputGroup: {
    flex: 2,
  },
  editInputGroupSmall: {
    flex: 1,
  },
  editInputLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 6,
  },
  editInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1F2937',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -8,
  },
  sliderLabelText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});

export default styles;

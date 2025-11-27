import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },

  profileIconContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
    position: 'relative',
  },
  profileIconBox: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  profileIconText: {
    fontSize: 40,
  },
  editBadge: {
    position: 'absolute',
    top: 0,
    right: width / 2 - 60,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.background,
  },
  editBadgeText: {
    fontSize: 14,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.violet,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray500,
    textAlign: 'center',
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray700,
    textAlign: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 24,
  },
  avatarItem: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.gray100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarItemSelected: {
    backgroundColor: colors.secondary,
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  avatarText: {
    fontSize: 28,
  },

  inputLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.gray700,
    marginBottom: 8,
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray200,
    marginBottom: 4,
  },
  inputContainerError: {
    borderColor: colors.error,
    borderWidth: 1.5,
  },
  textInput: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.gray800,
  },
  errorText: {
    fontSize: 13,
    color: colors.error,
    marginBottom: 12,
    marginTop: 2,
    marginLeft: 4,
  },

  goalsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.gray700,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },

  goalCard: {
    backgroundColor: colors.primaryLight,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  goalCardGreen: {
    backgroundColor: colors.successLight,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.success,
  },
  goalCardPurple: {
    backgroundColor: colors.secondaryLight,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.secondary,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalIconBlue: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  goalIconGreen: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  goalIconPurple: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  goalIconText: {
    fontSize: 20,
  },
  goalLabel: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray700,
    lineHeight: 20,
  },
  goalValueBox: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primaryBorder,
  },
  goalValueBoxGreen: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.successBorder,
  },
  goalValueBoxPurple: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.secondaryBorder,
  },
  goalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  goalValueGreen: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.success,
  },
  goalValuePurple: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.secondary,
  },
  goalUnit: {
    fontSize: 12,
    color: colors.primary,
  },
  goalUnitGreen: {
    fontSize: 12,
    color: colors.success,
  },
  goalUnitPurple: {
    fontSize: 12,
    color: colors.secondary,
  },

  slider: {
    width: '100%',
    height: 40,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  sliderLabelText: {
    fontSize: 12,
    color: colors.gray400,
  },

  bottomContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 10,
  },
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.success,
    height: 56,
    borderRadius: 28,
    shadowColor: colors.success,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
    gap: 8,
  },
  completeButtonIcon: {
    fontSize: 18,
  },
  completeButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.white,
  },
  completeButtonArrow: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '600',
  },
});

export default styles;

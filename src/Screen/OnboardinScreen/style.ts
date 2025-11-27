import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FE',
  },

  pageIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  pageIndicatorActive: {
    width: 24,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4A90E2',
    marginHorizontal: 3,
  },
  pageIndicatorInactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D0D5DD',
    marginHorizontal: 3,
  },

  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  page: {
    width: width,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  pageScrollContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },

  iconContainer: {
    position: 'relative',
    width: 120,
    height: 120,
    marginBottom: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yellowCircle: {
    position: 'absolute',
    top: 0,
    right: -10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFD966',
  },
  mainIconBox: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: '#FF6B9D',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FF6B9D',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  mainIconBoxGreen: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#10B981',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  heartText: {
    fontSize: 40,
    color: '#FFFFFF',
  },
  chartIcon: {
    fontSize: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4A90E2',
    textAlign: 'center',
    marginBottom: 12,
  },

  description: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
    paddingHorizontal: 10,
  },

  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    gap: 20,
  },
  featureItem: {
    alignItems: 'center',
  },
  featureIconBox: {
    width: 60,
    height: 60,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  waterBox: {
    backgroundColor: '#1E3A5F',
  },
  stepsBox: {
    backgroundColor: '#5B4B8A',
  },
  sleepBox: {
    backgroundColor: '#4A90E2',
  },
  featureIconText: {
    fontSize: 26,
  },
  featureLabel: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },

  motivationBanner: {
    width: width - 48,
    backgroundColor: '#F3E8FF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E9D5FF',
  },
  motivationText: {
    fontSize: 14,
    color: '#7C3AED',
    textAlign: 'center',
    fontWeight: '500',
  },

  featureCardsContainer: {
    width: '100%',
    gap: 12,
  },
  featureCard: {
    backgroundColor: '#E0F2FE',
    borderRadius: 16,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  featureCardGreen: {
    backgroundColor: '#D1FAE5',
    borderRadius: 16,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
  },
  featureCardPurple: {
    backgroundColor: '#8B5CF6',
    borderRadius: 16,
    padding: 16,
  },
  featureCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureCardIconBlue: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  featureCardIconGreen: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  featureCardIconPurple: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  featureCardIconText: {
    fontSize: 20,
  },
  featureCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B82F6',
  },
  featureCardTitleDark: {
    fontSize: 16,
    fontWeight: '600',
    color: '#065F46',
  },
  featureCardTitleWhite: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  featureCardDescription: {
    fontSize: 14,
    color: '#1E40AF',
    lineHeight: 20,
  },
  featureCardDescriptionDark: {
    fontSize: 14,
    color: '#047857',
    lineHeight: 20,
  },
  featureCardDescriptionLight: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
  },

  progressDots: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 6,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  progressDotFilled: {
    backgroundColor: '#10B981',
  },
  progressDotEmpty: {
    backgroundColor: '#A7F3D0',
  },

  sleepProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  sleepProgressBar: {
    flex: 1,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 3,
    marginRight: 10,
  },
  sleepProgressFill: {
    width: '80%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
  },
  sleepProgressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  mainIconBoxOrange: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: '#F97316',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F97316',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  starIcon: {
    fontSize: 40,
    color: '#FFFFFF',
  },
  plusBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  numberedListContainer: {
    width: '100%',
    gap: 16,
    marginBottom: 20,
  },
  numberedItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  numberBadgePurple: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  numberBadgeGreen: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  numberBadgeBlue: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  numberText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  numberedContent: {
    flex: 1,
  },
  numberedTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  numberedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginRight: 6,
  },
  checkMark: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: '700',
  },
  numberedDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },

  ctaBanner: {
    width: '100%',
    backgroundColor: '#7C3AED',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 10,
  },
  ctaIcon: {
    fontSize: 20,
    marginBottom: 8,
  },
  ctaTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  ctaSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.85)',
  },

  bottomContainer: {
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
  },
  backButton: {
    flex: 1,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  nextButton: {
    width: '100%',
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6366F1',
    shadowColor: '#6366F1',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  nextButtonSmall: {
    flex: 1.5,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6366F1',
    shadowColor: '#6366F1',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  nextButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  getStartedButton: {
    flex: 1.5,
    height: 54,
    borderRadius: 27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7C3AED',
    shadowColor: '#7C3AED',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
    gap: 10,
  },
  getStartedIcon: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  getStartedText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  skipButton: {
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  skipButtonText: {
    fontSize: 15,
    color: '#9CA3AF',
    fontWeight: '500',
  },
});

export default styles;

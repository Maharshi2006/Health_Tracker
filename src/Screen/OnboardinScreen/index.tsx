import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppStackScreenProps } from '../../models/NavigationType';
import styles from './style';

const { width } = Dimensions.get('window');

type OnboardinScreenPropsTypeDefine = AppStackScreenProps<'OnBoarding'>;

const OnboardinScreen = ({
  navigation: _navigation,
}: OnboardinScreenPropsTypeDefine) => {
  const insets = useSafeAreaInsets();
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3;

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      scrollViewRef.current?.scrollTo({
        x: width * (currentPage + 1),
        animated: true,
      });
      setCurrentPage(currentPage + 1);
    } else {
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      scrollViewRef.current?.scrollTo({
        x: width * (currentPage - 1),
        animated: true,
      });
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSkip = () => {
    scrollViewRef.current?.scrollTo({
      x: width * (totalPages - 1),
      animated: true,
    });
    setCurrentPage(totalPages - 1);
  };

  const handleGetStarted = () => {
    _navigation.navigate('SetupProfile');
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / width);
    setCurrentPage(page);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FE" />

      <View style={styles.pageIndicatorContainer}>
        <View
          style={
            currentPage === 0
              ? styles.pageIndicatorActive
              : styles.pageIndicatorInactive
          }
        />
        <View
          style={
            currentPage === 1
              ? styles.pageIndicatorActive
              : styles.pageIndicatorInactive
          }
        />
        <View
          style={
            currentPage === 2
              ? styles.pageIndicatorActive
              : styles.pageIndicatorInactive
          }
        />
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.page}>
          <View style={styles.iconContainer}>
            <View style={styles.yellowCircle} />
            <View style={styles.mainIconBox}>
              <Text style={styles.heartText}>♡</Text>
            </View>
          </View>

          <Text style={styles.title}>Welcome to Your Health Tracker</Text>

          <Text style={styles.description}>
            Your personal companion for building healthier habits and tracking
            your wellness journey every day.
          </Text>

          <View style={styles.featureContainer}>
            <View style={styles.featureItem}>
              <View style={[styles.featureIconBox, styles.waterBox]}>
                <Text style={styles.featureIconText}>💧</Text>
              </View>
              <Text style={styles.featureLabel}>Water</Text>
            </View>

            <View style={styles.featureItem}>
              <View style={[styles.featureIconBox, styles.stepsBox]}>
                <Text style={styles.featureIconText}>👣</Text>
              </View>
              <Text style={styles.featureLabel}>Steps</Text>
            </View>

            <View style={styles.featureItem}>
              <View style={[styles.featureIconBox, styles.sleepBox]}>
                <Text style={styles.featureIconText}>🌙</Text>
              </View>
              <Text style={styles.featureLabel}>Sleep</Text>
            </View>
          </View>

          <View style={styles.motivationBanner}>
            <Text style={styles.motivationText}>
              ✨ Start your journey to a healthier lifestyle today!
            </Text>
          </View>
        </View>

        <View style={styles.page}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.pageScrollContent}
            nestedScrollEnabled={true}
          >
            <View style={styles.iconContainer}>
              <View style={styles.yellowCircle} />
              <View style={styles.mainIconBoxGreen}>
                <Text style={styles.chartIcon}>📈</Text>
              </View>
            </View>

            <Text style={styles.title}>Track Your Daily Activities</Text>

            <Text style={styles.description}>
              Monitor your water intake, steps walked, and sleep hours. Set
              goals and watch your progress grow over time.
            </Text>

            <View style={styles.featureCardsContainer}>
              <View style={styles.featureCard}>
                <View style={styles.featureCardHeader}>
                  <View style={styles.featureCardIconBlue}>
                    <Text style={styles.featureCardIconText}>💧</Text>
                  </View>
                  <Text style={styles.featureCardTitle}>Stay Hydrated</Text>
                </View>
                <Text style={styles.featureCardDescription}>
                  Track your daily water intake and reach your hydration goals
                </Text>
              </View>

              <View style={styles.featureCardGreen}>
                <View style={styles.featureCardHeader}>
                  <View style={styles.featureCardIconGreen}>
                    <Text style={styles.featureCardIconText}>👣</Text>
                  </View>
                  <Text style={styles.featureCardTitleDark}>Move More</Text>
                </View>
                <Text style={styles.featureCardDescriptionDark}>
                  Count your steps and stay active throughout the day
                </Text>
                <View style={styles.progressDots}>
                  {[...Array(10)].map((_, i) => (
                    <View
                      key={i}
                      style={[
                        styles.progressDot,
                        i < 6
                          ? styles.progressDotFilled
                          : styles.progressDotEmpty,
                      ]}
                    />
                  ))}
                </View>
              </View>

              <View style={styles.featureCardPurple}>
                <View style={styles.featureCardHeader}>
                  <View style={styles.featureCardIconPurple}>
                    <Text style={styles.featureCardIconText}>🌙</Text>
                  </View>
                  <Text style={styles.featureCardTitleWhite}>Sleep Better</Text>
                </View>
                <Text style={styles.featureCardDescriptionLight}>
                  Monitor your sleep patterns for better rest and recovery
                </Text>
                <View style={styles.sleepProgressContainer}>
                  <View style={styles.sleepProgressBar}>
                    <View style={styles.sleepProgressFill} />
                  </View>
                  <Text style={styles.sleepProgressText}>8h</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.page}>
          <View style={styles.iconContainer}>
            <View style={styles.yellowCircle} />
            <View style={styles.mainIconBoxOrange}>
              <Text style={styles.starIcon}>✦</Text>
              <View style={styles.plusBadge}>
                <Text style={styles.plusText}>+</Text>
              </View>
            </View>
          </View>

          <Text style={styles.title}>Simple & Intuitive</Text>

          <Text style={styles.description}>
            Log activities with just a few taps. View your progress on the
            dashboard and check your history anytime.
          </Text>

          <View style={styles.numberedListContainer}>
            <View style={styles.numberedItem}>
              <View style={styles.numberBadgePurple}>
                <Text style={styles.numberText}>1</Text>
              </View>
              <View style={styles.numberedContent}>
                <View style={styles.numberedTitleRow}>
                  <Text style={styles.numberedTitle}>Quick Logging</Text>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <Text style={styles.numberedDescription}>
                  Add activities in seconds with our simple forms
                </Text>
              </View>
            </View>

            <View style={styles.numberedItem}>
              <View style={styles.numberBadgeGreen}>
                <Text style={styles.numberText}>2</Text>
              </View>
              <View style={styles.numberedContent}>
                <View style={styles.numberedTitleRow}>
                  <Text style={styles.numberedTitle}>Daily Dashboard</Text>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <Text style={styles.numberedDescription}>
                  View your progress and stats at a glance
                </Text>
              </View>
            </View>

            <View style={styles.numberedItem}>
              <View style={styles.numberBadgeBlue}>
                <Text style={styles.numberText}>3</Text>
              </View>
              <View style={styles.numberedContent}>
                <View style={styles.numberedTitleRow}>
                  <Text style={styles.numberedTitle}>Track History</Text>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <Text style={styles.numberedDescription}>
                  Review your activities from the past 7 days
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.ctaBanner}>
            <Text style={styles.ctaIcon}>✨</Text>
            <Text style={styles.ctaTitle}>Ready to get started?</Text>
            <Text style={styles.ctaSubtitle}>
              Join thousands building healthier habits
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={[
          styles.bottomContainer,
          { paddingBottom: Math.max(insets.bottom, 20) + 10 },
        ]}
      >
        {currentPage === 2 ? (
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={handleGetStarted}
            >
              <Text style={styles.getStartedIcon}>✦</Text>
              <Text style={styles.getStartedText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        ) : currentPage > 0 ? (
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextButtonSmall}
              onPress={handleNext}
            >
              <Text style={styles.nextButtonText}>Next →</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next →</Text>
          </TouchableOpacity>
        )}

        {currentPage < 2 && (
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipButtonText}>Skip for now →</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OnboardinScreen;

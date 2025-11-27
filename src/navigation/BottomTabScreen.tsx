import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

import { BottomTabScreensTypeDefine } from '../models/NavigationType';
import HomeScreen from '../Screen/HomeScreen';
import ActivityLogScreen from '../Screen/ActivityLogScreen';
import HistoryScreen from '../Screen/HistoryScreen';
import ProfileScreen from '../Screen/ProfileScreen';

const Tab = createBottomTabNavigator<BottomTabScreensTypeDefine>();

export const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabStyles.tabBar,
        tabBarActiveTintColor: '#3B82F6',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarLabelStyle: tabStyles.tabLabel,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <View
              style={[
                tabStyles.iconContainer,
                focused && tabStyles.iconContainerActive,
              ]}
            >
              <Text style={[tabStyles.icon, { color }]}>🏠</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ActivityLog"
        component={ActivityLogScreen}
        options={{
          tabBarLabel: 'Log',
          tabBarIcon: ({ focused, color }) => (
            <View
              style={[
                tabStyles.iconContainer,
                focused && tabStyles.iconContainerActiveGreen,
              ]}
            >
              <Text
                style={[
                  tabStyles.iconPlus,
                  { color: focused ? '#10B981' : color },
                ]}
              >
                +
              </Text>
            </View>
          ),
          tabBarActiveTintColor: '#10B981',
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ focused, color }) => (
            <View
              style={[
                tabStyles.iconContainer,
                focused && tabStyles.iconContainerActivePurple,
              ]}
            >
              <Text
                style={[tabStyles.icon, { color: focused ? '#8B5CF6' : color }]}
              >
                🕐
              </Text>
            </View>
          ),
          tabBarActiveTintColor: '#8B5CF6',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color }) => (
            <View
              style={[
                tabStyles.iconContainer,
                focused && tabStyles.iconContainerActive,
              ]}
            >
              <Text style={[tabStyles.icon, { color }]}>👤</Text>
            </View>
          ),
          tabBarActiveTintColor: '#6B7280',
        }}
      />
    </Tab.Navigator>
  );
};

const tabStyles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 10,
    paddingTop: 8,
    paddingBottom: 16,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerActive: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
  },
  iconContainerActiveGreen: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
  },
  iconContainerActivePurple: {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
  },
  icon: {
    fontSize: 22,
  },
  iconPlus: {
    fontSize: 28,
    fontWeight: '300',
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
  },
});

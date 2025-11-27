import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardinScreen from '../Screen/OnboardinScreen';
import SetupProfileScreen from '../Screen/SetupProfileScreen';
import { BottomTabScreen } from './BottomTabScreen';
import { RootStackScreensTypeDefine } from '../models/NavigationType';
import { useAppSelector } from '../store/hooks';
import { selectIsOnboarded } from '../store/slices/profileSlice';

const Stack = createNativeStackNavigator<RootStackScreensTypeDefine>();

const RootStackScreen: React.FC = () => {
  const isOnboarded = useAppSelector(selectIsOnboarded);

  return (
    <Stack.Navigator
      initialRouteName={isOnboarded ? 'BottomTab' : 'OnBoarding'}
      screenOptions={{ headerShown: false }}
    >
      {!isOnboarded ? (
        <>
          <Stack.Screen name="OnBoarding" component={OnboardinScreen} />
          <Stack.Screen name="SetupProfile" component={SetupProfileScreen} />
        </>
      ) : null}
      <Stack.Screen name="BottomTab" component={BottomTabScreen} />
    </Stack.Navigator>
  );
};
export { RootStackScreen };

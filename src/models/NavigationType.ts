import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootScreenType = RootStackScreensTypeDefine &
  BottomTabScreensTypeDefine;

export type AppStackScreenProps<a extends keyof RootScreenType> =
  NativeStackScreenProps<RootScreenType, a>;

export type BottomTabScreensTypeDefine = {
  Home: undefined;
  ActivityLog: undefined;
  History: undefined;
  Profile: undefined;

};

export type RootStackScreensTypeDefine = {
  Login: undefined;
  Signup: undefined;
  OnBoarding: undefined;
  SetupProfile: undefined;
  BottomTab: undefined;
};

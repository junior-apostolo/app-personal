import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
};

export type UserStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type AdminStackParamList = {
  HomeAdmin: undefined;
  Register: undefined;
};

export type AppStackParamList = {
  Root: NavigatorScreenParams<UserStackParamList>;
};

export type RootStackParamList = {
  AppStack: NavigatorScreenParams<AppStackParamList>;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  AdminStack: NavigatorScreenParams<AdminStackParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type AuthScreenNavigationType<
  RouteName extends keyof AuthStackParamList
> = CompositeNavigationProp<
  NativeStackNavigationProp<AuthStackParamList, RouteName>,
  NativeStackNavigationProp<AppStackParamList, "Root">
>;

export type AdminScreenNavigationType<
  RouteName extends keyof AdminStackParamList
> = CompositeNavigationProp<
  NativeStackNavigationProp<AdminStackParamList, RouteName>,
  NativeStackNavigationProp<AppStackParamList, "Root">
>;

export type SignInNavigationType = CompositeNavigationProp<
  NativeStackNavigationProp<AuthStackParamList, 'SignIn'>,
  NativeStackNavigationProp<RootStackParamList>
>;

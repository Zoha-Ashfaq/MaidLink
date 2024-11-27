import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import './i18n'; // Ensure i18n.js is properly imported
import SplashScreen from './src/screens/SplashScreen'; // Import SplashScreen
import LanguageSelectionScreen from './src/screens/LanguageSelectionScreen'; // Import LanguageSelectionScreen
import ForgotPassword from './src/screens/ForgotPassword';
import HomeScreen from './src/screens/HomeScreen'; // Import HomeScreen
import ProfileScreen from './src/screens/ProfileScreen'; // Import ProfileScreen
import PhoneNumberScreen from './src/screens/PhoneNumberScreen';
import OTPScreen from './src/screens/OTPScreen';
import LoginScreen from './src/screens/LoginScreen';
import RoleSelectionScreen from './src/screens/RoleSelectionScreen';
import HomeOwnerSignUp from './src/screens/HomeOwnerSignUp';
import MaidSignUp from './src/screens/MaidSignUp';
import WorkDetailsScreen from './src/screens/WorkDetailsScreen';
import AddServicesScreen from './src/screens/AddServicesScreen';
import ProfilePictureScreen from './src/screens/ProfilePictureScreen';
import VerificationScreen from './src/screens/VerificationScreen';

const Stack = createStackNavigator(); // Initialize stack navigator

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="LanguageSelectionScreen" component={LanguageSelectionScreen} />
          <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} /> 
          <Stack.Screen name="OTP" component={OTPScreen} options={{ title: 'OTP Verification' }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'ForgotPassword' }} />
          <Stack.Screen name="RoleSelectionScreen" component={RoleSelectionScreen} />
          <Stack.Screen name="HomeOwnerSignUp" component={HomeOwnerSignUp} />
          <Stack.Screen name="MaidSignUp" component={MaidSignUp} />
          <Stack.Screen name="WorkDetailsScreen" component={WorkDetailsScreen} />
          <Stack.Screen name="AddServicesScreen" component={AddServicesScreen} />
          <Stack.Screen name="ProfilePictureScreen" component={ProfilePictureScreen} />
          <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

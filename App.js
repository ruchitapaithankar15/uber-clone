import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'
import { NavigationContainer, StackActions } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding": "height"}
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -64:0}>
        <Stack.Navigator>
          <Stack.Screen
          name='HomeScreen' 
          component={HomeScreen}
          options = {{
            headerShown: false
          }}
          />
          <Stack.Screen
          name='MapScreen' 
          component={MapScreen}
          options = {{
            headerShown: false
          }}
          />
        </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}


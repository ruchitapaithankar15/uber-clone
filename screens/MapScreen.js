import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const MapScreen =() => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen")}
      style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name='menu'/>
      </TouchableOpacity>
    <View style={tw`h-1/2`}>
      <Map/>
    </View>
    <View style={tw`h-1/2`}>
      <Stack.Navigator>
        <Stack.Screen
        name='NavigateCard'
        component={NavigateCard}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen
        name='RideOptionsCard'
        component={RideOptionsCard}
        options={{
          headerShown: false,
        }}
        />

      </Stack.Navigator>
    </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});

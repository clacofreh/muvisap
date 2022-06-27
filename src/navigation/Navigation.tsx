import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen, HomeScreen } from '../screens';
import { Movie } from '../interfaces/MovieDbNowPlaying';

export type RootStackParams = {
  Home: undefined;
  Details: Movie;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        /*   contentStyle: {  }, */
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;

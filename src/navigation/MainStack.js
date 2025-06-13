/* eslint-disable react-hooks/exhaustive-deps */
import {createStackNavigator} from '@react-navigation/stack';
import {DEFAULT_DARK_THEME, DEFAULT_LIGHT_THEME, useTheme} from '../theme';
import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import Home from '../Screens/Main/Home';
import Detail from '../Screens/Main/Detail';
const Stack = createStackNavigator();

const MainStack = () => {
  const colorScheme = useColorScheme();
  let {setTheme} = useTheme();

  useEffect(() => {
    if (colorScheme === 'dark') {
      setTheme(DEFAULT_DARK_THEME);
    } else {
      setTheme(DEFAULT_LIGHT_THEME);
    }
  }, [colorScheme]);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default MainStack;

import {NavigationContainer} from '@react-navigation/native';
import {useThemeAwareObject} from '../theme';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainStack from './MainStack';

function Route() {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      main: {
        backgroundColor: theme.color.primaryBackground,
        flex: 1,
      },
      statusBar: {
        backgroundColor: theme.color.white,
      },
    });
    return themeStyles;
  };

  const styles = useThemeAwareObject(createStyles);

  return (
    <>
      <View style={styles.statusBar}>
        <SafeAreaView>
          <StatusBar
            backgroundColor={styles.statusBar.backgroundColor}
            barStyle={'dark-content'}
          />
        </SafeAreaView>
      </View>
      <SafeAreaView style={styles.main}>
        <GestureHandlerRootView style={{flex: styles.main.flex}}>
          <NavigationContainer
            onReady={() => {
              BootSplash.hide({fade: true});
            }}>
            <MainStack />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaView>
    </>
  );
}

export default Route;

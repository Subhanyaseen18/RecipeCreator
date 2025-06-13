import Route from './src/navigation';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {useThemeAwareObject, ThemeProvider} from './src/theme';

function App() {
  const createStyles = () => {
    const themeStyles = StyleSheet.create({
      main: {
        flexGrow: 1,
      },
    });
    return themeStyles;
  };

  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={styles.main}>
      <ThemeProvider>
        <Route />
      </ThemeProvider>
    </View>
  );
}

export default App;

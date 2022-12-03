import { NativeBaseProvider, Box, StatusBar } from 'native-base';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/app.routes';

import { theme } from './src/styles/theme';

export default function App() {
  const navigationTheme = DefaultTheme;
  navigationTheme.colors.background = theme.colors.primary[100]

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar translucent barStyle={'light-content'} />
      <Box flex="1" bg={theme.colors.primary[100]}>
        <NavigationContainer theme={navigationTheme}>
          <AppRoutes />
        </NavigationContainer>
      </Box>
    </NativeBaseProvider>
  );
}

//npx json-server --watch db.json --host 192.168.12.12
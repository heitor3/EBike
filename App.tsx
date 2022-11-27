import { NativeBaseProvider, Box, StatusBar } from 'native-base';

import { Home } from './src/screen/Home';

import { theme } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar translucent barStyle={'light-content'} />
      <Box flex="1" bg={theme.colors.primary[100]}>
        <Home />
      </Box>
    </NativeBaseProvider>
  );
}

//npx json-server --watch db.json --host 192.168.12.12
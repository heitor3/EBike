import { Box, Icon, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons'
import { SquareButton } from '../atoms/SquareButton';
import { SafeAreaView, StatusBar } from 'react-native';

type Props = {
  text?: string
}

export function Header({ text }: Props) {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <Box h="100px" alignContent="center" mt="26px" flexDirection="row" justifyContent="space-between">
        <Text fontSize="lg" bold color="white">{text}</Text>
        <SquareButton>
          <Icon as={AntDesign} name="search1" color="white" />
        </SquareButton>
      </Box>
    </SafeAreaView>
  );
}
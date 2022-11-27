import { Center, useTheme } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Gradient } from './Gradient';

type Props = {
  children: React.ReactNode;
  isGradient?: boolean;
}

export function GradientSquareButton({ isGradient = true, children }: Props) {
  const { colors } = useTheme()

  return (
    <TouchableOpacity>
      <Center shadow="5" w="46px" borderRadius="10px" h="46px" bg="primary.50:alpha.9" padding={2}>
        {isGradient ? <Gradient>{children}</Gradient> : children}

      </Center>
    </TouchableOpacity>
  );
}
import { Box, HStack, Image, Text } from "native-base";
import { GradientSquareButton } from "../atoms/GradientSquareButton";
import bike from '../../img/categories/subtract.png'
import road from '../../img/categories/road.png'
import helmet from '../../img/categories/helmet.png'
import mountain from '../../img/categories/mountain.png'


export function CategoryList() {
  return (
    <Box mb="20px" mt="5px" w="100%" alignSelf="center" justifyContent="space-between">
      <HStack justifyContent="space-between" width="95px">

        <Box ml="20px" mt="0px">
          <GradientSquareButton isGradient>
            <Text color='white'>All</Text>
          </GradientSquareButton>
        </Box>
        <Box ml="20px" mt="-10px">
          <GradientSquareButton isGradient={false}>
            <Image source={bike} alt="icon of bike" resizeMode="contain" />
          </GradientSquareButton>
        </Box>
        <Box ml="20px" mt="-20px">
          <GradientSquareButton isGradient={false}>
            <Image source={road} alt="icon of road" resizeMode="contain" />
          </GradientSquareButton>
        </Box>
        <Box ml="20px" mt="-30px">
          <GradientSquareButton isGradient={false}>
            <Image source={helmet} alt="icon of helmet" resizeMode="contain" />
          </GradientSquareButton>
        </Box>
        <Box ml="20px" mt="-40px">
          <GradientSquareButton isGradient={false}>
            <Image source={mountain} alt="icon of mountain" resizeMode="contain" />
          </GradientSquareButton>
        </Box>
      </HStack>
    </Box>
  );
}
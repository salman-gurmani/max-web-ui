import {
  Text,
  IconButton,
  Grid,
  GridItem,
  VStack,
  Image,
} from '@chakra-ui/react'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

interface StatsViewProps {
  title: string
  subTitle: string
  icon: string
}

const StatsView = (props: StatsViewProps) => {
  return (
    <Grid
      templateColumns="25% 75%" //25% for icon and 75% for text
      alignContent="flex-start" //horzontally align content on left
      justifyContent="flex-start" // vertically align content on left
      marginTop={{ base: 5 }} // marginTop only for small screen for better view
    >
      <GridItem
        display={'flex'} //gridItem should behave like flex instead of adding flex componenet
        justifyContent="center" // justify icon in center
        key={uuidv4()}
      >
        <IconButton
          icon={<Image src={props.icon} alt="" />}
          aria-label={props.title}
          isRound={false}
          background="#18191D"
          borderWidth={1.5}
          borderColor="#3D3F4C"
          borderRadius={'20px'}
          color="white"
          width={{ base: '60px', md: '70px', lg: '80px' }} //responsive breakpoints
          height={{ base: '40px', md: '60px', lg: '60px' }} //responsive
          pointerEvents="none" // button behaviour cancel
        />
      </GridItem>

      <GridItem
        justifyContent="flex-start" //   text align
        alignContent="flex-start" // text align
        marginLeft={5} // margin from icon
      >
        <VStack
          align="flex-start" //VStack for vertically stack the title and subtitle
        >
          <Text
            fontSize={{ base: '20px', md: '25px', lg: '30px' }} //font sizes for screens
            color="white"
            fontFamily="roboto"
            fontStyle={'normal'}
            lineHeight={'normal'}
            fontWeight="100"
          >
            {props.title}
          </Text>

          <Text
            fontSize={{ base: '12px', md: '13px', lg: '15px' }} // font sizes for different screens
            color="white"
            fontFamily="roboto"
            textOverflow={'false'}
          >
            {props.subTitle}
          </Text>
        </VStack>
      </GridItem>
    </Grid>
  )
}

export default StatsView

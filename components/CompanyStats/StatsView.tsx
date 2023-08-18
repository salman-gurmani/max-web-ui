import { Text, IconButton, Grid, GridItem, VStack } from '@chakra-ui/react'

const StatsView = (props) => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={2}
      height="75px"
      marginLeft={"30px"}
      marginRight={"30px"}
    >
      <GridItem  colSpan={1} w="80px"> 

        <center>
        <IconButton
            icon={props.icon}
            aria-label={props.title}
            isRound={false}
            background="#18191D"
            borderWidth={1.5}
            borderColor="#3D3F4C"
            borderRadius={"20px"}
            color="white"
            width="75px"
            height="75px"
          />
        </center>


      </GridItem>

      <GridItem  colSpan={1} width="100%" w="150px"> 
      <VStack
        alignItems={"left"}
      >
      <Text
          fontSize="30px"
          color="white"
          fontFamily="roboto"
          fontStyle={"normal"}
          lineHeight={'normal'}
          fontWeight="500"
        >
          {props.title}
        </Text>

        <Text
          fontSize="15px"
          color="white"
          fontFamily="roboto"
          textAlign={'left'}
          textOverflow={'false'}
          fontWeight="400"

        >
          {props.subTitle}
        </Text>
      </VStack>
      
      </GridItem>
    </Grid>
  )
}

export default StatsView

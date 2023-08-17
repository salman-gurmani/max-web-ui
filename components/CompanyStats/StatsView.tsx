import { Text, IconButton, Grid, GridItem } from '@chakra-ui/react'

const StatsView = (props) => {
  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={3}
      height="75px"
    >
      <GridItem
        display={'flex'}
        rowSpan={3}
        colSpan={1}
        justifyContent="center" // Center content vertically
        alignItems="center" // Center content horizontally
      >
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
      </GridItem>

      <GridItem rowSpan={2} colSpan={1} >
        <Text
          fontSize="30px"
          color="white"
          fontFamily="roboto"
          fontStyle={"normal"}
          lineHeight={'normal'}
          fontWeight="100"
          textAlign={'left'}
        >
          {props.title}
        </Text>
      </GridItem>

      <GridItem rowSpan={1} colSpan={1} > 
        <Text
          fontSize="15px"
          color="white"
          fontFamily="roboto"
          textAlign={'left'}
          textOverflow={'false'}
        >
          {props.subTitle}
        </Text>
      </GridItem>
    </Grid>
  )
}

export default StatsView

import { Card, CardBody, CardHeader, Text, IconButton } from '@chakra-ui/react'

import { BoxLine } from '@components/BoxLine'

import { HiArchive } from 'react-icons/hi/'

const ExpertiseCard = (props) => {
  return (
    <Card
      w="auto"
      h="auto"
      borderRadius="10px"
      bg="#18191D"
      display="flex" // Added display flex
      flexDirection="column" // Added column flex direction
      justifyContent="center" // Center content vertically
      alignItems="center" // Center content horizontally
      p={4} // Add padding for better spacing on mobile
    >
      <CardHeader>
        <IconButton
          icon={<HiArchive size={30} />}
          aria-label="web"
          isRound
          background="#2A2C39"
          color="white"
          width="50px"
          height="50px"
          marginLeft="auto"
          marginRight="auto"
          marginTop="0" // Reset any default margin
          marginBottom="0" // Reset any default margin
        />
      </CardHeader>

      <Text
        fontSize={{ base: '20px', md: '25px', lg: '25' }}
        color="white"
        fontFamily="roboto"
      >
        {props.title}
      </Text>
      <BoxLine
        width={props.boxLineWidth}
        height="3px"
        bg="#FF0084"
        marginLeft="auto"
        marginRight="auto"
      />

      <CardBody>
        <Text
          textAlign="center" // Center align the text horizontally
          fontSize={{ base: '12px', md: '13px', lg: '15px' }}
          fontFamily="roboto"
          color="white"
        >
          {props.desc}
        </Text>
      </CardBody>
    </Card>
  )
}

export { ExpertiseCard }

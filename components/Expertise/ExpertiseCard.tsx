import { Card, CardBody, CardHeader, Text, IconButton } from '@chakra-ui/react'

import { BoxLine } from '@components/BoxLine'

import { HiArchive } from 'react-icons/hi/'

const ExpertiseCard = (props) => {
  return (
    <Card
      w="auto"
      h="450px"
      borderRadius="10px"
      bg="#18191D"
      display="flex" // Added display flex
      flexDirection="column" // Added column flex direction
      justifyContent="center" // Center content vertically
      alignItems="center" // Center content horizontally
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
      <Text fontSize={25} color="white">
        {props.title}
      </Text>
      <BoxLine
        width="25px"
        height="3px"
        bg="#FF0084"
        marginLeft="auto"
        marginRight="auto"
      />

      <CardBody>
        <Text
          textAlign="center" // Center align the text horizontally
          fontSize={13}
          color="white"
        >
          {props.desc}
        </Text>
      </CardBody>
    </Card>
  )
}

export { ExpertiseCard }

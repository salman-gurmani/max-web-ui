import { Card, CardBody, CardHeader, Text, IconButton } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'

import { BoxLine } from '@components/BoxLine'
import { CldImage } from 'next-cloudinary'

interface ExpertiseCardProps {
  title: string
  boxLineWidth: string
  desc: string
  icon: string
}

const ExpertiseCard = (props: ExpertiseCardProps) => {
  return (
    <Card
      key={uuidv4()}
      w="auto"
      h="500px"
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
          icon={<CldImage src={props.icon} width={40} height={40} alt="" />}
          aria-label={props.title}
          isRound
          background="#2A2C39"
          color="white"
          width="50px"
          height="50px"
          marginLeft="auto"
          marginRight="auto"
          marginTop="0" // Reset any default margin
          marginBottom="0" // Reset any default margin
          pointerEvents="none"
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
        marginTop="1px"
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

import { Box, Heading, List, Image, ListItem } from '@chakra-ui/react'
import { BoxLine } from '@components/BoxLine'

import { ProjectDetailsImages } from '@components/Images'
const BoxList = () => {
  return (
    <Box
      borderRadius="4px"
      border="1px solid #2A2C39"
      background="#18191D"
      padding={8}
      width="auto"
      height="auto"
    >
      <Heading
        color="white"
        fontFamily="roboto"
        fontSize={{ base: '15px', md: '20px', lg: '25px' }}
        marginBottom={3}
        textAlign="center"
      >
        Need Our Help?
      </Heading>
      <BoxLine
        width="100%"
        height="1px"
        marginLeft="2px"
        marginRight="auto"
        bg="#2A2C39"
        marginTop="1px"
      />
      <List spacing={5}>
        <ListItem
          color="white"
          fontFamily="roboto"
          fontSize={{ base: '13px', md: '15px', lg: '18px' }}
          display="flex"
          alignItems="left"
          marginTop={5}
        >
          <Image src={ProjectDetailsImages.callIcon.src.src} alt="" />
          <span style={{ marginLeft: '20px' }}>+4917634649431</span>
        </ListItem>
        <ListItem
          color="white"
          fontFamily="roboto"
          fontSize={{ base: '13px', md: '15px', lg: '18px' }}
          display="flex"
          alignItems="center"
        >
          <Image src={ProjectDetailsImages.projectEmailIcon.src.src} alt="" />
          <span style={{ marginLeft: '20px' }}>maxovation@gmail.com</span>
        </ListItem>
        <ListItem
          color="white"
          fontFamily="roboto"
          fontSize={{ base: '13px', md: '15px', lg: '18px' }}
          display="flex"
          alignItems="center"
        >
          <Image src={ProjectDetailsImages.linkedinIcon.src.src} alt="" />
          <span style={{ marginLeft: '20px' }}>Maxovation</span>
        </ListItem>
        <ListItem
          color="white"
          fontFamily="roboto"
          fontSize={{ base: '13px', md: '15px', lg: '18px' }}
          display="flex"
          alignItems="center"
        >
          <Image
            src={ProjectDetailsImages.projectLocationIcon.src.src}
            alt=""
          />
          <span style={{ marginLeft: '20px' }}>Eindhoven, North Brabant</span>
        </ListItem>
      </List>
    </Box>
  )
}
export { BoxList }

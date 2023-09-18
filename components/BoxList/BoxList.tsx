import {
  Box,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react'
import { BoxLine } from '@components/BoxLine'
import { CldImage } from 'next-cloudinary'
const BoxList = () => {
  return (
    <Box
      borderRadius="4px"
      border="1px solid #2A2C39"
      background="#18191D"
      paddingY={8}
      paddingX={10}
      w={{ base: '300px', md: '300px', lg: '320px' }}
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
      <VStack gap={2} marginTop={2} justifyContent="flex-start">
        <HStack
          justifySelf="flex-start"
          alignItems="center"
          justifyContent="flex-start"
          height="100%"
          width="100%"
        >
          <IconButton
            icon={
              <CldImage
                src="v1694585526/Icons/ProjectDetails/callIcon_kf1msn.svg"
                alt=""
                width={25}
                height={25}
              />
            }
            aria-label="phone"
            background="#18191D"
            size="md"
            justifySelf="flex-start"
            pointerEvents="none"
          />

          <Text
            fontFamily="roboto"
            marginLeft={{ base: '20px', md: '15px', lg: '20px' }}
            width="90%"
            marginTop="10px"
            color="white"
            fontSize={['13px', '15px', '17px']}
          >
            +4917634649431{' '}
          </Text>
        </HStack>
        <HStack
          justifySelf="flex-start"
          alignItems="center"
          justifyContent="flex-start"
          height="100%"
          width="100%"
        >
          <IconButton
            icon={
              <CldImage
                src="v1694585526/Icons/ProjectDetails/emailIcon_jkfwgv.svg"
                alt=""
                width={25}
                height={25}
              />
            }
            aria-label="phone"
            background="#18191D"
            size="md"
            justifySelf="flex-start"
            pointerEvents="none"
          />

          <Text
            fontFamily="roboto"
            marginLeft={{ base: '20px', md: '15px', lg: '20px' }}
            width="90%"
            marginTop="10px"
            color="white"
            fontSize={['11px', '13px', '15px']}
          >
            maxovation@gmail.com{' '}
          </Text>
        </HStack>
        <HStack
          justifySelf="flex-start"
          alignItems="center"
          justifyContent="flex-start"
          height="100%"
          width="100%"
        >
          <IconButton
            icon={
              <CldImage
                src="v1694585526/Icons/ProjectDetails/linkedinIcon_zjyqb1.svg"
                alt=""
                width={25}
                height={25}
              />
            }
            aria-label="phone"
            background="#18191D"
            size="md"
            justifySelf="flex-start"
            pointerEvents="none"
          />

          <Text
            fontFamily="roboto"
            marginLeft={{ base: '20px', md: '15px', lg: '20px' }}
            width="90%"
            marginTop="10px"
            color="white"
            fontSize={['11px', '13px', '15px']}
          >
            Maxovation{' '}
          </Text>
        </HStack>
        <HStack
          justifySelf="flex-start"
          alignItems="center"
          justifyContent="flex-start"
          height="100%"
          width="100%"
        >
          <IconButton
            icon={
              <CldImage
                src="v1694585526/Icons/ProjectDetails/locationIcon_l88uee.svg"
                alt=""
                width={25}
                height={25}
              />
            }
            aria-label="phone"
            background="#18191D"
            size="md"
            justifySelf="flex-start"
            pointerEvents="none"
          />

          <Text
            fontFamily="roboto"
            marginLeft={{ base: '20px', md: '15px', lg: '20px' }}
            width="90%"
            marginTop="10px"
            color="white"
            fontSize={['11px', '13px', '15px']}
          >
            Eindhoven, North Brabant{' '}
          </Text>
        </HStack>
      </VStack>
    </Box>
  )
}
export { BoxList }

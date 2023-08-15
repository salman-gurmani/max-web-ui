import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  Box,
  Heading,
} from '@chakra-ui/react'
import { BoxLine } from '@components/BoxLine'
const BoxTable = () => {
  return (
    <Box
      borderRadius="4px"
      border="1px solid #2A2C39"
      background="#18191D"
      paddingY={5}
      marginTop={{ base: 5, md: 3, lg: 0 }}
      w="auto"
      h="auto"
    >
      <Heading
        color="white"
        fontFamily="roboto"
        fontSize={{ base: '15px', md: '20px', lg: '25px' }}
        marginBottom={3}
        textAlign="center"
      >
        Project Details
      </Heading>
      <BoxLine
        width="100%"
        height="1px"
        marginLeft="2px"
        marginRight="auto"
        bg="#2A2C39"
      />
      {/* <Grid
        templateColumns="1fr 1fr"
        // marginY={10}
        //marginX={{ base: '5', md: '10', lg: '20' }}
        gap={{ base: 6, md: 8, lg: 12 }}
        padding={2}
        bg="red"
      >
        <VStack align="flex-start">
          <Text
            color="white"
            fontFamily="roboto"
            fontSize={{ base: '11px', md: '13px', lg: '15px' }}
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
          >
            Start Date:
          </Text>
          <Text
            color="white"
            fontFamily="roboto"
            fontSize={{ base: '11px', md: '13px', lg: '15px' }}
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
          >
            End Date:
          </Text>
          <Text
            color="white"
            fontFamily="roboto"
            fontSize={{ base: '11px', md: '13px', lg: '15px' }}
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
          >
            Client:
          </Text>
          <Text
            color="white"
            fontFamily="roboto"
            fontSize={{ base: '11px', md: '13px', lg: '15px' }}
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
          >
            Tag:
          </Text>
          <Text
            color="white"
            fontFamily="roboto"
            fontSize={{ base: '11px', md: '13px', lg: '15px' }}
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
          >
            {' '}
            Website:
          </Text>
          <Text
            color="white"
            fontFamily="roboto"
            fontSize={{ base: '11px', md: '13px', lg: '15px' }}
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
          >
            {' '}
            Category:
          </Text>
        </VStack>
        <VStack>
          <Text     color="#9F9F9F"
                fontFamily="roboto"
                fontSize={{ base: '11px', md: '13px', lg: '16px' }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                31 May 2022</Text>
          <Text>End Date</Text>
          <Text>Website</Text>
          <Text>Category</Text>
          <Text></Text>
        </VStack>
      </Grid> */}
      <TableContainer>
        <Table variant="unstyled">
          <Tbody>
            <Tr>
              <Td
                color="white"
                fontFamily="roboto"
                fontSize={{ base: '11px', md: '13px', lg: '16px' }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                Start Date:
              </Td>
              <Td
                color="#9F9F9F"
                fontFamily="roboto"
                fontSize={{ base: '11px', md: '13px', lg: '16px' }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                31 May 2022
              </Td>
            </Tr>
            <Tr>
              <Td
                color="white"
                fontFamily="roboto"
                fontSize={{ base: '11px', md: '13px', lg: '16px' }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                End Date:
              </Td>
              <Td
                color="#9F9F9F"
                fontFamily="roboto"
                fontSize={{ base: '11px', md: '13px', lg: '16px' }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                15 June 2022
              </Td>
            </Tr>
            <Tr>
              <Td
                color="white"
                fontFamily="roboto"
                fontSize={{ base: '11px', md: '13px', lg: '16px' }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                Client
              </Td>
              <Td
                color="#9F9F9F"
                fontFamily="roboto"
                fontSize={{ base: '11px', md: '13px', lg: '16px' }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                IdeegamesLhr
              </Td>
            </Tr>
            <Tr>
              <Td
                color="white"
                fontFamily="roboto"
                fontSize={{ base: '11px', md: '13px', lg: '16px' }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                Tags
              </Td>
              <Td
                color="#9F9F9F"
                fontFamily="roboto"
                fontSize={{ base: '11px', md: '13px', lg: '16px' }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                Web Design
              </Td>
            </Tr>
            <Tr>
              <Td
                color="white"
                fontFamily="roboto"
                fontSize={{ base: '11px', md: '13px', lg: '16px' }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                Website
              </Td>
              <Td
                color="#9F9F9F"
                fontFamily="roboto"
                fontSize={{ base: '11px', md: '13px', lg: '16px' }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                ideegame.com
              </Td>
            </Tr>
            <Tr>
              <Td
                color="white"
                fontFamily="roboto"
                fontSize={{ base: '11px', md: '13px', lg: '16px' }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                Category
              </Td>
              <Td
                color="#9F9F9F"
                fontFamily="roboto"
                fontSize={{ base: '11px', md: '13px', lg: '16px' }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                Design
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
export { BoxTable }

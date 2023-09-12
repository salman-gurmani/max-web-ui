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

interface BoxTableProps {
  Year: string
  Category: string
  Tags: string
}

const BoxTable = (props: BoxTableProps) => {
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
        marginTop="1px"
      />

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
                Year:
              </Td>
              <Td
                color="#9F9F9F"
                fontFamily="roboto"
                fontSize={{ base: '11px', md: '13px', lg: '16px' }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                {props.Year}
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
                {props.Category}
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
                {props.Tags}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
export { BoxTable }

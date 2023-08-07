import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Grid,
    GridItem,
    Image,
    Text
  } from '@chakra-ui/react'

import { BoxLine } from '@components/BoxLine';
  
import { HiArchive } from "react-icons/hi/";

  const ExpertiseCard = (props) =>{

    return(
        <Card w="300px" h="400px" borderRadius="10px" bg="#18191D">
            
            <CardHeader >
              <center>
                <circle ra={20}>
                    
                    <HiArchive size={40} color="white" />
                    <Text color="white">{props.title}</Text>
                    <BoxLine
                        width="15px"
                        height="3px"
                        bg="#FF0084"
                     />
                </circle>
              </center>
            </CardHeader>

            <CardBody>
              <center >
                <Text fontSize={10} color="white">
                    {props.desc}
                </Text>

              </center>              
            </CardBody>
          </Card>

    )

  } 

  export { ExpertiseCard }
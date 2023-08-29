import { Flex, Grid, Heading } from '@chakra-ui/react'

import { ExpertiseCard } from './ExpertiseCard'
import { ExpertiseData } from './Expertisedata'
import { map } from 'lodash'

const Expertise = () => {
  return (
    <Flex direction="column" bg="#111215">
      <Flex alignContent="center" justifyContent="center">
        <Heading
          backgroundImage="linear-gradient(135deg, #2FBBFB 20%, #D442E0 51.56%, #F15D3C 100%)"
          backgroundClip="text"
          fontStyle="normal"
          color="transparent"
          fontFamily="roboto"
          fontSize={{ base: '30px', md: '45px', lg: '55px' }}
          paddingTop={10}
          textAlign="center"
        >
          Our Expertise / What we do
        </Heading>
      </Flex>

      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
        marginX={20}
        marginY={10}
        gap={20}
      >
        {map(ExpertiseData, (data) => {
          return (
            <ExpertiseCard
              title={data.title}
              desc={data.desc}
              boxLineWidth={data.boxLineWidth}
              icon={data.icon}
            />
          )
        })}
      </Grid>
    </Flex>
  )
}

export { Expertise }

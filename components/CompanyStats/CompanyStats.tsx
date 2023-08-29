import { Flex, Grid, Heading } from '@chakra-ui/react'

import {StatsData} from "./StatsData"
import StatsCard from "./StatsCard"

import { map } from 'lodash'

const CompanyStats = () => {
  return (
    <Flex direction="column" bg="#3D3F4C">

      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
        marginX={20}
        marginY={10}
        gap={20}
      >
        {map(StatsData, (data) => {
          return (
            <StatsCard
              title={data.title}
              desc={data.subTitle}
              boxLineWidth={data.imgIndex}
            />
          )
        })}
      </Grid>
    </Flex>
  )
}

export { CompanyStats }
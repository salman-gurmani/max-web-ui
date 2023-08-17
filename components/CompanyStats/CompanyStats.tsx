import { Flex, Grid } from '@chakra-ui/react'

import {StatsData} from "./StatsData"
import StatsView from "./StatsView"

import { map } from 'lodash'

const CompanyStats = () => {
  return (
    <Flex direction="column" bg="#18191D">

      <Grid
        templateColumns={{ base: '1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
        marginX={20}
        marginY={10}
        gap={20}
      >
        {map(StatsData, (data) => {
          return (
            <StatsView
              title={data.title}
              subTitle={data.subTitle}
              icon={data.icon}
            />
          )
        })}
      </Grid>
    </Flex>
  )
}

export { CompanyStats }
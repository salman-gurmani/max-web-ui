import { Flex, Grid } from '@chakra-ui/react'

import { StatsData } from './StatsData'
import StatsView from './StatsView'

import { map } from 'lodash'
import React from 'react'
import { Zoom } from 'react-awesome-reveal'
const CompanyStats = () => {
  return (
    <Flex direction="column" bg="#18191D">
      <Grid
        templateColumns={{
          base: '1fr 1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr 1fr 1fr',
        }}
        marginX={{ base: 10, md: 50, lg: 100 }} // margin left and right have same value so insteaf og marginLeft and marginRight use marginX
        marginY={25}
        gap={{ base: 2, md: 10, lg: 20 }} // gap for different screen sizes
      >
        <Zoom cascade>
          {map(StatsData, (data, index) => {
            return (
              <StatsView
                title={data.title}
                subTitle={data.subTitle}
                icon={data.icon}
                index={index}
              />
            )
          })}
        </Zoom>
      </Grid>
    </Flex>
  )
}

export { CompanyStats }

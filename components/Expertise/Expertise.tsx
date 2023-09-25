import { Flex, Grid, Heading } from '@chakra-ui/react'

import { ExpertiseCard } from './ExpertiseCard'
import { ExpertiseData } from './Expertisedata'
import { map } from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import { Element } from 'react-scroll'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'

const Expertise = () => {
  return (
    <Element name="about">
      <Flex direction="column" bg="#111215">
        <Flex alignContent="center" justifyContent="center">
          <Zoom cascade>
            <Heading
              backgroundImage="linear-gradient(135deg, #2FBBFB 20%, #D442E0 51.56%, #F15D3C 100%)"
              backgroundClip="text"
              fontStyle="normal"
              color="transparent"
              fontFamily="roboto"
              fontSize={{ base: '25px', md: '45px', lg: '55px' }}
              paddingTop={10}
              textAlign="center"
            >
              Our Expertise / What we do
            </Heading>
          </Zoom>
        </Flex>

        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
          marginX={{ base: 5, md: 10, lg: 20 }}
          marginY={{ base: 5, md: 7, lg: 10 }}
          gap={{ base: 10, md: 15, lg: '10' }}
        >
          {map(ExpertiseData, (data) => {
            return (
              <Fade>
                <Slide direction="left">
                  <ExpertiseCard
                    key={uuidv4()}
                    title={data.title}
                    desc={data.desc}
                    boxLineWidth={data.boxLineWidth}
                    icon={data.icon}
                  />
                </Slide>
              </Fade>
            )
          })}
        </Grid>
      </Flex>
    </Element>
  )
}

export { Expertise }

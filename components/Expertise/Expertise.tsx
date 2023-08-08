import { Box, Flex, Grid, Heading } from '@chakra-ui/react'

import { ExpertiseCard } from './ExpertiseCard'

const expertiseData = [
  {
    title: 'Web',
    boxLineWidth: '25px',
    desc: 'We are a leading company at the forefront of the digital landscape, offering a diverse range of cutting-edge products in the domains of AI, Blockchain, Gaming, and Web2.0. Our expertise lies in delivering exceptional graphic design, website development, and top-notch web solutions. With a focus on optimizing Google page rankings and ensuring robust website security, we are committed to providing unparalleled digital marketing services. Through our innovative approach and a team of experts,we empower businesses to thrive in the dynamic and competitive online ecosystem.',
  },
  {
    title: 'Video Games',
    boxLineWidth: '90px',
    desc: 'Our team creates captivating games with immersive gameplay, stunning visuals, and engaging storylines. From action-packed adventures to mind-bending puzzles, our diverse range of titles offers something for every player. Get ready for thrilling quests and endless excitement in the world of Maxovation.',
  },
  {
    title: 'Services',
    boxLineWidth: '60px',
    desc: 'Maxovation excels at transforming innovative concepts into tangible solutions. From web and mobile applications to software and digital products, we bring your ideas to life efficiently and effectively. Partner with us to make your vision a reality.',
  },
]

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
        <ExpertiseCard
          title={expertiseData[0].title}
          desc={expertiseData[0].desc}
          boxLineWidth={expertiseData[0].boxLineWidth}
        />
        <ExpertiseCard
          title={expertiseData[1].title}
          desc={expertiseData[1].desc}
          boxLineWidth={expertiseData[1].boxLineWidth}
        />
        <ExpertiseCard
          title={expertiseData[2].title}
          desc={expertiseData[2].desc}
          boxLineWidth={expertiseData[2].boxLineWidth}
        />
      </Grid>
    </Flex>
  )
}

export { Expertise }

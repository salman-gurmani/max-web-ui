import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Flex,
  Center
} from '@chakra-ui/react'

import { ExpertiseCard } from './ExpertiseCard';

const expertiseData = [
  {
    title: 'Web',
    boxLineWidth: 1,
    desc: "We are a leading company at the forefront of the digital landscape, offering a diverse range of cutting-edge products in the domains of AI, Blockchain, Gaming, and Web2.0. Our expertise lies in delivering exceptional graphic design, website development, and top-notch web solutions. With a focus on optimizing Google page rankings and ensuring robust website security, we are committed to providing unparalleled digital marketing services. Through our innovative approach and a team of experts,we empower businesses to thrive in the dynamic and competitive online ecosystem."
  },
  {
    title: 'Video Games',
    boxLineWidth: 2,
    desc: "Our team creates captivating games with immersive gameplay, stunning visuals, and engaging storylines. From action-packed adventures to mind-bending puzzles, our diverse range of titles offers something for every player. Get ready for thrilling quests and endless excitement in the world of Maxovation."
  },
  {
    title: 'Services',
    boxLineWidth: 3,
    desc: "Maxovation excels at transforming innovative concepts into tangible solutions. From web and mobile applications to software and digital products, we bring your ideas to life efficiently and effectively. Partner with us to make your vision a reality."
  }
];

const Expertise = () => {
  return (
      <Box w="100%" h="712px" bg='#111215'>
        
        <center>
        <Heading textAlign="center" fontWeight="500" pt={20} pb="20">
          Our Expertise / What we do
        </Heading>

        <Flex align="center" justify="center" gap={10}>

        <ExpertiseCard 
          title={expertiseData[0].title}
          desc={expertiseData[0].desc} 
        />
        <ExpertiseCard 
          title={expertiseData[1].title}
          desc={expertiseData[1].desc} 
        />
        <ExpertiseCard 
          title={expertiseData[2].title}
          desc={expertiseData[2].desc} 
        />
        </Flex>


        </center>




      </Box>
  )
}

export { Expertise }

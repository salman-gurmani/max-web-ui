// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css'
// import styled from 'styled-components'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
// import { map } from 'lodash'
// import { Box, Text, VStack, useBreakpointValue, Button } from '@chakra-ui/react'
// import { v4 as uuidv4 } from 'uuid'
// import { WebArrowsImages } from '../Images'
// import { CldImage } from 'next-cloudinary'
// import { ProjectDetailTypes } from '@components/Data/websitesData'
// import { useRouter } from 'next/router'

// const StyledSwiper = styled(Swiper)`
//   position: relative;

//   .swiper-button-prev {
//     color: transparent;
//     position: absolute;
//     left: 0;
//     top: 50%;
//     transform: translateY(-50%);
//     background-image: url(${WebArrowsImages.leftArrow.src.src});
//     background-repeat: no-repeat;
//     background-size: cover;
//     width: 35px;
//     height: 35px;
//     z-index: 10;
//     &:after {
//       font-size: 20px;
//     }
//   }

//   .swiper-button-next {
//     color: transparent;
//     position: absolute;
//     right: 0;
//     top: 50%;
//     transform: translateY(-50%);
//     background-image: url(${WebArrowsImages.rightArrow.src.src});
//     background-repeat: no-repeat;
//     background-size: cover;
//     width: 35px;
//     height: 35px;
//     z-index: 10;
//     &:after {
//       font-size: 20px;
//     }
//   }
// `

// interface SliderProps {
//   slides: ProjectDetailTypes[]
// }

// const Slider = ({ slides }: SliderProps) => {
//   const Paddingsize = useBreakpointValue({
//     base: 20,
//     md: 50,
//     lg: 50,
//   })
//   const slidesSize = useBreakpointValue({
//     base: 1,
//     sm: 2,
//     md: 2,
//     lg: 1,
//     xl: 2,
//   })
//   const gapSize = useBreakpointValue({
//     base: 2,
//     sm: 2,
//     md: 3,
//     lg: 4,
//     xl: 5,
//   })

//   const router = useRouter()

//   const handleClick = (id: string) => {
//     router.push(`/projects/${id}`)
//   }
//   return (
//     <StyledSwiper
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       navigation
//       slidesPerView={slidesSize}
//       spaceBetween={gapSize}
//       style={{
//         width: '100%',
//         paddingLeft: Paddingsize,
//       }}
//       // breakpoints={{
//       //   600: {
//       //     slidesPerView: 1,
//       //     spaceBetween: 3,
//       //   },
//       //   700: {
//       //     slidesPerView: 2,
//       //     spaceBetween: 2,
//       //   },
//       //   1024: {
//       //     slidesPerView: 1,
//       //     spaceBetween: 2,
//       //   },

//       //   1200: {
//       //     slidesPerView: 2,
//       //     spaceBetween: 4,
//       //   },
//       //   1600: {
//       //     slidesPerView: 2,
//       //     spaceBetween: 3,
//       //   },
//       //   1924: {
//       //     slidesPerView: 2,
//       //     spaceBetween: 4,
//       //   },
//       // }}
//     >
//       {map(slides, (data: ProjectDetailTypes) => {
//         return (
//           <SwiperSlide key={uuidv4()} style={{ margin: '10px' }}>
//             <Box
//               key={uuidv4()}
//               width={{ base: '210px', md: '240px', lg: '245px' }}
//               height={{ base: '310px', md: '320px', lg: '350px' }}
//               border="1px solid #2A2C39"
//               background="#18191D"
//               display="flex"
//               flexDirection="column"
//               justifyContent="center"
//               alignItems="center"
//               overflow="hidden"
//               borderRadius="10px 10px 0 0"
//             >
//               <CldImage src={data.image} alt="" width={265} height={350} />

//               <VStack mt="4" spacing="5" style={{ flex: '1', width: '100%' }}>
//                 <Text
//                   color="white"
//                   fontFamily="roboto"
//                   fontWeight="400"
//                   alignSelf="center"
//                 >
//                   {data.Year}
//                 </Text>
//                 <Text
//                   color="white"
//                   fontFamily="roboto"
//                   fontWeight="400"
//                   alignSelf="center"
//                 >
//                   {data.title}
//                 </Text>
//                 <Button
//                   color="white"
//                   fontFamily="roboto"
//                   fontWeight="400"
//                   alignSelf="center"
//                   backgroundColor="transparent"
//                   width="124px"
//                   height="40px"
//                   zIndex="5"
//                   variant="outline"
//                   textAlign="center"
//                   fontSize="12px"
//                   paddingX={{ base: '1', md: '5', lg: '4' }}
//                   paddingY={2}
//                   backgroundImage="linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)"
//                   backgroundClip="text"
//                   sx={{
//                     borderImage: `linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%) 1`,
//                     borderStyle: 'solid',
//                     borderWidth: '2px',
//                   }}
//                   _hover={{
//                     background:
//                       'var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))',
//                     textColor: 'white',
//                   }}
//                   onClick={() => handleClick(data.key)}
//                 >
//                   View Project
//                 </Button>
//               </VStack>
//             </Box>
//           </SwiperSlide>
//         )
//       })}
//     </StyledSwiper>
//   )
// }
// export { Slider }

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import styled from 'styled-components'

import { map } from 'lodash'
import { Box, Text, VStack, useBreakpointValue, Button } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'
import { WebArrowsImages } from '../Images'
import { CldImage } from 'next-cloudinary'
import { ProjectDetailTypes } from '@components/Data/websitesData'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const StyledSwiper = styled(Swiper)`
  position: 'absolute';
`

interface SliderProps {
  slides: ProjectDetailTypes[]
}

const Slider = ({ slides }: SliderProps) => {
  const swiperRef = useRef<SwiperCore | null>(null)

  const handleClickPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  const handleClickNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }
  const Paddingsize = useBreakpointValue({
    base: 20,
    md: 30,
    lg: 70,
    xl: 50,
  })
  const slidesSize = useBreakpointValue({
    base: 1,
    sm: 2,
    md: 2,
    lg: 1,
    xl: 2,
    xxl: 3,
  })
  const gapSize = useBreakpointValue({
    base: 2,
    sm: 2,
    md: 2,
    lg: 2,
    xl: 3,
  })

  const router = useRouter()

  const handleClick = (id: string) => {
    router.push(`/projects/${id}`)
  }
  return (
    <Box
      position="relative"
      width="100%" /* Adjust the width as needed */
      overflow="hidden"
      padding="25px"
    >
      {/* Navigation Buttons */}
      <Button
        color="transparent"
        position="absolute"
        left="-3px"
        top="50%"
        transform="translateY(-50%)"
        background={`url(${WebArrowsImages.leftArrow.src.src}) no-repeat`}
        backgroundSize="contain"
        width="30px"
        height="30px"
        zIndex="10"
        transition="width 0.3s, height 0.3s" // Add a transition for a smooth effect
        _hover={{
          width: '40px', // Adjust the width on hover
          height: '40px', // Adjust the height on hover
          background: `url(${WebArrowsImages.leftArrow.src.src}) no-repeat`,
          backgroundSize: 'contain', // Ensure the background stays the same
        }}
        onClick={handleClickPrev}
      />

      <Button
        color="transparent"
        position="absolute"
        right="-13px"
        top="50%"
        transform="translateY(-50%)"
        background={`url(${WebArrowsImages.rightArrow.src.src}) no-repeat`}
        backgroundSize="contain"
        width="30px"
        height="30px"
        zIndex="10"
        transition="width 0.3s, height 0.3s" // Add a transition for a smooth effect
        _hover={{
          width: '40px', // Adjust the width on hover
          height: '40px', // Adjust the height on hover
          background: `url(${WebArrowsImages.rightArrow.src.src}) no-repeat`, // Ensure the background stays the same
          backgroundSize: 'contain', // Ensure the background stays the same
        }}
        onClick={handleClickNext}
      />
      <StyledSwiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[Pagination, Scrollbar, A11y]}
        slidesPerView={slidesSize}
        spaceBetween={gapSize}
        style={{
          width: '95%',
          paddingLeft: Paddingsize,
          marginLeft: '10px',
          marginRight: '10px',
        }}
        breakpoints={{
          200: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
        }}
      >
        {map(slides, (data: ProjectDetailTypes) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <Box
                key={uuidv4()}
                width={{ base: '190px', md: '240px', lg: '285px', xl: '245px' }}
                height={{
                  base: '290px',
                  md: '320px',
                  lg: '370px',
                  xl: '350px',
                }}
                border="1px solid #2A2C39"
                background="#18191D"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                borderRadius="10px 10px 0 0"
              >
                <CldImage src={data.image} alt="" width={365} height={450} />

                <VStack mt="4" spacing="5" style={{ flex: '1', width: '100%' }}>
                  <Text
                    color="white"
                    fontFamily="roboto"
                    fontWeight="400"
                    alignSelf="center"
                  >
                    {data.Year}
                  </Text>
                  <Text
                    color="white"
                    fontFamily="roboto"
                    fontWeight="400"
                    alignSelf="center"
                  >
                    {data.title}
                  </Text>
                  <Button
                    color="white"
                    fontFamily="roboto"
                    fontWeight="400"
                    alignSelf="center"
                    backgroundColor="transparent"
                    width="124px"
                    height="40px"
                    zIndex="5"
                    variant="outline"
                    textAlign="center"
                    fontSize="12px"
                    paddingX={{ base: '1', md: '5', lg: '4' }}
                    paddingY={2}
                    backgroundImage="linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)"
                    backgroundClip="text"
                    sx={{
                      borderImage: `linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%) 1`,
                      borderStyle: 'solid',
                      borderWidth: '2px',
                    }}
                    _hover={{
                      background:
                        'var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))',
                      textColor: 'white',
                    }}
                    onClick={() => handleClick(data.key)}
                  >
                    View Project
                  </Button>
                </VStack>
              </Box>
            </SwiperSlide>
          )
        })}
      </StyledSwiper>
    </Box>
  )
}
export { Slider }

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import styled from 'styled-components'
import { map } from 'lodash'
import { Box, Text, VStack, useBreakpointValue, Button } from '@chakra-ui/react'
import { WebArrowsImages } from '../Images'
import { CldImage } from 'next-cloudinary'
import { ProjectDetailTypes } from '@components/Data/websitesData'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const StyledSwiper = styled(Swiper)`
  position: 'absolute';
`

interface SliderProps {
  slides: ProjectDetailTypes[]
}

const Slider = ({ slides }: SliderProps) => {
  const slidesSize = useBreakpointValue({
    base: 1,
    sm: 2,
    md: 2,
    lg: 1,
    xl: 2,
    xxl: 3,
  })
  const Paddingsize = useBreakpointValue({
    base: 10,
    sm: 20,
    md: 30,
    lg: 60,
    xl: 50,
  })

  const gapSize = useBreakpointValue({
    base: 2,
    sm: 2,
    md: 2,
    lg: 2,
    xl: 3,
  })
  const [swiperSettings, setSwiperSettings] = useState({
    slidesPerView: slidesSize,
    spaceBetween: gapSize,
  })
  console.log(swiperSettings)
  useEffect(() => {
    const updateSwiperSettings = () => {
      setSwiperSettings({
        slidesPerView: slidesSize,
        spaceBetween: gapSize,
      })
    }

    updateSwiperSettings()
    window.addEventListener('resize', updateSwiperSettings)

    return () => {
      window.removeEventListener('resize', updateSwiperSettings)
    }
  }, [])
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

  const router = useRouter()

  const handleClick = (id: string) => {
    router.push(`/projects/${id}`)
  }
  return (
    <Box position="relative" width="100%" overflow="hidden" padding="25px">
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
        transition="width 0.3s, height 0.3s"
        _hover={{
          width: '40px',
          height: '40px',
          background: `url(${WebArrowsImages.leftArrow.src.src}) no-repeat`,
          backgroundSize: 'contain',
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
        transition="width 0.3s, height 0.3s"
        _hover={{
          width: '40px',
          height: '40px',
          background: `url(${WebArrowsImages.rightArrow.src.src}) no-repeat`,
          backgroundSize: 'contain',
        }}
        onClick={handleClickNext}
      />
      <StyledSwiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          swiper.params.slidesPerView = slidesSize
          swiper.params.spaceBetween = gapSize
          swiper.update()
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
      >
        {map(slides, (data: ProjectDetailTypes) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <Box
                width={{ base: '180px', md: '240px', lg: '285px', xl: '245px' }}
                height={{
                  base: '280px',
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
